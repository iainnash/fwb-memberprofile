// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import {String} from "@openzeppelin/contracts/utils/String.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {IERC721Metadata} from "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";


// Core membership contract (updatable)
contract MembershipManager is Ownable, ERC165 {
    // struct EIP712Signature {
    //     uint256 deadline;
    //     uint8 v;
    //     bytes32 r;
    //     bytes32 s;
    // }

    // bytes32 public constant MINT_WITH_SIG_TYPEHASH =
    //     keccak256("mintWithSig(address user,uint256 nonce,uint256 deadline)");
    // bytes32 public constant TRANSFER_WITH_SIG_TYPEHASH =
    //     keccak256(
    //         "transferWallet(address user,uint256 nonce,uint256 deadline)"
    //     );

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

    constructor(string _urlBase, address _manager) {
        urlBase = _urlBase;
        manager = _manager;
        emit NewManager(manager);
    }

    /// An owner can set a manager user that can manage memberships
    modifier onlyManager() {
        require(msg.sender == manager, "Only manager");
        _;
    }

    /// An owner can set a manager user that can manage memberships
    function setManager(address _manager) onlyOwner {
        manager = _manager;
        emit NewManager(manager);
    }

    /// Getter for address to NFT id
    function getIdForAddress(address addr) returns (uint256) {
        return addressToId[addr];
    }

    /// Getter for NFT id to address
    function getAddressForId(uint256 id) returns (address) {
        return idToAddress[id];
    }

    /// Virtual getter for url server nft base
    function tokenUrl(uint256 id) returns (string memory) {
        return string(abi.encodePacked(urlBase, Strings.toString(id)));
    }

    /// Admin function to transfer a wallet to a new NFT address
    function transferWallet(address from, address to) onlyManager {
        tokenId = addressToId(from);
        addressToId[address] = 0x0;
        idToAddress[id] = newAddress;
        addressToId[newAddress] = id;
        emit Transfer(address, newAddress, id);
    }

    /// Admin function to revoke membership for user
    function revokeMembership(address member) onlyManager {
        uint256 id = addressToId[address];
        delete addressToId[address];
        delete idToAddress[id];
    }

    /// Mint mew membership from the manager account
    function mint(address to) onlyManager {
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
        require(addressToId[token] == 0x0);
        uint256 newId = idCounter.increment();
        addressToId[address] = newId;
        idToAddress[newId] = address;
        emit Transfer(0x0, address, newId);
    }

    // signature permit functions (TODO)

    // function transferWalletWithSig(EIP712Signature memory sig, address from, address to) public {
    //   require(
    //           sig.deadline == 0 || sig.deadline >= block.timestamp,
    //           "Media: mintWithSig expired"
    //       );
    //   require(sig == encode (from, to))

    //     bytes32 digest =
    //           keccak256(
    //               abi.encodePacked(
    //                   "\x19\x01",
    //                   domainSeparator,
    //                   keccak256(
    //                       abi.encode(
    //                           TRANSFER_WITH_SIG_TYPEHASH,
    //                           data.contentHash,
    //                           data.metadataHash,
    //                           bidShares.creator.value,
    //                           mintWithSigNonces[creator]++,
    //                           sig.deadline
    //                       )
    //                   )
    //               )
    //           );

    //       address recoveredAddress = ecrecover(digest, sig.v, sig.r, sig.s);

    //       require(
    //           recoveredAddress != address(0) && creator == recoveredAddress,
    //           "Media: Signature invalid"
    //       );

    //   _transfer(from, to)
    // }

    // mintWithSig(EIP712Signature memory sig, address) =>
    //   require(Sig === digest)
    //   require(hasRole(Recover address sig, updater))
    //   _safeMint(address)

}
