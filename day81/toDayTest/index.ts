import CryptoJS from "crypto-js";
import elliptic from "elliptic";
const privateKey: string = CryptoJS.lib.WordArray.random(32)
  .toString()
  .toUpperCase();
const ec: elliptic.ec = new elliptic.ec("secp256k1");
const keyPair: elliptic.ec.KeyPair = ec.keyFromPrivate(privateKey);
// keyFromPrivate(개인키) < 개인키를 사용하여 키페어
const publicKey: string = keyPair.getPublic().encode("hex", true);
// 생성된 키페어에서 공개키를 가져온다.
// getPublic() < 키페어에서 공개키를 가져온다.

console.log("privateKey :", privateKey);
console.log("publicKey :", publicKey);

const data: string = "checking data";
const hash: string = CryptoJS.SHA256(data).toString().toUpperCase();
const signature: elliptic.ec.Signature = keyPair.sign(hash, "hex");
// sign(데이터, 인코딩 형식) < 키페어를 사용해 서명을 만든다.
const verify: boolean = ec.verify(
  hash,
  signature,
  ec.keyFromPublic(publicKey, "hex")
);
