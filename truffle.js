const HDWalletProvider = require("truffle-hdwallet-provider");
const secret = "warrior kangaroo tank foil culture such ceiling dawn orchard eternal fetch usual";
const infuraUrl = "https://rinkeby.infura.io/v3/76d53a362dcc45f89d98c3fdedb40ea4";
var NonceTrackerSubProvider = require("web3-provider-engine/subproviders/nonce-tracker")

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      network_id: 4,
      provider: () => new HDWalletProvider(secret, infuraUrl)
    }
  },
  compilers: {
    solc: {
      version: "^0.4.25",
        optimizer: {
          enabled: true,
          runs: 200
      }
    }
  }
};