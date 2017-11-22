var HoQuToken = artifacts.require("../HoQuToken.sol");
var ChangeableRateCrowdSale = artifacts.require("../ChangeableRateCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  if (network === 'development') {
    const totalSupply = web3.toWei("888888000", "Ether");
    const bankAddress = web3.eth.accounts[1];
    const beneficiaryAddress = web3.eth.accounts[2];
    const tokenRate = 6000; // 1 ETH = 6000 HQX
    const minBuyableAmount = web3.toWei("1", "Ether");
    const maxTokensAmount = web3.toWei("34666632", "Ether");
    const endDate = 1513296000;

    deployer.deploy(HoQuToken, totalSupply).then(function () {
      return deployer.deploy(HoQuToken, totalSupply)
    }).then(function () {
      return deployer.deploy(
        ChangeableRateCrowdSale,
        HoQuToken.address,
        bankAddress,
        beneficiaryAddress,
        tokenRate,
        minBuyableAmount,
        maxTokensAmount,
        endDate
      )
    });
  }
};
