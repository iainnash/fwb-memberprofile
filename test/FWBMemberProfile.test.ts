// FWBMemberProfile.test.ts is a suite of unit tests for the FWBMemberProfile ERC-721 Contract

import { ethers, deployments, getUnnamedAccounts, getNamedAccounts } from 'hardhat';
import { expect } from 'chai';

import {IERC721Enumerable, FWBMemberProfile } from '../types/typechain';
import { setupUser, setupUsers } from './utils';


// Accounts setup
const setupFWBMemberProfile = deployments.createFixture(async () => {

    await deployments.fixture(['FWBMemberProfile']);
    const {deployer, tokenOwner} = await getNamedAccounts();


    const contracts = {
        FWBMemberProfile: <FWBMemberProfile>await ethers.getContract('FWBMemberProfile', tokenOwner),
    };

    // mint some tokens
    await contracts.FWBMemberProfile.mint().then(tx=> {
        console.log('minting');
        tx.wait();

    });
    

    const users = await setupUsers(await getUnnamedAccounts(), contracts);

    const deployereet = await setupUser(deployer, contracts);

    return {
        ...contracts,
        users,
        tokenOwner: await setupUser(tokenOwner, contracts),
        deployereet,
    };

});


describe('FWBMemberProfile', function() {
    
    // #1
    it('transfer fails', async function() {
        const {users} = await setupFWBMemberProfile();

        await expect(
            users[0].FWBMemberProfile.transferFrom(users[0].address, users[1].address, 1)
        ).to.be.revertedWith('ERC721: operator query for nonexistent token');
    });


    // #2
    it ('transfer succeed', async function() {

        const {users, tokenOwner, FWBMemberProfile} = await setupFWBMemberProfile();


        await expect(
            tokenOwner.FWBMemberProfile['safeTransferFrom(address,address,uint256)'](tokenOwner.address, users[1].address, 0)
        )
            .to.emit(FWBMemberProfile, 'Transfer')
            .withArgs(tokenOwner.address, users[1].address, 0);
    });


    // #3
    it ('can be minted by users', async function() {
        
        const {users,  FWBMemberProfile} = await setupFWBMemberProfile();

        await expect(
            users[3].FWBMemberProfile.mint()
        )
            .to.emit(FWBMemberProfile, 'Transfer')
            .withArgs('0x0000000000000000000000000000000000000000', users[3].address, 1);
    });


});