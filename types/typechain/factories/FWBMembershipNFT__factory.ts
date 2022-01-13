/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FWBMembershipNFT,
  FWBMembershipNFTInterface,
} from "../FWBMembershipNFT";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
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
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_manager",
        type: "address",
      },
    ],
    name: "NewManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "addressToId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "adminMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "adminRevokeMemberships",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
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
        name: "user",
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
        name: "",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "idToAddress",
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
        internalType: "string",
        name: "_urlBase",
        type: "string",
      },
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
    name: "manager",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "mintWithSign",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "owner",
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
        name: "id",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
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
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
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
        internalType: "address",
        name: "_manager",
        type: "address",
      },
    ],
    name: "setManager",
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
        name: "id",
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
        name: "checkTokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newUrlBase",
        type: "string",
      },
    ],
    name: "updateUrlBase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "urlBase",
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
];

const _bytecode =
  "0x60c0604052306080527f9c7270b7951f3aa9aba02f512d96c7fdc27077cdbc92b5ddf09818237d0aba1c60a05234801561003857600080fd5b5060805160a0516124ed6100736000396000610783015260008181610a0701528181610a4701528181610ad00152610b1001526124ed6000f3fe6080604052600436106101c25760003560e01c80636352211e116100f7578063b88d4fde11610095578063e58306f911610064578063e58306f914610552578063e78191ad14610572578063e985e9c514610587578063f2fde38b146105aa57600080fd5b8063b88d4fde146104ca578063c87b56dd146104e5578063cb0e0d7d14610505578063d0ebdbe71461053257600080fd5b80637ab4339d116100d15780637ab4339d1461043f5780638da5cb5b1461045f57806395d89b411461047d578063a22cb465146104af57600080fd5b80636352211e146103ea57806370a082311461040a578063715018a61461042a57600080fd5b80631e79ad42116101645780633659cfe61161013e5780633659cfe61461037b57806342842e0e1461039b578063481c6a75146103b65780634f1ef286146103d757600080fd5b80631e79ad421461030557806323b872dd146103255780632a2d0c471461034557600080fd5b8063081812fc116101a0578063081812fc14610269578063095ea7b3146102a257806318160ddd146102c257806319e15ba1146102e557600080fd5b806301ffc9a7146101c757806302d9e696146101fc57806306fdde031461021e575b600080fd5b3480156101d357600080fd5b506101e76101e2366004611cbe565b6105ca565b60405190151581526020015b60405180910390f35b34801561020857600080fd5b5061021c610217366004611d92565b61061c565b005b34801561022a57600080fd5b5061025c604051806040016040528060128152602001711195d08813595b58995c9cda1a5c0813919560721b81525081565b6040516101f39190611e23565b34801561027557600080fd5b5061028a610284366004611e36565b50600090565b6040516001600160a01b0390911681526020016101f3565b3480156102ae57600080fd5b5061021c6102bd366004611e6b565b610667565b3480156102ce57600080fd5b506102d76106be565b6040519081526020016101f3565b3480156102f157600080fd5b5061021c610300366004611e95565b6106ce565b34801561031157600080fd5b5061021c610320366004611f00565b610870565b34801561033157600080fd5b5061021c610340366004611fa6565b6108fa565b34801561035157600080fd5b5061028a610360366004611e36565b6099602052600090815260409020546001600160a01b031681565b34801561038757600080fd5b5061021c610396366004611fe2565b6109fc565b3480156103a757600080fd5b5061021c6102bd366004611fa6565b3480156103c257600080fd5b506101335461028a906001600160a01b031681565b61021c6103e5366004611ffd565b610ac5565b3480156103f657600080fd5b5061028a610405366004611e36565b610b7b565b34801561041657600080fd5b506102d7610425366004611fe2565b610bfb565b34801561043657600080fd5b5061021c610c2c565b34801561044b57600080fd5b5061021c61045a36600461204b565b610c62565b34801561046b57600080fd5b506033546001600160a01b031661028a565b34801561048957600080fd5b5061025c604051806040016040528060068152602001654657424d454d60d01b81525081565b3480156104bb57600080fd5b5061021c6102bd366004612099565b3480156104d657600080fd5b5061021c6102bd3660046120d5565b3480156104f157600080fd5b5061025c610500366004611e36565b610ddd565b34801561051157600080fd5b506102d7610520366004611fe2565b60986020526000908152604090205481565b34801561053e57600080fd5b5061021c61054d366004611fe2565b610e12565b34801561055e57600080fd5b5061021c61056d366004611e6b565b610e87565b34801561057e57600080fd5b5061025c610edb565b34801561059357600080fd5b506101e76105a236600461213d565b600092915050565b3480156105b657600080fd5b5061021c6105c5366004611fe2565b610f6a565b60006301ffc9a760e01b6001600160e01b0319831614806105fb57506001600160e01b031982166380ac58cd60e01b145b8061061657506001600160e01b03198216635b5e139f60e01b145b92915050565b6033546001600160a01b0316331461064f5760405162461bcd60e51b815260040161064690612167565b60405180910390fd5b805161066390610132906020840190611c0f565b5050565b60405162461bcd60e51b815260206004820152602660248201527f466e206e6f7420737570706f727465643a206e6f6e7472616e736665727261626044820152651b194813919560d21b6064820152608401610646565b60006106c960975490565b905090565b60008281526101346020526040902054829060ff161561071d5760405162461bcd60e51b815260206004820152600a6024820152691b9bdb98d9481d5cd95960b21b6044820152606401610646565b600081815261013460205260409020805460ff19166001179055438410156107795760405162461bcd60e51b815260206004820152600f60248201526e111958591b1a5b99481c185cdcd959608a1b6044820152606401610646565b61013354604080517f000000000000000000000000000000000000000000000000000000000000000060208201526001600160a01b0389811692820192909252606081018890526080810187905260a081018690526107ff9291909116906107f99060c00160405160208183030381529060405280519060200120611002565b84611050565b61085e5760405162461bcd60e51b815260206004820152602a60248201527f4e46545065726d69743a3a6d696e74576974685369676e3a20496e76616c6964604482015269207369676e617475726560b01b6064820152608401610646565b610868868661119e565b505050505050565b610133546001600160a01b031633146108ba5760405162461bcd60e51b815260206004820152600c60248201526b27b7363c9036b0b730b3b2b960a11b6044820152606401610646565b60005b8151811015610663576108e88282815181106108db576108db61219c565b60200260200101516112d3565b806108f2816121c8565b9150506108bd565b6033546001600160a01b031633146109245760405162461bcd60e51b815260040161064690612167565b6001600160a01b0383166000908152609860205260409020548181146109855760405162461bcd60e51b815260206004820152601660248201527508aa4a47440a8ded6cadc40928840dad2e6dac2e8c6d60531b6044820152606401610646565b6001600160a01b0384811660008181526098602081815260408084208490558684526099825280842080546001600160a01b031916968a16968717905585845291905280822085905551849392917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a450505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610a455760405162461bcd60e51b8152600401610646906121e3565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610a7761134f565b6001600160a01b031614610a9d5760405162461bcd60e51b81526004016106469061222f565b610aa68161137d565b60408051600080825260208201909252610ac2918391906113a7565b50565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610b0e5760405162461bcd60e51b8152600401610646906121e3565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610b4061134f565b6001600160a01b031614610b665760405162461bcd60e51b81526004016106469061222f565b610b6f8261137d565b610663828260016113a7565b6000818152609960205260408120546001600160a01b0316610bdf5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20546f6b656e20646f6573206e6f74206578697374000000006044820152606401610646565b506000908152609960205260409020546001600160a01b031690565b6001600160a01b03811660009081526098602052604081205415610c20576001610c23565b60005b60ff1692915050565b6033546001600160a01b03163314610c565760405162461bcd60e51b815260040161064690612167565b610c6060006114f2565b565b600054610100900460ff16610c7d5760005460ff1615610c81565b303b155b610ce45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610646565b600054610100900460ff16158015610d06576000805461ffff19166101011790555b610d0e611544565b610d596040518060400160405280601081526020016f1195d093595b58995c9cda1a5c13919560821b815250604051806040016040528060018152602001603160f81b81525061157b565b610d616115ac565b610d696115e3565b8251610d7d90610132906020860190611c0f565b5061013380546001600160a01b0319166001600160a01b0384169081179091556040517f5589a1df7a257347b14b97cb6fe06862c960ff64e9a0c2908632929098bb013090600090a28015610dd8576000805461ff00191690555b505050565b6060610132610deb8361160a565b604051602001610dfc9291906122d2565b6040516020818303038152906040529050919050565b6033546001600160a01b03163314610e3c5760405162461bcd60e51b815260040161064690612167565b61013380546001600160a01b0319166001600160a01b0383169081179091556040517f5589a1df7a257347b14b97cb6fe06862c960ff64e9a0c2908632929098bb013090600090a250565b610133546001600160a01b03163314610ed15760405162461bcd60e51b815260206004820152600c60248201526b27b7363c9036b0b730b3b2b960a11b6044820152606401610646565b610663828261119e565b6101328054610ee99061227b565b80601f0160208091040260200160405190810160405280929190818152602001828054610f159061227b565b8015610f625780601f10610f3757610100808354040283529160200191610f62565b820191906000526020600020905b815481529060010190602001808311610f4557829003601f168201915b505050505081565b6033546001600160a01b03163314610f945760405162461bcd60e51b815260040161064690612167565b6001600160a01b038116610ff95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610646565b610ac2816114f2565b600061061661100f611710565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061105f858561178b565b9092509050600081600481111561107857611078612370565b1480156110965750856001600160a01b0316826001600160a01b0316145b156110a657600192505050611197565b600080876001600160a01b0316631626ba7e60e01b88886040516024016110ce929190612386565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161110c919061239f565b600060405180830381855afa9150503d8060008114611147576040519150601f19603f3d011682016040523d82523d6000602084013e61114c565b606091505b509150915081801561115f575080516020145b801561119057508051630b135d3f60e11b9061118490830160209081019084016123bb565b6001600160e01b031916145b9450505050505b9392505050565b6000818152609960205260409020546001600160a01b0316156111fb5760405162461bcd60e51b8152602060048201526015602482015274135a5b9d0e88185b1c9958591e4818db185a5b5959605a1b6044820152606401610646565b6001600160a01b0382161580159061121257508015155b61125e5760405162461bcd60e51b815260206004820152601f60248201527f4d696e743a2063616e6e6f74206d696e74206e756c6c206964206f7220746f006044820152606401610646565b61126c609780546001019055565b6001600160a01b0382166000818152609860209081526040808320859055848352609990915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006112de82610b7b565b90506112ea60976117fb565b600082815260996020908152604080832080546001600160a01b03191690556001600160a01b038416808452609890925280832083905551849291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6033546001600160a01b03163314610ac25760405162461bcd60e51b815260040161064690612167565b60006113b161134f565b90506113bc84611852565b6000835111806113c95750815b156113da576113d884846118f7565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff166114eb57805460ff191660011781556040516001600160a01b038316602482015261145990869060440160408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b1790526118f7565b50805460ff1916815561146a61134f565b6001600160a01b0316826001600160a01b0316146114e25760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608401610646565b6114eb856119e2565b5050505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1661156b5760405162461bcd60e51b8152600401610646906123d8565b611573611a22565b610c60611a49565b600054610100900460ff166115a25760405162461bcd60e51b8152600401610646906123d8565b6106638282611a79565b600054610100900460ff166115d35760405162461bcd60e51b8152600401610646906123d8565b6115db611a22565b610c60611a22565b600054610100900460ff166115db5760405162461bcd60e51b8152600401610646906123d8565b60608161162e5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156116585780611642816121c8565b91506116519050600a83612439565b9150611632565b60008167ffffffffffffffff81111561167357611673611cdb565b6040519080825280601f01601f19166020018201604052801561169d576020820181803683370190505b5090505b8415611708576116b260018361244d565b91506116bf600a86612464565b6116ca906030612478565b60f81b8183815181106116df576116df61219c565b60200101906001600160f81b031916908160001a905350611701600a86612439565b94506116a1565b949350505050565b60006106c97f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61173f609a5490565b609b546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b6000808251604114156117c25760208301516040840151606085015160001a6117b687828585611aba565b945094505050506117f4565b8251604014156117ec57602083015160408401516117e1868383611ba7565b9350935050506117f4565b506000905060025b9250929050565b80548061184a5760405162461bcd60e51b815260206004820152601b60248201527f436f756e7465723a2064656372656d656e74206f766572666c6f7700000000006044820152606401610646565b600019019055565b803b6118b65760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610646565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b6119565760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610646565b600080846001600160a01b031684604051611971919061239f565b600060405180830381855af49150503d80600081146119ac576040519150601f19603f3d011682016040523d82523d6000602084013e6119b1565b606091505b50915091506119d9828260405180606001604052806027815260200161249160279139611bd6565b95945050505050565b6119eb81611852565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600054610100900460ff16610c605760405162461bcd60e51b8152600401610646906123d8565b600054610100900460ff16611a705760405162461bcd60e51b8152600401610646906123d8565b610c60336114f2565b600054610100900460ff16611aa05760405162461bcd60e51b8152600401610646906123d8565b815160209283012081519190920120609a91909155609b55565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611af15750600090506003611b9e565b8460ff16601b14158015611b0957508460ff16601c14155b15611b1a5750600090506004611b9e565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611b6e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611b9757600060019250925050611b9e565b9150600090505b94509492505050565b6000806001600160ff1b03831660ff84901c601b01611bc887828885611aba565b935093505050935093915050565b60608315611be5575081611197565b825115611bf55782518084602001fd5b8160405162461bcd60e51b81526004016106469190611e23565b828054611c1b9061227b565b90600052602060002090601f016020900481019282611c3d5760008555611c83565b82601f10611c5657805160ff1916838001178555611c83565b82800160010185558215611c83579182015b82811115611c83578251825591602001919060010190611c68565b50611c8f929150611c93565b5090565b5b80821115611c8f5760008155600101611c94565b6001600160e01b031981168114610ac257600080fd5b600060208284031215611cd057600080fd5b813561119781611ca8565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611d1a57611d1a611cdb565b604052919050565b600082601f830112611d3357600080fd5b813567ffffffffffffffff811115611d4d57611d4d611cdb565b611d60601f8201601f1916602001611cf1565b818152846020838601011115611d7557600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215611da457600080fd5b813567ffffffffffffffff811115611dbb57600080fd5b61170884828501611d22565b60005b83811015611de2578181015183820152602001611dca565b83811115611df1576000848401525b50505050565b60008151808452611e0f816020860160208601611dc7565b601f01601f19169290920160200192915050565b6020815260006111976020830184611df7565b600060208284031215611e4857600080fd5b5035919050565b80356001600160a01b0381168114611e6657600080fd5b919050565b60008060408385031215611e7e57600080fd5b611e8783611e4f565b946020939093013593505050565b600080600080600060a08688031215611ead57600080fd5b611eb686611e4f565b9450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115611ee757600080fd5b611ef388828901611d22565b9150509295509295909350565b60006020808385031215611f1357600080fd5b823567ffffffffffffffff80821115611f2b57600080fd5b818501915085601f830112611f3f57600080fd5b813581811115611f5157611f51611cdb565b8060051b9150611f62848301611cf1565b8181529183018401918481019088841115611f7c57600080fd5b938501935b83851015611f9a57843582529385019390850190611f81565b98975050505050505050565b600080600060608486031215611fbb57600080fd5b611fc484611e4f565b9250611fd260208501611e4f565b9150604084013590509250925092565b600060208284031215611ff457600080fd5b61119782611e4f565b6000806040838503121561201057600080fd5b61201983611e4f565b9150602083013567ffffffffffffffff81111561203557600080fd5b61204185828601611d22565b9150509250929050565b6000806040838503121561205e57600080fd5b823567ffffffffffffffff81111561207557600080fd5b61208185828601611d22565b92505061209060208401611e4f565b90509250929050565b600080604083850312156120ac57600080fd5b6120b583611e4f565b9150602083013580151581146120ca57600080fd5b809150509250929050565b600080600080608085870312156120eb57600080fd5b6120f485611e4f565b935061210260208601611e4f565b925060408501359150606085013567ffffffffffffffff81111561212557600080fd5b61213187828801611d22565b91505092959194509250565b6000806040838503121561215057600080fd5b61215983611e4f565b915061209060208401611e4f565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156121dc576121dc6121b2565b5060010190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b600181811c9082168061228f57607f821691505b602082108114156122b057634e487b7160e01b600052602260045260246000fd5b50919050565b600081516122c8818560208601611dc7565b9290920192915050565b600080845481600182811c9150808316806122ee57607f831692505b602080841082141561230e57634e487b7160e01b86526022600452602486fd5b818015612322576001811461233357612360565b60ff19861689528489019650612360565b60008b81526020902060005b868110156123585781548b82015290850190830161233f565b505084890196505b5050505050506119d981856122b6565b634e487b7160e01b600052602160045260246000fd5b8281526040602082015260006117086040830184611df7565b600082516123b1818460208701611dc7565b9190910192915050565b6000602082840312156123cd57600080fd5b815161119781611ca8565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b60008261244857612448612423565b500490565b60008282101561245f5761245f6121b2565b500390565b60008261247357612473612423565b500690565b6000821982111561248b5761248b6121b2565b50019056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212209e67ff1be8f1520ceda75be665cf6a5867539eb480414e4dae786fa0c9e9e89e64736f6c634300080a0033";

export class FWBMembershipNFT__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FWBMembershipNFT> {
    return super.deploy(overrides || {}) as Promise<FWBMembershipNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FWBMembershipNFT {
    return super.attach(address) as FWBMembershipNFT;
  }
  connect(signer: Signer): FWBMembershipNFT__factory {
    return super.connect(signer) as FWBMembershipNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FWBMembershipNFTInterface {
    return new utils.Interface(_abi) as FWBMembershipNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FWBMembershipNFT {
    return new Contract(address, _abi, signerOrProvider) as FWBMembershipNFT;
  }
}
