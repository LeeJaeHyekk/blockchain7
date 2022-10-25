const tempHeader = JSON.stringify({});
// JSON 형식 객체
const crypto = require("crypto-js");
const base64Header = Buffer.from(tempHeader).toString("base64url");
const JWTHeader = base64Header.replaceAll("=", "");
