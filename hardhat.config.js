require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: `${process.env.RINKEBY_ALCHEMY_URL}`,
      accounts: [`0x${process.env.RINKEBY_PRIVATE_KEY}`],
    }
  }
};
