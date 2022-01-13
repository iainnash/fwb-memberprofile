// FWBMemberProfile.test.ts is a suite of unit tests for the FWBMemberProfile ERC-721 Contract

import { ethers, deployments, getNamedAccounts } from "hardhat";
import { expect } from "chai";

import {
  FWBMembershipNFT,
  FWBMembershipNFT__factory,
} from "../types/typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signers";

describe("MembershipManager", () => {
  let membershipManagerInstance: FWBMembershipNFT;
  let signer: SignerWithAddress;
  let signer2: SignerWithAddress;
  let signerAddress: string;
  let signer2Address: string;

  beforeEach(async () => {
    const { FWBMembership1967Manager } = await deployments.fixture([
      "FWBMembership1967Manager", "FWBMembershipNFT"
    ]);
    const { deployer } = await getNamedAccounts();

    [signer, signer2] = await ethers.getSigners();
    [signerAddress, signer2Address] = [
      await signer.getAddress(),
      await signer2.getAddress(),
    ];

    console.log({deployer, signerAddress});

    membershipManagerInstance = FWBMembershipNFT__factory.connect(
      FWBMembership1967Manager.address,
      signer
    );
  });

  it("admin mints", async () => {
    console.log(signer2Address);
    await membershipManagerInstance.adminMint(signer2Address, "10");
    expect(await membershipManagerInstance.tokenURI("10")).to.be.equal(
      "https://fwb.help/tokens/10"
    );
    await expect(membershipManagerInstance.tokenURI("1")).to.be.revertedWith(
      "asdf"
    );
  });
  describe("with an nft", () => {
    beforeEach(async () => {
      await membershipManagerInstance.adminMint(signer2Address, "1");
    });
    it("does not allow transfers from non-admins", async () => {
      await expect(
        membershipManagerInstance
          .connect(signer2)
          .transferFrom(signer2Address, signerAddress, "1")
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
    it("allows transfers from admins", async () => {
      expect(
        await membershipManagerInstance
          .connect(signer)
          .transferFrom(signer2Address, signerAddress, "1")
      ).to.emit("FWBMembershipNFT", "Transfer");
      expect(membershipManagerInstance.ownerOf("1")).to.be.equal(
        signer2Address
      );
    });
    it("allows burns from admins", async () => {
      await membershipManagerInstance.adminRevokeMemberships(['1']);
    });
    it("does not allow burns from non-admins", async () => {
      await expect(
        membershipManagerInstance.adminRevokeMemberships(['1'])
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });
});
