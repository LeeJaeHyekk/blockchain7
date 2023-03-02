const test = artifacts.require("Test");

module.exports = function (deployer) {
  deployer.deploy(test);
};
// -배포 결과에서 CA를 가져오자.

// 0x47391e7fcdb53710b5e69d28ed5a317f132344e8
