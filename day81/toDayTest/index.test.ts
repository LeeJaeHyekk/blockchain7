import { randomBytes } from "crypto";
import { describe, it } from "node:test";

import eliiptic from "elliptic";

const ec = new eliiptic.ec("secp256k1");

describe("지갑 이해하기 : ", () => {
  let privKey: string;
  let pubKey: string;

  it("개인키", () => {
    privKey = randomBytes(32).toString("hex");
    console.log("개인키 : ", privKey);
    console.log("길이 : ", privKey.length);
  });
  it("공개키 생성", () => {
    const keyPair = ec.keyFromPrivate(privKey);
    pubKey = keyPair.getPublic().encode("hex", true);
  });
});
