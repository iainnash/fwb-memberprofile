/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GMPass, GMPassInterface } from "../GMPass";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "base64gm",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "generateGM",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getColor",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "gm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "gmsSaidBack",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sayGM",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "sayGMBack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060408051808201825260098152680474d506173735f76360bc1b602080830191825283518085019094526006845265474d474d474d60d01b908401528151919291620000619160009162000080565b5080516200007790600190602084019062000080565b50505062000163565b8280546200008e9062000126565b90600052602060002090601f016020900481019282620000b25760008555620000fd565b82601f10620000cd57805160ff1916838001178555620000fd565b82800160010185558215620000fd579182015b82811115620000fd578251825591602001919060010190620000e0565b506200010b9291506200010f565b5090565b5b808211156200010b576000815560010162000110565b600181811c908216806200013b57607f821691505b602082108114156200015d57634e487b7160e01b600052602260045260246000fd5b50919050565b61245880620001736000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80634f6ccce7116100c3578063b88d4fde1161007c578063b88d4fde146102c0578063bb899535146102d3578063c0129d43146102e6578063c87b56dd146102fd578063dd36c11114610310578063e985e9c51461032357600080fd5b80634f6ccce7146102595780636352211e1461026c57806370a082311461027f57806380057b9a1461029257806395d89b41146102a5578063a22cb465146102ad57600080fd5b806318160ddd1161011557806318160ddd146101fd5780631f3177021461020557806323b872dd14610218578063254069031461022b5780632f745c591461023357806342842e0e1461024657600080fd5b806301ffc9a71461015257806306fdde031461017a578063081812fc1461018f578063095ea7b3146101ba578063112b13f3146101cf575b600080fd5b610165610160366004611c88565b61035f565b60405190151581526020015b60405180910390f35b61018261038a565b6040516101719190611ebe565b6101a261019d366004611cc0565b61041c565b6040516001600160a01b039091168152602001610171565b6101cd6101c8366004611c5f565b6104b6565b005b6101ef6101dd366004611cc0565b600b6020526000908152604090205481565b604051908152602001610171565b6008546101ef565b6101cd610213366004611cc0565b6105cc565b6101cd610226366004611b15565b610662565b6101cd610693565b6101ef610241366004611c5f565b6106ff565b6101cd610254366004611b15565b610795565b6101ef610267366004611cc0565b6107b0565b6101a261027a366004611cc0565b610851565b6101ef61028d366004611ac9565b6108c8565b6101826102a0366004611cc0565b61094f565b6101826109b2565b6101cd6102bb366004611c25565b6109c1565b6101cd6102ce366004611b50565b610a86565b6101826102e1366004611cc0565b610abe565b6101cd336000908152600a60205260409020429055565b61018261030b366004611cc0565b610c77565b61018261031e366004611cc0565b610cf2565b610165610331366004611ae3565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b0319821663780e9d6360e01b1480610384575061038482610d05565b92915050565b60606000805461039990612002565b80601f01602080910402602001604051908101604052809291908181526020018280546103c590612002565b80156104125780601f106103e757610100808354040283529160200191610412565b820191906000526020600020905b8154815290600101906020018083116103f557829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b031661049a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006104c182610851565b9050806001600160a01b0316836001600160a01b0316141561052f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610491565b336001600160a01b038216148061054b575061054b8133610331565b6105bd5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610491565b6105c78383610d55565b505050565b336000908152600a602052604090205462015180906105eb9042611fbf565b11156106295760405162461bcd60e51b815260206004820152600d60248201526c73617920676d20706c6561736560981b6044820152606401610491565b61063b3361063660085490565b610dc3565b6000818152600b6020526040812080546001929061065a908490611f74565b909155505050565b61066c3382610de1565b6106885760405162461bcd60e51b815260040161049190611f23565b6105c7838383610ed4565b336000908152600a602052604090205462015180906106b29042611fbf565b11156106f05760405162461bcd60e51b815260206004820152600d60248201526c73617920676d20706c6561736560981b6044820152606401610491565b6106fd3361063660085490565b565b600061070a836108c8565b821061076c5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610491565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6105c783838360405180602001604052806000815250610a86565b60006107bb60085490565b821061081e5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610491565b6008828154811061083f57634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b0316806103845760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610491565b60006001600160a01b0382166109335760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610491565b506001600160a01b031660009081526003602052604090205490565b606060008260405160200161096691815260200190565b60408051601f198184030181529190528051602090910120905060006210000061099362f0000084612058565b61099d9190611f74565b90506109aa81600661107f565b949350505050565b60606001805461039990612002565b6001600160a01b038216331415610a1a5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610491565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610a903383610de1565b610aac5760405162461bcd60e51b815260040161049190611f23565b610ab8848484846111c2565b50505050565b60606000610acb8361094f565b604080516103e8808252610420820190925291925060009190602082018180368337019050509050610b15816040518060c00160405280608581526020016122bf608591396111f5565b610b37816040518060a00160405280607e81526020016120c8607e91396111f5565b610b59816040518060c00160405280609b8152602001612224609b91396111f5565b610b7b816040518060a0016040528060708152602001612146607091396111f5565b610b9d816040518060600160405280602e81526020016121b6602e91396111f5565b6000848152600b6020526040902054610bc0908290610bbb90611270565b6111f5565b610be981604051806040016040528060078152602001661e17ba32bc3a1f60c91b8152506111f5565b610c0b816040518060a00160405280606a81526020016123b9606a91396111f5565b610c2d816040518060a0016040528060758152602001612344607591396111f5565b610c3781836111f5565b610c6e8160405180604001604052806015815260200174111f23a69e17ba32bc3a1f1e17b39f1e17b9bb339f60591b8152506111f5565b6109aa8161138a565b6060610ccc610c8583611270565b6000848152600b6020526040902054610c9d90611270565b610ca685610cf2565b604051602001610cb893929190611d04565b6040516020818303038152906040526113ea565b604051602001610cdc9190611e3c565b6040516020818303038152906040529050919050565b6060610384610d0083610abe565b6113ea565b60006001600160e01b031982166380ac58cd60e01b1480610d3657506001600160e01b03198216635b5e139f60e01b145b8061038457506301ffc9a760e01b6001600160e01b0319831614610384565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610d8a82610851565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b610ddd828260405180602001604052806000815250611560565b5050565b6000818152600260205260408120546001600160a01b0316610e5a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610491565b6000610e6583610851565b9050806001600160a01b0316846001600160a01b03161480610ea05750836001600160a01b0316610e958461041c565b6001600160a01b0316145b806109aa57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff166109aa565b826001600160a01b0316610ee782610851565b6001600160a01b031614610f4f5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610491565b6001600160a01b038216610fb15760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610491565b610fbc838383611593565b610fc7600082610d55565b6001600160a01b0383166000908152600360205260408120805460019290610ff0908490611fbf565b90915550506001600160a01b038216600090815260036020526040812080546001929061101e908490611f74565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b606060008267ffffffffffffffff8111156110aa57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156110d4576020820181803683370190505b50905060005b8381101561116c576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061111857634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061113c57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93806111648161203d565b9150506110da565b5083156111bb5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610491565b9392505050565b6111cd848484610ed4565b6111d98484848461164b565b610ab85760405162461bcd60e51b815260040161049190611ed1565b611200828251611758565b61124c5760405162461bcd60e51b815260206004820152601a60248201527f4275666665722e617070656e643a206e6f2063617061636974790000000000006044820152606401610491565b6020820151815160408401820183516020850160045afa5090510160209190910152565b6060816112945750506040805180820190915260018152600360fc1b602082015290565b8160005b81156112be57806112a88161203d565b91506112b79050600a83611f8c565b9150611298565b60008167ffffffffffffffff8111156112e757634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611311576020820181803683370190505b5090505b84156109aa57611326600183611fbf565b9150611333600a86612058565b61133e906030611f74565b60f81b81838151811061136157634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350611383600a86611f8c565b9450611315565b6060611397826000611758565b6113e35760405162461bcd60e51b815260206004820152601f60248201527f4275666665722e746f537472696e673a20696e76616c696420627566666572006044820152606401610491565b5060200190565b606081516000141561140a57505060408051602081019091526000815290565b60006040518060600160405280604081526020016121e460409139905060006003845160026114399190611f74565b6114439190611f8c565b61144e906004611fa0565b9050600061145d826020611f74565b67ffffffffffffffff81111561148357634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156114ad576020820181803683370190505b509050818152600183018586518101602084015b8183101561151b5760039283018051603f601282901c811687015160f890811b8552600c83901c8216880151811b6001860152600683901c8216880151811b60028601529116860151901b938201939093526004016114c1565b600389510660018114611535576002811461154657611552565b613d3d60f01b600119830152611552565b603d60f81b6000198301525b509398975050505050505050565b61156a83836117a5565b611577600084848461164b565b6105c75760405162461bcd60e51b815260040161049190611ed1565b6001600160a01b0383166115ee576115e981600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611611565b816001600160a01b0316836001600160a01b0316146116115761161183826118f3565b6001600160a01b038216611628576105c781611990565b826001600160a01b0316826001600160a01b0316146105c7576105c78282611a69565b60006001600160a01b0384163b1561174d57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061168f903390899088908890600401611e81565b602060405180830381600087803b1580156116a957600080fd5b505af19250505080156116d9575060408051601f3d908101601f191682019092526116d691810190611ca4565b60015b611733573d808015611707576040519150601f19603f3d011682016040523d82523d6000602084013e61170c565b606091505b50805161172b5760405162461bcd60e51b815260040161049190611ed1565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506109aa565b506001949350505050565b815160208084015160009291821080159061177d5750611779602083611fbf565b8111155b801561179c575061178f602083611fbf565b6117998583611f74565b11155b95945050505050565b6001600160a01b0382166117fb5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610491565b6000818152600260205260409020546001600160a01b0316156118605760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610491565b61186c60008383611593565b6001600160a01b0382166000908152600360205260408120805460019290611895908490611f74565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001611900846108c8565b61190a9190611fbf565b60008381526007602052604090205490915080821461195d576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b6008546000906119a290600190611fbf565b600083815260096020526040812054600880549394509092849081106119d857634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508060088381548110611a0757634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611a4d57634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000611a74836108c8565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b80356001600160a01b0381168114611ac457600080fd5b919050565b600060208284031215611ada578081fd5b6111bb82611aad565b60008060408385031215611af5578081fd5b611afe83611aad565b9150611b0c60208401611aad565b90509250929050565b600080600060608486031215611b29578081fd5b611b3284611aad565b9250611b4060208501611aad565b9150604084013590509250925092565b60008060008060808587031215611b65578081fd5b611b6e85611aad565b9350611b7c60208601611aad565b925060408501359150606085013567ffffffffffffffff80821115611b9f578283fd5b818701915087601f830112611bb2578283fd5b813581811115611bc457611bc4612098565b604051601f8201601f19908116603f01168101908382118183101715611bec57611bec612098565b816040528281528a6020848701011115611c04578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215611c37578182fd5b611c4083611aad565b915060208301358015158114611c54578182fd5b809150509250929050565b60008060408385031215611c71578182fd5b611c7a83611aad565b946020939093013593505050565b600060208284031215611c99578081fd5b81356111bb816120ae565b600060208284031215611cb5578081fd5b81516111bb816120ae565b600060208284031215611cd1578081fd5b5035919050565b60008151808452611cf0816020860160208601611fd6565b601f01601f19169290920160200192915050565b6c7b226e616d65223a22676d202360981b81528351600090611d2d81600d850160208901611fd6565b7f222c226465736372697074696f6e223a22676f6f64206d6f726e696e67212073600d9184019182015272185e481a5d08189858dac81c1b19585cd9488b606a1b602d8201527f226174747269627574657322203a205b7b2274726169745f74797065223a226760408201527f6d732073616964206261636b222c202276616c7565223a00000000000000000060608201528451611dd2816077840160208901611fd6565b7f7d5d2c22696d616765223a2022646174613a696d6167652f7376672b786d6c3b607792909101918201526618985cd94d8d0b60ca1b60978201528351611e2081609e840160208801611fd6565b61227d60f01b609e929091019182015260a00195945050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000815260008251611e7481601d850160208701611fd6565b91909101601d0192915050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611eb490830184611cd8565b9695505050505050565b6020815260006111bb6020830184611cd8565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611f8757611f8761206c565b500190565b600082611f9b57611f9b612082565b500490565b6000816000190483118215151615611fba57611fba61206c565b500290565b600082821015611fd157611fd161206c565b500390565b60005b83811015611ff1578181015183820152602001611fd9565b83811115610ab85750506000910152565b600181811c9082168061201657607f821691505b6020821081141561203757634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156120515761205161206c565b5060010190565b60008261206757612067612082565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146120c457600080fd5b5056fe3c74657874207374796c653d22637572736f723a206d6f76653b666f6e742d7374796c653a626f6c643b666f6e742d7765696768743a626f6c643b2220786d6c3a73706163653d2270726573657276652220746578742d616e63686f723d2273746172742220666f6e742d66616d696c793d2248656c76657469636122203c7465787420786d6c3a73706163653d2270726573657276652220746578742d616e63686f723d2273746172742220666f6e742d66616d696c793d2248656c7665746963612220666f6e742d73697a653d223234222069643d227376675f332220793d2234312220783d2231383022207374726f6b652d77696474683d223022207374726f6b653d2223303030222066696c6c3d2223303030303030223e4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f666f6e742d73697a653d223234222069643d227376675f322220793d2234302220783d22323122207374726f6b652d77696474683d2231707822207374726f6b653d222330303022207374726f6b652d6c696e656361703d2262757474222073746f6b652d6c696e656a6f696e3d226d69746572222066696c6c3d2223303030303030223e676d732073616964206261636b203a3c2f746578743e3c7376672077696474683d2238303022206865696768743d223630302220786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323030302f7376672220786d6c6e733a786c696e6b3d22687474703a2f2f7777772e77332e6f72672f313939392f786c696e6b222076696577426f783d223020302038303020363030223e3c673e666f6e742d66616d696c793d2248656c7665746963612220666f6e742d73697a653d2231303022207374726f6b652d77696474683d2230222069643d227376675f312220793d223537382e36313139342220783d223631372e323736383122207374726f6b653d2223303030222066696c6c3d22233c74657874207472616e73666f726d3d226d617472697828322e313130322c20302c20302c20322e36382c202d313036392e38322c202d313137372e3638292220786d6c3a73706163653d2270726573657276652220746578742d616e63686f723d2273746172742220a2646970667358221220d4609ec51085d0d6f26fa3cba8a37d09801cf78eb0780e4227fdff1bf50ee61064736f6c63430008040033";

export class GMPass__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GMPass> {
    return super.deploy(overrides || {}) as Promise<GMPass>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GMPass {
    return super.attach(address) as GMPass;
  }
  connect(signer: Signer): GMPass__factory {
    return super.connect(signer) as GMPass__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GMPassInterface {
    return new utils.Interface(_abi) as GMPassInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): GMPass {
    return new Contract(address, _abi, signerOrProvider) as GMPass;
  }
}
