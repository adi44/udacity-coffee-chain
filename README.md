# CoffeChain

## Description
* Tracking the supply of coffee to consumers

One of the best and most pertinent applications of blockchain architecture is in the Supply Chain of products and services due to the ability to create an event ledger which can track the origin and authenticity of a product.

In this implementation Solidity is used to define the contractual relation of Farmers, Distributors, Retailers and finally Consumers.

[//]: # (Image References)
[activity]: ./diagrams/Activity.png "Activity Diagram"
[state]: ./diagrams/StateDiagram.png "State Diagram"
[sequence]: ./diagrams/SequenceDiagram.png "Sequence Diagram"
[DataModel]: ./diagrams/ClassDiagram.png "Classes (Data Model) Diagram"

## Diagrams Supplied

- Activity
- Sequence
- State
- Class

### Activity Diagram
![alt text][activity]

### Sequence Diagram
![alt text][sequence]

### State Diagram
![alt text][state]

### Class Diagram
![alt text][DataModel]

### Libraries used
- Truffle (version 5.0.1)
- Web3 (version 0.20.0)
- Web3 provider engine (for connectivity) (version 14.1.0)
- LiteServer (for serving the website) (v2.4.0)

## How to run the project

run
* `npm install` to install all libraries
* `npm install -g truffle` to make truffle available globally
* `npm run ganache-cli` to run ganache
* `truffle compile` to compile the contracts 
* `truffle migrate` to migrate the contracts to your local blockchain

and finally to run the app

* `npm run dev` which will start the website using liteserver

In order to run the tests simply run
`npm test`

## Rinkeby deployment:

> transaction hash:    0x0d12402a3b44b7f7aaeb07f433e23019c8c7e4970d2ec3378b02e6b66c040e14
> contract address:    0x57BF1cBB9c63513414C00BCe63Cb328339575258

> Rinkeby Address: [https://rinkeby.etherscan.io/address/0x57BF1cBB9c63513414C00BCe63Cb328339575258](SupplyChain address)   

### Migration script:
Last login: Mon Feb 25 06:49:06 on cons

                         
 kostas@Konstantinoss-Mac-Pro  ~/dev/udacity-supply-coffee-chain/app   master  truffle compile
 kostas@Konstantinoss-Mac-Pro  ~/dev/udacity-supply-coffee-chain/app   master  truffle migrate --network rinkeby --reset --compile-all
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/coffeeaccesscontrol/ConsumerRole.sol...
Compiling ./contracts/coffeeaccesscontrol/DistributorRole.sol...
Compiling ./contracts/coffeeaccesscontrol/FarmerRole.sol...
Compiling ./contracts/coffeeaccesscontrol/RetailerRole.sol...
Compiling ./contracts/coffeeaccesscontrol/Roles.sol...
Compiling ./contracts/coffeebase/SupplyChain.sol...
Compiling ./contracts/coffeecore/Ownable.sol...
Writing artifacts to ./build/contracts

⚠️  Important ⚠️
If you're using an HDWalletProvider, it must be Web3 1.0 enabled or your migration will hang.


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 7001511


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.469727014
   > gas used:            262462
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000524924 ETH

   -------------------------------------
   > Total cost:         0.000524924 ETH


2_deploy_contracts.js
=====================

   Replacing 'FarmerRole'
   ----------------------
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.468875848
   > gas used:            398575
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.00079715 ETH


   Replacing 'DistributorRole'
   ---------------------------
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.46807793
   > gas used:            398959
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000797918 ETH


   Replacing 'RetailerRole'
   ------------------------
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.467280268
   > gas used:            398831
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000797662 ETH


   Replacing 'ConsumerRole'
   ------------------------
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.466482862
   > gas used:            398703
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000797406 ETH


   Replacing 'SupplyChain'
   -----------------------
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.460191238
   > gas used:            3145812
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.006291624 ETH

   -------------------------------------
   > Total cost:          0.00948176 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.010006684 ETH

⚠️  Important ⚠️
If you're using an HDWalletProvider, it must be Web3 1.0 enabled or your migration will hang.


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 7000000


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0xa32978238d3c0dda4e0a0fef067237ecbb4eb54144bdb80d6cfd23ea0d291e81
   > Blocks: 1            Seconds: 17
   > contract address:    0xc00433D2B935b46F4C2Fb17cFb8B93bB2Fd588a3
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.464702698
   > gas used:            277462
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00554924 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00554924 ETH


2_deploy_contracts.js
=====================

   Replacing 'FarmerRole'
   ----------------------
   > transaction hash:    0x772abcb40502008a585f997841b5d4690b428ebcd4af58e579f84dfd2f993eeb
   > Blocks: 0            Seconds: 12
   > contract address:    0x5AE9D123b45cEeD30046557ef294e11c1409f508
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.455591038
   > gas used:            413575
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0082715 ETH


   Replacing 'DistributorRole'
   ---------------------------
   > transaction hash:    0x20265845fd743f745b1618e8410e6ebf2acdf88ca0cd3913769bc17c1ff043ee
   > Blocks: 0            Seconds: 12
   > contract address:    0x7985f5a01b1C85d462266fFa4657b87e69D4facd
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.447311858
   > gas used:            413959
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00827918 ETH


   Replacing 'RetailerRole'
   ------------------------
   > transaction hash:    0x0ce9a9583130309dc229f993ecb03251b141f39a613f5f133b5aaf2f8ff74b0e
   > Blocks: 1            Seconds: 12
   > contract address:    0x39859b65850eb3B0cb319E69FE4F2974089d86fc
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.439035238
   > gas used:            413831
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00827662 ETH


   Replacing 'ConsumerRole'
   ------------------------
   > transaction hash:    0x6522494a68876e35a9e3eb4191a36d18117c293ab772048611de04c1de31639a
   > Blocks: 1            Seconds: 12
   > contract address:    0x0236efB19CBd50EC17a79487B4179ADCecdcFe96
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.430761178
   > gas used:            413703
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00827406 ETH


   Replacing 'SupplyChain'
   -----------------------
   > transaction hash:    0x0d12402a3b44b7f7aaeb07f433e23019c8c7e4970d2ec3378b02e6b66c040e14
   > Blocks: 0            Seconds: 8
   > contract address:    0x57BF1cBB9c63513414C00BCe63Cb328339575258
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.365744938
   > gas used:            3250812
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.06501624 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0981176 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.10366684 ETH




### ATTRIBUTIONS:
* Deploying to Rinkeby with Truffle from Mac OS: [decentralised blog](https://medium.com/practical-blockchain/deploying-smart-contract-to-rinkeby-testnet-using-truffle-and-mac-os-x-8fc16ff380e2)
* Reminders for solidity basics: [Udemy solidity course](https://www.udemy.com/ethereum-and-solidity-the-complete-developers-guide/learn/v4/overview)
