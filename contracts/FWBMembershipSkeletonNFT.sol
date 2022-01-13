// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ERC165Upgradeable} from "@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol";
import {IERC165Upgradeable} from "@openzeppelin/contracts-upgradeable/utils/introspection/IERC165Upgradeable.sol";
import {IERC721Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC721/IERC721Upgradeable.sol";
import {CountersUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import {IERC721MetadataUpgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/IERC721MetadataUpgradeable.sol";

abstract contract FWBMembershipSkeletonNFT is
    ERC165Upgradeable,
    IERC721Upgradeable,
    IERC721MetadataUpgradeable
{
    using CountersUpgradeable for CountersUpgradeable.Counter;

    /// Counter for totalSupply
    CountersUpgradeable.Counter numberTokens;

    /// Stores address to membership id
    mapping(address => uint256) public addressToId;

    /// Stores membership id to address
    mapping(uint256 => address) public idToAddress;

    modifier notSupported() {
        revert("Fn not supported: nontransferrable NFT");
        _;
    }

    /**
        Common NFT functions
     */

    // NFT Metadata Name
    string public constant name = "FWB Membership NFT";

    // NFT Metadata Symbol
    string public constant symbol = "FWBMEM";

    /// NFT Functions
    function balanceOf(address user) public view returns (uint256) {
        return addressToId[user] == 0 ? 0 : 1;
    }

    /// ownerOf getter, checks if token exists
    function ownerOf(uint256 id) public view returns (address) {
        require(
            idToAddress[id] != address(0x0),
            "ERC721: Token does not exist"
        );
        return idToAddress[id];
    }

    function getApproved(uint256) public view returns (address) {
        return address(0x0);
    }

    function isApprovedForAll(address, address) public view returns (bool) {
        return false;
    }

    function approve(address, uint256) public notSupported {}

    function setApprovalForAll(address, bool) public notSupported {}

    function _safeMint(address to, uint256 id) internal {
        require(idToAddress[id] == address(0x0), "Mint: already claimed");
        require(
            to != address(0x0) && id != 0,
            "Mint: cannot mint null id or to"
        );
        numberTokens.increment();
        addressToId[to] = id;
        idToAddress[id] = to;
        emit Transfer(address(0x0), to, id);
    }

    /// override me
    function transferFrom(
        address from,
        address to,
        uint256 checkTokenId
    ) external virtual {}

    function safeTransferFrom(
        address,
        address,
        uint256
    ) public notSupported {
        // no impl
    }

    function safeTransferFrom(
        address,
        address,
        uint256,
        bytes memory
    ) public notSupported {
        // no impl
    }

    function _burn(uint256 id) internal {
        address from = ownerOf(id);
        numberTokens.decrement();
        delete idToAddress[id];
        delete addressToId[from];
        emit Transfer(from, address(0x0), id);
    }

    function totalSupply() public view returns (uint256) {
        return numberTokens.current();
    }

    /// Supports ERC721, ERC165
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC165Upgradeable, IERC165Upgradeable)
        returns (bool)
    {
        return
            ERC165Upgradeable.supportsInterface(interfaceId) ||
            interfaceId == type(IERC721Upgradeable).interfaceId ||
            interfaceId == type(IERC721MetadataUpgradeable).interfaceId;
    }
}
