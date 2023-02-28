const keythereum = require("keythereum");
const path = require("path");
const address = "0xCA759409503eFcA19641D3c49889f8C72544BF58";
const keyObj = keythereum.importFromFile(address, __dirname);
const privateKey = keythereum.recover("1", keyObj);
// 매개변수로 비밀번호와 key 객체를 전달한다.
console.log(privateKey.toString("hex"));
// keyObj 매개변수로 가져올 지갑 주소와 해당 지갑 주소에 대한 key 파일이 있는 keystore 위치를 전달
// 0xCA759409503eFcA19641D3c49889f8C72544BF58
