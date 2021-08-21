/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestToken, TestTokenInterface } from "../TestToken";

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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f54657374546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f54544b4e0000000000000000000000000000000000000000000000000000000081525081600390805190602001906200009692919062000371565b508060049080519060200190620000af92919062000371565b505050620000d2620000c66200011760201b60201c565b6200011f60201b60201c565b6200011133620000e7620001e560201b60201c565b600a620000f5919062000561565b620186a06200010591906200069e565b620001ee60201b60201c565b620007e0565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000261576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002589062000459565b60405180910390fd5b62000275600083836200036760201b60201c565b8060026000828254620002899190620004a9565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002e09190620004a9565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200034791906200047b565b60405180910390a362000363600083836200036c60201b60201c565b5050565b505050565b505050565b8280546200037f9062000716565b90600052602060002090601f016020900481019282620003a35760008555620003ef565b82601f10620003be57805160ff1916838001178555620003ef565b82800160010185558215620003ef579182015b82811115620003ee578251825591602001919060010190620003d1565b5b509050620003fe919062000402565b5090565b5b808211156200041d57600081600090555060010162000403565b5090565b600062000430601f8362000498565b91506200043d82620007b7565b602082019050919050565b6200045381620006ff565b82525050565b60006020820190508181036000830152620004748162000421565b9050919050565b600060208201905062000492600083018462000448565b92915050565b600082825260208201905092915050565b6000620004b682620006ff565b9150620004c383620006ff565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620004fb57620004fa6200074c565b5b828201905092915050565b6000808291508390505b6001851115620005585780860481111562000530576200052f6200074c565b5b6001851615620005405780820291505b80810290506200055085620007aa565b945062000510565b94509492505050565b60006200056e82620006ff565b91506200057b8362000709565b9250620005aa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620005b2565b905092915050565b600082620005c4576001905062000697565b81620005d4576000905062000697565b8160018114620005ed5760028114620005f8576200062e565b600191505062000697565b60ff8411156200060d576200060c6200074c565b5b8360020a9150848211156200062757620006266200074c565b5b5062000697565b5060208310610133831016604e8410600b8410161715620006685782820a9050838111156200066257620006616200074c565b5b62000697565b62000677848484600162000506565b925090508184048111156200069157620006906200074c565b5b81810290505b9392505050565b6000620006ab82620006ff565b9150620006b883620006ff565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620006f457620006f36200074c565b5b828202905092915050565b6000819050919050565b600060ff82169050919050565b600060028204905060018216806200072f57607f821691505b602082108114156200074657620007456200077b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60008160011c9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611a2f80620007f06000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d714610276578063a9059cbb146102a6578063dd62ed3e146102d6578063f2fde38b14610306576100f5565b806370a0823114610200578063715018a6146102305780638da5cb5b1461023a57806395d89b4114610258576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806340c10f19146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610322565b60405161010f91906113ce565b60405180910390f35b610132600480360381019061012d9190611189565b6103b4565b60405161013f91906113b3565b60405180910390f35b6101506103d2565b60405161015d9190611530565b60405180910390f35b610180600480360381019061017b919061113a565b6103dc565b60405161018d91906113b3565b60405180910390f35b61019e6104d4565b6040516101ab919061154b565b60405180910390f35b6101ce60048036038101906101c99190611189565b6104dd565b6040516101db91906113b3565b60405180910390f35b6101fe60048036038101906101f99190611189565b610589565b005b61021a600480360381019061021591906110d5565b610613565b6040516102279190611530565b60405180910390f35b61023861065b565b005b6102426106e3565b60405161024f9190611398565b60405180910390f35b61026061070d565b60405161026d91906113ce565b60405180910390f35b610290600480360381019061028b9190611189565b61079f565b60405161029d91906113b3565b60405180910390f35b6102c060048036038101906102bb9190611189565b61088a565b6040516102cd91906113b3565b60405180910390f35b6102f060048036038101906102eb91906110fe565b6108a8565b6040516102fd9190611530565b60405180910390f35b610320600480360381019061031b91906110d5565b61092f565b005b60606003805461033190611660565b80601f016020809104026020016040519081016040528092919081815260200182805461035d90611660565b80156103aa5780601f1061037f576101008083540402835291602001916103aa565b820191906000526020600020905b81548152906001019060200180831161038d57829003601f168201915b5050505050905090565b60006103c86103c1610a27565b8484610a2f565b6001905092915050565b6000600254905090565b60006103e9848484610bfa565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610434610a27565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156104b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ab90611470565b60405180910390fd5b6104c8856104c0610a27565b858403610a2f565b60019150509392505050565b60006012905090565b600061057f6104ea610a27565b8484600160006104f8610a27565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461057a9190611582565b610a2f565b6001905092915050565b610591610a27565b73ffffffffffffffffffffffffffffffffffffffff166105af6106e3565b73ffffffffffffffffffffffffffffffffffffffff1614610605576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fc90611490565b60405180910390fd5b61060f8282610e7b565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610663610a27565b73ffffffffffffffffffffffffffffffffffffffff166106816106e3565b73ffffffffffffffffffffffffffffffffffffffff16146106d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ce90611490565b60405180910390fd5b6106e16000610fdb565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461071c90611660565b80601f016020809104026020016040519081016040528092919081815260200182805461074890611660565b80156107955780601f1061076a57610100808354040283529160200191610795565b820191906000526020600020905b81548152906001019060200180831161077857829003601f168201915b5050505050905090565b600080600160006107ae610a27565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561086b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610862906114f0565b60405180910390fd5b61087f610876610a27565b85858403610a2f565b600191505092915050565b600061089e610897610a27565b8484610bfa565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610937610a27565b73ffffffffffffffffffffffffffffffffffffffff166109556106e3565b73ffffffffffffffffffffffffffffffffffffffff16146109ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a290611490565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1290611410565b60405180910390fd5b610a2481610fdb565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a96906114d0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0690611430565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610bed9190611530565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c61906114b0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd1906113f0565b60405180910390fd5b610ce58383836110a1565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6290611450565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dfe9190611582565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e629190611530565b60405180910390a3610e758484846110a6565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610eeb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee290611510565b60405180910390fd5b610ef7600083836110a1565b8060026000828254610f099190611582565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f5e9190611582565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610fc39190611530565b60405180910390a3610fd7600083836110a6565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b6000813590506110ba816119cb565b92915050565b6000813590506110cf816119e2565b92915050565b6000602082840312156110e757600080fd5b60006110f5848285016110ab565b91505092915050565b6000806040838503121561111157600080fd5b600061111f858286016110ab565b9250506020611130858286016110ab565b9150509250929050565b60008060006060848603121561114f57600080fd5b600061115d868287016110ab565b935050602061116e868287016110ab565b925050604061117f868287016110c0565b9150509250925092565b6000806040838503121561119c57600080fd5b60006111aa858286016110ab565b92505060206111bb858286016110c0565b9150509250929050565b6111ce816115d8565b82525050565b6111dd816115ea565b82525050565b60006111ee82611566565b6111f88185611571565b935061120881856020860161162d565b611211816116f0565b840191505092915050565b6000611229602383611571565b915061123482611701565b604082019050919050565b600061124c602683611571565b915061125782611750565b604082019050919050565b600061126f602283611571565b915061127a8261179f565b604082019050919050565b6000611292602683611571565b915061129d826117ee565b604082019050919050565b60006112b5602883611571565b91506112c08261183d565b604082019050919050565b60006112d8602083611571565b91506112e38261188c565b602082019050919050565b60006112fb602583611571565b9150611306826118b5565b604082019050919050565b600061131e602483611571565b915061132982611904565b604082019050919050565b6000611341602583611571565b915061134c82611953565b604082019050919050565b6000611364601f83611571565b915061136f826119a2565b602082019050919050565b61138381611616565b82525050565b61139281611620565b82525050565b60006020820190506113ad60008301846111c5565b92915050565b60006020820190506113c860008301846111d4565b92915050565b600060208201905081810360008301526113e881846111e3565b905092915050565b600060208201905081810360008301526114098161121c565b9050919050565b600060208201905081810360008301526114298161123f565b9050919050565b6000602082019050818103600083015261144981611262565b9050919050565b6000602082019050818103600083015261146981611285565b9050919050565b60006020820190508181036000830152611489816112a8565b9050919050565b600060208201905081810360008301526114a9816112cb565b9050919050565b600060208201905081810360008301526114c9816112ee565b9050919050565b600060208201905081810360008301526114e981611311565b9050919050565b6000602082019050818103600083015261150981611334565b9050919050565b6000602082019050818103600083015261152981611357565b9050919050565b6000602082019050611545600083018461137a565b92915050565b60006020820190506115606000830184611389565b92915050565b600081519050919050565b600082825260208201905092915050565b600061158d82611616565b915061159883611616565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156115cd576115cc611692565b5b828201905092915050565b60006115e3826115f6565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561164b578082015181840152602081019050611630565b8381111561165a576000848401525b50505050565b6000600282049050600182168061167857607f821691505b6020821081141561168c5761168b6116c1565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6119d4816115d8565b81146119df57600080fd5b50565b6119eb81611616565b81146119f657600080fd5b5056fea264697066735822122099a7b3cb3aeb698a3ef3f4805d6d132760f68b93767afae02ae3adc469b876e964736f6c63430008040033";

export class TestToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestToken> {
    return super.deploy(overrides || {}) as Promise<TestToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestToken {
    return super.attach(address) as TestToken;
  }
  connect(signer: Signer): TestToken__factory {
    return super.connect(signer) as TestToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTokenInterface {
    return new utils.Interface(_abi) as TestTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestToken {
    return new Contract(address, _abi, signerOrProvider) as TestToken;
  }
}
