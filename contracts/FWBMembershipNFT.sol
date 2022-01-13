// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import {StringsUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import {ERC165Upgradeable} from "@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol";
import {IERC165Upgradeable} from "@openzeppelin/contracts-upgradeable/utils/introspection/IERC165Upgradeable.sol";
import {IERC721Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC721/IERC721Upgradeable.sol";
import {CountersUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import {IERC721MetadataUpgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/IERC721MetadataUpgradeable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {FWBMembershipSkeletonNFT} from "./FWBMembershipSkeletonNFT.sol";

// FWB Core membership contract (Updatable)
contract FWBMembershipNFT is
    OwnableUpgradeable,
    FWBMembershipSkeletonNFT,
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

    /// Mint with signed message data
    function mintWithSig(
        address to,
        uint256 id,
        bytes calldata data,
        bytes memory signature
    ) external {
        (address toAddress, uint256 deadline) = abi.decode(
            data,
            (address, uint256)
        );
        require(block.number <= deadline, "Deadline passed");
        require(toAddress == to, "Address does not match");
        bytes32 hashedMessage = keccak256(data);
        address sender = ECDSA.recover(hashedMessage, signature);
        require(sender == manager, "Only signed manager address");
        _safeMint(to, id);
    }
}
