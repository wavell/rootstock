// #<{(|* @type import('hardhat/config').HardhatUserConfig |)}>#
// module.exports = {
//   solidity: "0.8.20",
//
//   // TODO: configure rskMainnet network settings
//   // TODO: configure rskMainnet private key
//   // TODO: configure rskTestnet network settings
//   // TODO: configure rskTestnet private key
//   
// };
	require("@nomiclabs/hardhat-ethers");
	require('dotenv').config();

<!-- Hardhat configuration -->
  module.exports = {
    solidity: "0.8.20",
    networks: {
      // rskMainnet: {
      //   url: "https://public-node.rsk.co",
      //   chainId: 30,
      //   gasPrice: 60000000,
      //   accounts: [process.env.ROOTSTOCK_MAINNET_PRIVATE_KEY]
      // },
      rskTestnet: {
        url: "https://public-node.testnet.rsk.co",
        chainId: 31,
        gasPrice: 60000000,
        accounts: [process.env.ROOTSTOCK_TESTNET_PRIVATE_KEY]
      }
    }
  };
