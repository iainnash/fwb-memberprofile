import "../setup-env";

module.exports = async ({ ethers, getNamedAccounts, deployments }: any) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const nftDeployment = await deployments.get('FWBMembershipNFT');

  const args = [
    // base uri
    "https://fwb.help/tokens/",
    // admin address
    deployer,
  ];

  const iface = new ethers.utils.Interface(nftDeployment.abi);
  const deployArg = iface.encodeFunctionData('initialize', args);

  await deploy("FWBMembership1967Manager", {
    from: deployer,
    log: true,
    args: [
      nftDeployment.address,
      deployArg
    ]
  });
};
module.exports.tags = ["FWBMembership1967Manager"];
module.exports.dependencies = ["FWBMembershipNFT"];