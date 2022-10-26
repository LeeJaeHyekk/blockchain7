const crypto = require("crypto-js");
const tmepHeader = JSON.stringify({ name: "Block777", alg: "HS512" });
const base64Header = Buffer.from(tmepHeader).toString("base64url");
const JWTHeader = base64Header.replaceAll("=", "");
const tempPayload = JSON.stringify({});
