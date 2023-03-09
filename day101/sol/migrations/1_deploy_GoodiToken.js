const GoodiToken = artifacts.require("GoodiToken");
module.exports = function (deployer) {
  deployer.deploy(GoodiToken, "GoodiToken", "GD", 1000);
};
