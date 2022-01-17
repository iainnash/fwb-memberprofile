// FWBMemberProfile.test.ts is a suite of unit tests for the FWBMemberProfile ERC-721 Contract

import { ethers, deployments, getNamedAccounts } from "hardhat";
import { expect } from "chai";

import {
  FWBMembershipNFT,
  FWBMembershipNFT__factory,
} from "../types/typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signers";

const SigningTypesMint = {
  PermitMint: [
    { type: "address", name: "to" },
    { type: "uint256", name: "tokenId" },
    { type: "uint256", name: "deadline" },
    { type: "uint256", name: "nonce" },
  ],
};
const SigningTypesTransfer = {
  PermitTransfer: [
    { type: "address", name: "from" },
    { type: "address", name: "to" },
    { type: "uint256", name: "tokenId" },
    { type: "uint256", name: "deadline" },
    { type: "uint256", name: "nonce" },
  ],
};

describe("MembershipManager", () => {
  let membershipManagerInstance: FWBMembershipNFT;
  let signer: SignerWithAddress;
  let signer2: SignerWithAddress;
  let signer3: SignerWithAddress;
  let signerAddress: string;
  let signer2Address: string;
  let signer3Address: string;
  let domain: any;

  beforeEach(async () => {
    const { FWBMembership1967Manager } = await deployments.fixture([
      "FWBMembership1967Manager",
      "FWBMembershipNFT",
    ]);

    const { chainId } = await ethers.provider.getNetwork();
    domain = {
      name: "FWBMembershipNFT",
      version: "1",
      chainId,
      verifyingContract: FWBMembership1967Manager.address,
    };

    [signer, signer2, signer3] = await ethers.getSigners();
    [signerAddress, signer2Address, signer3Address] = [
      await signer.getAddress(),
      await signer2.getAddress(),
      await signer3.getAddress(),
    ];

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
      "ERC721: Token does not exist"
    );
  });
  describe("with a signer", () => {
    beforeEach(async () => {
      await membershipManagerInstance.setSigner(signer2Address);
    });
    it("signs user mints", async () => {
      const data = {
        to: signer3Address,
        tokenId: "23",
        nonce: "1",
        deadline: Math.floor(new Date().getTime() / 1000) + 10000,
      };
      const signedMint = await signer2._signTypedData(
        domain,
        SigningTypesMint,
        data
      );
      await membershipManagerInstance
        .connect(signer3)
        .mintWithSign(
          signer3Address,
          data.tokenId,
          data.deadline,
          data.nonce,
          signedMint
        );
      expect(await membershipManagerInstance.ownerOf("23")).to.be.equal(
        signer3Address
      );
    });
    it("signs user transfers", async () => {
      await membershipManagerInstance.adminMint(signer2Address, "23");
      const data = {
        to: signer3Address,
        from: signer2Address,
        tokenId: "23",
        nonce: "1",
        deadline: Math.floor(new Date().getTime() / 1000) + 10000,
      };
      const signedMint = await signer2._signTypedData(
        domain,
        SigningTypesTransfer,
        data
      );
      await membershipManagerInstance
        .connect(signer3)
        .transferWithSign(
          signer2Address,
          signer3Address,
          data.tokenId,
          data.deadline,
          data.nonce,
          signedMint
        );
      expect(await membershipManagerInstance.ownerOf("23")).to.be.equal(
        signer3Address
      );
    });
    it("does not allow nonce reuse", async () => {});
    it("allows signer accounts to change", async () => {});
    it("enforces deadlines", async () => {});
    it("handles invalid singatures", async () => {});
    it("rejects txns signed from the wrong address", async () => {});
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
      await membershipManagerInstance.transferFrom(
        signer2Address,
        signerAddress,
        "1"
      );
      const owner = await membershipManagerInstance.ownerOf("1");
      console.log(owner);
      expect(owner).to.be.equal(signerAddress);
    });
    it("allows burns from admins", async () => {
      await membershipManagerInstance.adminRevokeMemberships(["1"]);
    });
    it("does not allow burns from non-admins", async () => {
      await expect(
        membershipManagerInstance.connect(signer2).adminRevokeMemberships(["1"])
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });
});
