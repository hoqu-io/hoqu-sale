var HoQuToken = artifacts.require("../HoQuToken.sol");

module.exports = function(deployer, network, accounts) {
  if (network === 'development') {
    const totalSupply = web3.toWei("888888000", "Ether");

    deployer.deploy(HoQuToken, totalSupply);
  }
};
