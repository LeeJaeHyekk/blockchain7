const crypto = require("crypto-js");
// encrypt = 암호화  , decrpyte = 복호화

// console.log(crypto.SHA256("asdfasdfasdfsdf").toString());
// hashing : 단반향은 암호화가 가능한데 복호화가 불가능하다.

// console.log(crypto.MD5("asdasdsdasdasdasd").toString());

// console.log(crypto.RIPEMD160("asdasdsdasdasdasd").toString());

const tmepAES = crypto.AES.encrypt("qsdfsdfwqeasdfsdfasdf", "key").toString();
//                                  qsdfsdfwqeasdfsdfasdf
// console.log(tmepAES);

// console.log(crypto.AES.decrypt(tmepAES, "key").toString(crypto.enc.Utf8));
