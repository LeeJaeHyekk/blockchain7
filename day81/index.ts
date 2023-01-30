// 개인키를 만들어 보자
import cryptoJS from "crypto-js";
const privateKey = cryptoJS.lib.WordArray.random(32).toString();
// 랜덤의 매개변수로 몇 byte를 사용할 것 인지 전달한다.
// console.log(privateKey.toString().length);
//0~F -> F를 2진수로 1111 -> 4bit -> 64자 -> 64*4 -> 256bit
// 쉽게 느낄수 있는 node js 기본 모듈화
// import crypto from "crypto";
// const moduleKey = crypto.randomBytes(32).toString("hex");
// console.log(moduleKey);
// console.log(moduleKey.length);

// 계속 crypto-js 라이브러리를 사용했으니 계속 쓸 예정
