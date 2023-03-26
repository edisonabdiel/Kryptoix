//https://eth-sepolia.g.alchemy.com/v2/xg0kAbkZlW4R807RFCxMcuJJVf5WpvUb
//38b52c1e05ad789807211fd20127b268c2cd675eb5017b2f350285fad2c5a81a

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/xg0kAbkZlW4R807RFCxMcuJJVf5WpvUb",
      accounts: ['38b52c1e05ad789807211fd20127b268c2cd675eb5017b2f350285fad2c5a81a']
    }
  }
};