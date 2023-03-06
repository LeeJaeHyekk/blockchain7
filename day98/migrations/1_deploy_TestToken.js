const testToken = artifacts.require("testToken");
module.exports = function (deployer) {
  deployer.deploy(testToken, "GOD");
};
