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
    { type: "address", name: "signer" },
    { type: "address", name: "to" },
    { type: "uint256", name: "tokenId" },
    { type: "uint256", name: "deadline" },
    { type: "uint256", name: "nonce" },
  ],
};
const SigningTypesTransfer = {
  PermitTransfer: [
    { type: "address", name: "signer" },
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
    await membershipManagerInstance.grantRole(
      await membershipManagerInstance.NFT_MANAGER_ROLE(),
      signerAddress
    );
  });

  it("admin mints", async () => {
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
      await membershipManagerInstance.grantRole(
        await membershipManagerInstance.SIGNER_ROLE(),
        signer2Address
      );
    });
    it("signs user mints", async () => {
      const data = {
        signer: signer2Address,
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
          data.signer,
          data.to,
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
        signer: signer2Address,
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
          data.signer,
          data.from,
          data.to,
          data.tokenId,
          data.deadline,
          data.nonce,
          signedMint
        );
      expect(await membershipManagerInstance.ownerOf("23")).to.be.equal(
        signer3Address
      );
    });
    it("does not allow nonce reuse", async () => {
      const data = {
        signer: signer2Address,
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
          data.signer,
          data.to,
          data.tokenId,
          data.deadline,
          data.nonce,
          signedMint
        );
      expect(await membershipManagerInstance.ownerOf("23")).to.be.equal(
        signer3Address
      );
      await expect(
        membershipManagerInstance
          .connect(signer3)
          .mintWithSign(
            data.signer,
            data.to,
            data.tokenId,
            data.deadline,
            data.nonce,
            signedMint
          )
      ).to.be.revertedWith("nonce used");
    });
    it("fails with removed signer accounts", async () => {
      await membershipManagerInstance.revokeRole(
        await membershipManagerInstance.SIGNER_ROLE(),
        signer2Address
      );
      const data = {
        signer: signer2Address,
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
      await expect(
        membershipManagerInstance
          .connect(signer3)
          .mintWithSign(
            data.signer,
            data.to,
            data.tokenId,
            data.deadline,
            data.nonce,
            signedMint
          )
      ).to.be.revertedWith(
        "AccessControl: account 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 is missing role 0xe2f4eaae4a9751e85a3e4a7b9587827a877f29914755229b07a7b2da98285f70"
      );
    });
    it("enforces deadlines", async () => {
      const data = {
        signer: signer2Address,
        to: signer3Address,
        tokenId: "23",
        nonce: "1",
        deadline: Math.floor(new Date().getTime() / 1000) - 10000,
      };
      const signedMint = await signer2._signTypedData(
        domain,
        SigningTypesMint,
        data
      );
      await expect(
        membershipManagerInstance
          .connect(signer3)
          .mintWithSign(
            data.signer,
            data.to,
            data.tokenId,
            data.deadline,
            data.nonce,
            signedMint
          )
      ).to.be.revertedWith("Deadline time passed");
    });
    it("handles invalid signatures", async () => {
      const data = {
        signer: signer2Address,
        to: signer3Address,
        tokenId: "23",
        nonce: "1",
        deadline: Math.floor(new Date().getTime() / 1000) + 10000,
      };
      const signedMint = await signer2._signTypedData(
        domain,
        SigningTypesMint,
        { ...data, nonce: "9" }
      );
      await expect(
        membershipManagerInstance
          .connect(signer3)
          .mintWithSign(
            data.signer,
            data.to,
            data.tokenId,
            data.deadline,
            data.nonce,
            signedMint
          )
      ).to.be.revertedWith("NFTPermit::mintWithSign: Invalid signature");
    });
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
      ).to.be.revertedWith(
        "AccessControl: account 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 is missing role 0x0be7dc2b6f1c4aa33bf833a508f2b20d047034d65c3c983b36058bc4f7d3080b"
      );
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
      ).to.be.revertedWith(
        "AccessControl: account 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 is missing role 0x0be7dc2b6f1c4aa33bf833a508f2b20d047034d65c3c983b36058bc4f7d3080b"
      );
    });
  });
});
