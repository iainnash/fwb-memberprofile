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

// FWB Core membership contract (Updatable)
contract FWBMembershipNFT is
    OwnableUpgradeable,
    ERC165Upgradeable,
    IERC721Upgradeable,
    IERC721MetadataUpgradeable,
    UUPSUpgradeable
{
    using CountersUpgradeable for CountersUpgradeable.Counter;

    CountersUpgradeable.Counter numberTokens;

    /// Stores address to membership id
    mapping(address => uint256) public addressToId;

    /// Stores membership id to address
    mapping(uint256 => address) public idToAddress;

    /// URLBase for metadata
    string public urlBase;

    /// Address for manager
    address public manager;

    /// Event for when a new manager is assigned
    event NewManager(address indexed _manager);

    // NFT Metadata Name
    string public constant name = "FWB Membership NFT";

    // NFT Metadata Symbol
    string public constant symbol = "FWBMEM";

    /// NFT Functions
    function balanceOf(address user) public view returns (uint256) {
        return addressToId[user] == 0 ? 0 : 1;
    }

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

    function initialize(string memory _urlBase, address _manager)
        public
        initializer
    {
        urlBase = _urlBase;
        manager = _manager;
        emit NewManager(manager);
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyOwner
    {
        // only owner can upgrade contract
    }

    function updateUrlBase(string memory newUrlBase) external onlyOwner {
        urlBase = newUrlBase;
    }

    /// An owner can set a manager user that can manage memberships
    modifier onlyManager() {
        require(msg.sender == manager, "Only manager");
        _;
    }

    modifier notSupported() {
        revert("Fn not supported: nontransferrable NFT");
        _;
    }

    /// An owner can set a manager user that can manage memberships
    function setManager(address _manager) external onlyOwner {
        manager = _manager;
        emit NewManager(manager);
    }

    /// Virtual getter for url server nft base
    function tokenURI(uint256 id) external view returns (string memory) {
        return
            string(abi.encodePacked(urlBase, StringsUpgradeable.toString(id)));
    }

    /// Admin function to transfer a wallet to a new NFT address
    function transferFrom(
        address from,
        address to,
        uint256 checkTokenId
    ) external onlyOwner {
        uint256 tokenId = addressToId[from];
        require(checkTokenId == tokenId, "ERR: Token ID mismatch");
        addressToId[from] = 0x0;
        idToAddress[tokenId] = to;
        addressToId[to] = tokenId;
        emit Transfer(from, to, tokenId);
    }

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

    function totalSupply() public view returns (uint256) {
        return numberTokens.current();
    }

    /// Admin function to revoke membership for user
    function adminRevokeMemberships(address[] memory members)
        external
        onlyManager
    {
        for (uint256 i = 0; i < members.length; i++) {
            uint256 id = addressToId[members[i]];
            numberTokens.decrement();
            delete addressToId[members[i]];
            delete idToAddress[id];
            emit Transfer(members[i], address(0x0), id);
        }
    }

    /// Mint mew membership from the manager account
    function adminMint(address to, uint256 id) external onlyManager {
        _safeMint(to, id);
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
