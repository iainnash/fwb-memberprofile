import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";

import "@typechain/hardhat";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "hardhat-gas-reporter";
import "hardhat-spdx-license-identifier";
import "tsconfig-paths/register";
import "hardhat-abi-exporter";
import "hardhat-tracer";
import "solidity-coverage";
import "./setup-env";
import networks from "./networks";

// Networks config
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks,
  namedAccounts: {
    deployer: 0,
    tokenOwner: 1,
  },
  paths: {
    artifacts: "./data/artifacts",
    deployments: "./data/deployments",
  },
  typechain: {
    outDir: "./types/typechain",
  },
  mocha: {
    timeout: 20000,
  },
  abiExporter: {
    path: "./data/abi",
    clear: true,
    spacing: 2,
  },
  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },
  gasReporter: {
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
