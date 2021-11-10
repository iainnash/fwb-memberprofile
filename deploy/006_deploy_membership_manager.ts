import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import "dotenv/config";

/**
 * @param hre deploy function receives the hardhat runtime env as a parameter
 */
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // Get deployments and namedAccounts from hardhat-deploy
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log } = deployments;

  // Fetch accounts
  const { deployer } = await getNamedAccounts();

  // Create a deployment named 'FWBMemberProfile'. By default it looks for an artifact with the same name
  const deployFWBMemberProfile = await deploy("MembershipManager", {
    from: deployer,
    to: deployer,
    contract: "MembershipManager",
    args: ["base", deployer],
    log: true,
    deterministicDeployment: true,
    // Displays address and gas used in console
  });

  if (deployFWBMemberProfile.newlyDeployed) {
    log(
      "\x1b[36m%s\x1b[0m",
      `
             contract: FWBMemberProfile deployed at ${deployFWBMemberProfile.address} 
             using ${deployFWBMemberProfile.receipt?.gasUsed} gas. 
             TestToken Owner: ${deployFWBMemberProfile.receipt?.to}
             Signed from    : ${deployFWBMemberProfile.receipt?.from}
             `
    );
  }
};

export default func;

func.tags = ["MembershipManager"];
