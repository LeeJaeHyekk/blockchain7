// jwt : jsonWebToken
// JSON은 일종의 데이터 형식
// form[] : 변수값을 받기위해서
// form['dataName'] == forms.dataName
// forms?.[dataName]form?.dataName
//jwt : 웹에서 사용하는 JSON 형식의 토큰(짧은 데이터)
const tempHeader = JSON.stringify({ name: "block7", alg: "HS512" });

// stringify : 객체를   json 형식으로 변환
// parse : json 형식을 객체로 변환
// alg : 어떠한 알고리즘을 사용할 것인가? << 암호화 한다.
// HS256, HS384 , HS512 , HS512
const crypto = require("crypto-js");
const base64Header = Buffer.from(tempHeader).toString("base64url");
// JWT는 base64url 형식의 포멧을 사용한다.
// base64가 뭘까?  << ASCII 코드를 기준으로 데이터를 저장하는 포멧이다.
const JWTHeader = base64Header.replaceAll("=", "");
//  위는 header를 완성했다,
const tempPayload = JSON.stringify({ maker: "tester", expiresIn: "10m" });
// 언제 세션이 만료되는 시점인가?
const base64Payload = Buffer.from(tempPayload).toString("base64url");
//
const JWTPAYload = base64Header.replaceAll("=", "");

const tempSingnature = crypto
  .HmacSHA256(JWTHeader + "." + JWTPAYload, "key")
  .toString(crypto.enc.Base64url)
  .replaceAll("=", "");

const jwt = `${JWTHeader}.${JWTPAYload}.${tempSingnature}`;

// json Web token은 | header | | payload  | |signature| 로 이루어져 있다.
// header: JWT의 검증을 위한 데이터가 저장된다.
// payload: JWT가 갖고있는 데이터 이다. << 우리가 저장하고 싶은 데이터,
// 개발자가 저장하고 싶은 데이터, 주고받아야할 데이터!, 로그인 후의 그사람의 닉네임
// 로그인 후의 그 사람의 닉네임, 어떠한 암호화된 토큰 등
// signature : 암호화된 서명이다. << 검증에 사용한다.
