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
    function adminRevokeMemberships(uint256[] memory ids) external onlyManager {
        for (uint256 i = 0; i < ids.length; i++) {
            _burn(ids[i]);
        }
    }

    /// @notice Admin function to transfer a wallet to a new NFT address
    function transferFrom(
        address from,
        address to,
        uint256 checkTokenId
    ) external override onlyOwner {
        uint256 tokenId = addressToId[from];
        require(checkTokenId == tokenId, "ERR: Token ID mismatch");
        addressToId[from] = 0x0;
        idToAddress[tokenId] = to;
        addressToId[to] = tokenId;
        emit Transfer(from, to, tokenId);
    }

    /// Mint mew membership from the manager account
    function adminMint(address to, uint256 id) external onlyManager {
        _safeMint(to, id);
    }


    bytes32 private immutable _PERMIT_MINT_TYPEHASH =
        keccak256(
            "PermitMint(address to, uint256 tokenId, uint256 deadline, uint256 nonce)"
        );
    
    mapping(uint256 => bool) usedNonces;

    modifier withValidNonce(uint256 nonce) {
        require(!usedNonces[nonce], "nonce used");
        usedNonces[nonce] = true;
        _;
    }

    /// Mint with signed message data
    function mintWithSign(
        address to,
        uint256 tokenId,
        uint256 deadline,
        uint256 nonce,
        bytes memory signature
    ) external withValidNonce(nonce) {
        require(block.number <= deadline, "Deadline passed");

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
}
