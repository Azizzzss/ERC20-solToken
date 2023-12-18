require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "private",
  networks: {
    private: {
      url: process.env.NET_work_Endpoint , // Replace with the URL of your private network
      accounts: [process.env.Private_key_coinbase]

    }}
};
