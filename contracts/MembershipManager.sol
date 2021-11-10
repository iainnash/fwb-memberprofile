// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {Counters} from "@openzeppelin/contracts/utils/Counters.sol";
import {IERC721Metadata} from "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

// Core membership contract (updatable)
contract MembershipManager is Ownable, ERC165 {
    using Counters for Counters.Counter;

    Counters.Counter atTokenId;

    /// Stores address to membership id
    mapping(address => uint256) private addressToId;
    /// Stores membership id to address
    mapping(uint256 => address) private idToAddress;
    /// URLBase for metadata
    string private urlBase;
    /// Address for manager
    address private manager;

    /// Standard ERC721 transfer event
    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 indexed _tokenId
    );
    /// Event for when a new manager is assigned
    event NewManager(address indexed _manager);

    constructor(string memory _urlBase, address _manager) {
        urlBase = _urlBase;
        manager = _manager;
        emit NewManager(manager);
    }

    function updateUrlBase(string memory newUrlBase) external onlyOwner {
        urlBase = newUrlBase;
    }

    /// An owner can set a manager user that can manage memberships
    modifier onlyManager() {
        require(msg.sender == manager, "Only manager");
        _;
    }

    /// An owner can set a manager user that can manage memberships
    function setManager(address _manager) external onlyOwner {
        manager = _manager;
        emit NewManager(manager);
    }

    /// Getter for address to NFT id
    function getIdForAddress(address addr) external view returns (uint256) {
        return addressToId[addr];
    }

    /// Getter for NFT id to address
    function getAddressForId(uint256 id) external view returns (address) {
        return idToAddress[id];
    }

    /// Virtual getter for url server nft base
    function tokenURI(uint256 id) external view returns (string memory) {
        return string(abi.encodePacked(urlBase, Strings.toString(id)));
    }

    /// Admin function to transfer a wallet to a new NFT address
    function transferWallet(address from, address newAddress)
        external
        onlyManager
    {
        uint256 tokenId = addressToId[from];
        addressToId[from] = 0x0;
        idToAddress[tokenId] = newAddress;
        addressToId[newAddress] = tokenId;
        emit Transfer(from, newAddress, tokenId);
    }

    /// Admin function to revoke membership for user
    function revokeMembership(address member) external onlyManager {
        uint256 id = addressToId[member];
        delete addressToId[member];
        delete idToAddress[id];
        emit Transfer(member, address(0x0), id);
    }

    /// Mint mew membership from the manager account
    function mint(address to) external onlyManager {
        _safeMint(to);
    }

    /// Supports ERC721, ERC165
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override
        returns (bool)
    {
        return
            ERC165.supportsInterface(interfaceId) ||
            interfaceId == type(IERC721).interfaceId ||
            interfaceId == type(IERC721Metadata).interfaceId;
    }

    function _safeMint(address to) internal {
        atTokenId.increment();
        addressToId[to] = atTokenId.current();
        idToAddress[atTokenId.current()] = to;
        emit Transfer(address(0x0), to, atTokenId.current());
    }

    /// Mint with signed message data
    function mintWithSig(
        address to,
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
        _safeMint(to);
    }
}
