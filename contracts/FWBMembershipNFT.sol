// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import {StringsUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import {ERC165Upgradeable} from "@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol";
import {IERC165Upgradeable} from "@openzeppelin/contracts-upgradeable/utils/introspection/IERC165Upgradeable.sol";
import {CountersUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {FWBMembershipSkeletonNFT} from "./FWBMembershipSkeletonNFT.sol";
import {EIP712Upgradeable} from "@openzeppelin/contracts-upgradeable/utils/cryptography/draft-EIP712Upgradeable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {SignatureCheckerUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/cryptography/SignatureCheckerUpgradeable.sol";

// FWB Core membership contract (Updatable)
contract FWBMembershipNFT is
    OwnableUpgradeable,
    FWBMembershipSkeletonNFT,
    EIP712Upgradeable,
    UUPSUpgradeable
{
    /// @notice URLBase for metadata
    string public urlBase;

    /// @notice Address for manager
    address public manager;

    /// @notice Event for when a new manager is assigned
    event NewManager(address indexed _manager);

    /// @notice Upgradeable init fn
    function initialize(string memory _urlBase, address _manager)
        public
        initializer
    {
        __Ownable_init();
        __EIP712_init("FWBMembershipNFT", "1");
        __UUPSUpgradeable_init();
        __ERC165_init();

        urlBase = _urlBase;
        manager = _manager;
        emit NewManager(manager);
    }

    /**
        Admin permission functions and modifiers
     */

    /// @notice UUPS admin upgrade permission fn
    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyOwner
    {
        // only owner can upgrade contract
    }

    /// @notice An owner can set a manager user that can manage memberships
    modifier onlyManager() {
        require(msg.sender == manager, "Only manager");
        _;
    }

    /**
        URI Management tools
     */

    /// @notice admin function to update base uri
    function updateUrlBase(string memory newUrlBase) external onlyOwner {
        urlBase = newUrlBase;
    }

    /// @notice An owner can set a manager user that can manage memberships
    function setManager(address _manager) external onlyOwner {
        manager = _manager;
        emit NewManager(manager);
    }

    /// @notice Getter for url server nft base
    function tokenURI(uint256 id) external view returns (string memory) {
        return
            string(abi.encodePacked(urlBase, StringsUpgradeable.toString(id)));
    }

    /// @notice Admin function to revoke membership for user
    function adminRevokeMemberships(uint256[] memory ids) external onlyOwner {
        for (uint256 i = 0; i < ids.length; i++) {
            _burn(ids[i]);
        }
    }

    function burn(uint256 id) external {
        require(msg.sender == ownerOf(id), "NFT Burn: needs to be owner");
        _burn(id);
    }

    /// @notice Admin function to transfer a wallet to a new NFT address
    function transferFrom(
        address from,
        address to,
        uint256 checkTokenId
    ) external override onlyOwner {
        uint256 tokenId = addressToId[from];
        require(checkTokenId == tokenId, "ERR: Token ID mismatch");

        _transferFrom(from, to, tokenId);
    }

    /// Mint mew membership from the manager account
    function adminMint(address to, uint256 id) external onlyOwner {
        _safeMint(to, id);
    }


    /// @notice list of used signature nonces
    mapping(uint256 => bool) usedNonces;

    /// @notice modifier for valid nonce with signature-based call
    modifier withValidNonceAndDeadline(uint256 nonce, uin256 deadline) {
        require(block.timestamp <= deadline, "Deadline time passed");
        require(!usedNonces[nonce], "nonce used");
        usedNonces[nonce] = true;
        _;
    }

    bytes32 private immutable _PERMIT_MINT_TYPEHASH =
        keccak256(
            "PermitMint(address to, uint256 tokenId, uint256 deadline, uint256 nonce)"
        );
    
    /// @notice Mint with signed message data
    function mintWithSign(
        address to,
        uint256 tokenId,
        uint256 deadline,
        uint256 nonce,
        bytes memory signature
    ) external withValidNonceAndDeadline(nonce, deadline) {
        // We allow any user to execute a signature to mint the NFt.
        require(to == msg.sender, "Needs to be receiving wallet");

        require(
            SignatureCheckerUpgradeable.isValidSignatureNow(
                // manager is the signer
                manager,
                _hashTypedDataV4(
                    keccak256(
                        abi.encode(
                            _PERMIT_MINT_TYPEHASH,
                            to,
                            tokenId,
                            deadline,
                            nonce
                        )
                    )
                ),
                signature
            ),
            "NFTPermit::mintWithSign: Invalid signature"
        );

        _safeMint(to, tokenId);
    }

    bytes32 private immutable _PERMIT_TRANSFER_TYPEHASH =
        keccak256(
            "PermitTransfer(address from, address to, uint256 tokenId, uint256 deadline, uint256 nonce)"
        );
    

    /// @notice Transfer with signed message data
    function transferWithSign(
        address from,
        address to,
        uint256 tokenId,
        uint256 deadline,
        uint256 nonce,
        bytes memory signature
    ) external withValidNonceAndDeadline(nonce, deadline) {
        require(to == msg.sender, "Needs to be receiving wallet");

        require(
            SignatureCheckerUpgradeable.isValidSignatureNow(
                manager,
                _hashTypedDataV4(
                    keccak256(
                        abi.encode(
                            _PERMIT_TRANSFER_TYPEHASH,
                            from,
                            to,
                            tokenId,
                            deadline,
                            nonce
                        )
                    )
                )
            ),
            "NFTPermit::transferWithSign: Invalid signature"
        );

        _transferFrom(from, to, tokenId);
    }
}
