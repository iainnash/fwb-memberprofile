// FWBMemberProfile.test.ts is a suite of unit tests for the FWBMemberProfile ERC-721 Contract

import { ethers, deployments, getNamedAccounts } from "hardhat";
import { expect } from "chai";

import { MembershipManager } from "../types/typechain";

describe("MembershipManager", () => {
  let membershipManagerInstance: MembershipManager;

  beforeEach(async () => {
    await deployments.fixture(["MembershipManager"]);
    const { deployer } = await getNamedAccounts();

    membershipManagerInstance = await ethers.getContract(
      "MembershipManager",
      deployer
    );
  });
  // #1
  it("transfer fails", async () => {
    // pass
    const [s1, s2] = await ethers.getSigners();
    await membershipManagerInstance.mint(await s1.getAddress());
    await membershipManagerInstance.mint(await s2.getAddress());
  });
});
