// 004_deploy_registry.ts

// Deploy script for FWBProtocolRegistry

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
/**
 * @param hre  deploy function receives the hardhat runtime env as a parameter
 */ 



const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

    // Get deployments and namedAccounts from hardhat-deploy
    const { deployments, getNamedAccounts } = hre;
    const { deploy, log } = deployments;
    
    // Fetch accounts
    const { deployer, tokenOwner } = await getNamedAccounts();

    // Create a deployment named 'FWBProtocolRegistry'. By default it looks for an artifact with the same name
    const deployRegistry = await deploy('FWBProtocolRegistry', {
        from: deployer,
        to: tokenOwner,
        contract: 'FWBProtocolRegistry',
        args: [],
        log: true,   
        deterministicDeployment: true,       // Displays address and gas used in console
    });

    if (deployRegistry.newlyDeployed) {
        log('\x1b[36m%s\x1b[0m',
            `
            contract: FWBProtocolRegistry deployed at ${deployRegistry.address} 
            using ${deployRegistry.receipt?.gasUsed} gas. 
            to: ${deployRegistry.receipt?.to}
            Signed from    : ${deployRegistry.receipt?.from}
            `
        );
    }

};

export default func;

func.tags = ['FWBProtocolRegistry'];       // Setup tag for option to execute script on its own