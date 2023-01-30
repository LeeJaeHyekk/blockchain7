// npm i elliptic
// npm i -D @types/elliptic
// -- 타원 곡선 알고리즘을 사용하는 암호화 라이브러리

import { sign } from "crypto";
import CryptoJS from "crypto-js";
import elliptic from "elliptic";
const privateKey: string = CryptoJS.lib.WordArray.random(32)
  .toString()
  .toUpperCase();
console.log(privateKey);

const ec: elliptic.ec = new elliptic.ec("secp256k1");
// 타원 곡선을 생성
// ec에 전달하는 매개변수 "secp256k1"은 elliptic에서 재공하는 사전 설정중 하나
//  - 사전 설정으로는 secp256k1, p192 , p224 등등이 있다.
//  secp256k1 ==> y^2 - x^3+7
const keyPair: elliptic.ec.KeyPair = ec.keyFromPrivate(privateKey);
//  개인키를 사용해서 키페어를 생성한다.
//  - 즉 공개키를 생성한다.
// keyFP(개인키) << 개인키를 사용하여 키페어(개인키 + 공개키)를 생성한다.
const publicKey = keyPair.getPublic().encode("hex", true).toUpperCase();
//  생성된 키페어에서 공개키를 가져온다.
// getPublic() << 키페어에서 공개키를 가져온다.
// encode(인코딩 형식,true) << 암호문을 저장하기 위해 객체 형식으로 되어 있는데 데이터를 문자열(hex)로 변환한다.
console.log("privateKey :", privateKey);
// console.log("privateKeyL :", privateKey.length);

console.log("publiceKey :", publicKey);
// console.log("publiceKeyL :", publicKey.length);

// 타원곡선에서 공개키는 찾은 점의 좌표이다. x,y  두 수로 이루어져 있다.
// 공개키는 문자열로 나타낼 시 "x"+"y" = `${x}${y}` << 두 좌표를 문자로써 연결한 문자열(string)이다.
// x,y는 256 bits의 크기를 가진다. => 공개키는 512 bits의 크기를 가진다. -> 128자가 나와야 한다.
// 128자는 너무 길어서 압축을 하게 된다. => x의 값은 그대로 가져오고 y의 값은 짝수 일때 는 "02", 홀수 일때는 "03"을 사용하게 된다.
// => 02xxxxxxxxxxxxxx|| 03xxxxxxxxxxxx가 나오게 된다.
//  => 02 / ef7d26b6c76602d7f1347e98c3ebd25f2a1f27c40c61af6a7decc7ebe6260d59 => y 는 짝수고 x는 ef7d26b6c76602d7f1347e98c3ebd25f2a1f27c40c61af6a7decc7ebe6260d59
// 타원 곡선 알고리즘을 이용해서 공개키를 구했을때 => x ,y 좌표가 공개키로 정의된다. => x,y를 모두 표기하면 128자(512 bits)의 길이를 갖게된다. => 너무 길어서 64자로 줄인다.(x만 사용한다.)
// => y를 버릴 수가 없어서 홀수와 짝수로 나누어 간단하게 추가한다.(짝수: 02 , 홀수 : 03) y에 대한 값은 앞에 붙인다.

// y가 짝수일때 02를 앞에 추가하고 홀수 일때 03을 앞에 추가한다. x+y를 모두 사용할때 128자 일까> => 앞에 04를 붙인다. 즉 130자가 된다. (520 bits / 65 bytes)
const data: string = "checking data";
const hash: string = CryptoJS.SHA256(data).toString().toUpperCase();
// 전송할 데이터 , Hash로 암호화 해두자
// console.log(hash);

const signature: elliptic.ec.Signature = keyPair.sign(hash, "hex");
//  sign(데이터, 인코딩 형식) << 키페어를 사용해서 서명을 만든다.
// console.log(signature);

// 위에서 만든 서명을 확인하자
const verify = ec.verify(hash, signature, ec.keyFromPublic(publicKey, "hex"));
console.log("verify : ", verify);
// 정상적으로 복호화 되어 hash가 확인된다면 true가 반환된다.(return)
// verify(데이터, 서명, 키페어) << 서명을 키페어를 사용해서 복호화하여 데이터와 비교한다. 같은 데이터라면 true가 반환된다.
// keyFromPublic(공개키, 인코딩 형식) << 공개키를 사용하여 키페어를 생성한다.
const newPrivateKey: string = CryptoJS.lib.WordArray.random(32)
  .toString()
  .toUpperCase();
const newKeyPair = ec.keyFromPrivate(newPrivateKey);
const newPublicKey = newKeyPair.getPublic().encode("hex", true).toUpperCase();
const newVerify = ec.verify(
  hash,
  signature,
  ec.keyFromPublic(newPublicKey, "hex")
);
console.log("newVerify:", newVerify);
// 새로운 공개키로 확인했기 떄문에 false가 변환된다.
//      - keyFromPublic에서 hex 없으면 터진다
//      - hash(=데이터)와 signature(=서명)과 publicKey(=공개키)
// const myWallet =
const myWallet = publicKey.slice(26);
console.log(myWallet.length);
// 0xa984dd0ddff49dc2d164648a5e865f0275b0c6f1;
console.log(0x88);
console.log("136: ", (136).toString(16));
