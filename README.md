# FWB Profile / seasonpass

FWB Profile / seasonpass (working title) is an ERC-721 "member profile" NFT for Friends with Benefits.

this project environment is currently configured with hardhat & typescript.

types for this project are located in [./types](./types) and autogenerated with `typechain`.



## installation

1. git clone the repository on your local machine:

```bash
git clone https://github.com/bretth18/seasonpass
```

2. cd into the repo and install dependencies


```bash
cd seasonpass 
```

```bash
yarn install
```

3. create a ```.env``` file in your root directory. an example is located at [.env-example](.env-example)




## usage

```bash
npx hardhat 
```

starting local hardhat EVM

```bash
npx hardhat node
```

compiling solidity contracts

```bash
npx hardhat compile
```


running tests

```bash
npx hardhat test
```




### deploying contracts

this repository is configured for use with `hardhat-deploy`.
see the deploy scripts in [./deploy](./deploy) for examples.

deployment scripts contain tag fixtures to aid in deployment sequencing and individual deployment. 

to deploy contracts locally:

```bash
npx hardhat deploy [--tags DEPLOY_SCRIPT_TAG] --network [hardhat || localhost]
```




### tests

unit tests are located in [./test](./test)
tests are written with mocha + chai.

tests use deployment fixtures from `hardhat-deploy` / `hardhat-deploy-ethers`



## roadmap
todo.



## contributing

pull requests are welcome. for major changes, please open an issue first to discuss what you would like to change.

please make sure to update tests as appropriate.



## license
[MIT](LICENSE)



