// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "hardhat/console.sol";

/**

   ___  __    __  ___    ___           _                  _   __            _     _              
  / __\/ / /\ \ \/ __\  / _ \_ __ ___ | |_ ___   ___ ___ | | /__\ ___  __ _(_)___| |_ _ __ _   _ 
 / _\  \ \/  \/ /__\// / /_)/ '__/ _ \| __/ _ \ / __/ _ \| |/ \/// _ \/ _` | / __| __| '__| | | |
/ /     \  /\  / \/  \/ ___/| | | (_) | || (_) | (_| (_) | / _  \  __/ (_| | \__ \ |_| |  | |_| |
\/       \/  \/\_____/\/    |_|  \___/ \__\___/ \___\___/|_\/ \_/\___|\__, |_|___/\__|_|   \__, |
                                                                      |___/                |___/ 
-------------------------------------------------------------------------------------------------
"FWBProtocolRegistry"   :                                   central on-chain registry of all FWB
                                                            protocol related contracts deployed
                                                            on the ethereum mainnet.

@author                 :                                   @ bretth18 / @ computerdata for
                                                            Friends With Benefits.

@title                  :                                   "FWBProtocolRegistry"
 */
contract FWBProtocolRegistry {
    
    /// Struct to hold registration of contracts
    struct ContractRegister {
        address owner;
        address contractAddress;
        uint16 version;
    }

    /// Mapping variable for data set
    mapping(string => ContractRegister) registry;



    function registerContract(string memory name, address addr, uint16 ver) public returns (bool) {
        // arrays start at 0
        require(ver >= 0, "incorrect version");


        ContractRegister memory info = registry[name];

        // only allow "owner" to modify
        require(info.owner == msg.sender, "you can't do this");

        // Create info is not already in registry
        if (info.contractAddress == address(0)) {

            console.log('creating new shit');

            info = ContractRegister({
                owner: msg.sender,
                contractAddress: addr,
                version: ver
            });

        } else {

            info.version = ver;
            info.contractAddress = addr;
        }

        // update registry 
        registry[name] = info;
        return true;
    }



    function getContractAddress(string memory name) public view returns (address) {
        return registry[name].contractAddress;
    }





}