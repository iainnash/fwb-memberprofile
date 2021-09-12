// SPDX-License-Identifier: MIT

// // SPDX-License-Identifier: MIT


// pragma solidity ^0.8.4;


// // Core membership contract (updatable)
// Contract MembershipManager is AccessControl {
//   // roles 1: admin, 2: updater
//   // updater is hot wallet that can sign requests
//   Event Transfer();
//   getIdForAddress(address) => id
//   getAddressForId(id) => address
//   tokenId() => returns simple string with id and address to server url (set by owner)
//   transferWallet(from address, to address) onlyUpdater => 
//     tokenId = addressToId(from);
//     addressToId(address) = 0x0; idToAddress(id) = newAddress; addressToId(newAddress) = id
//     Emit Transfer(address, newAddress, id)
//   transferWithSig(EIP712Signature memory sig, address from, address to) =>
//     require(hasRole(sig, updater))
//     require(sig == encode (from, to))
//     _transfer(from, to)
//   mint(address) onlyUpdater => _safeMint(address)
//   mintWithSig(EIP712Signature memory sig, address) => 
//     require(Sig === digest)
//     require(hasRole(Recover address sig, updater))
//     _safeMint(address)
//   _safeMint(address) => require(addressToId(token) === 0x0)
//       newId = idCounter.increment()
//       addressToId(address) = newId;
//       idToAddress(newId) => address
//       Emit Transfer(0x0, address, newId);
// }
