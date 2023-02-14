// npm i ethereumjs-tx
// 트랜잭션 관련 라이브러리
const ethTx = require("ethereumjs-tx").Transaction;

const tx = new ethTx({
  from: "0x6b64CaCF65AdF57b1Ba10B9e52BF3c94477DeFC2",
  to: "0xCECF41F0a137112a216d5C64B0a97F9c72b0aDE7",
  value: "0x" + Math.pow(10, 18).toString(16),
});
tx.sign(
  Buffer.from(
    "4b76263f57ec5adbea7a082fa84db8963e7b4717f39e214196f87c54d692dbc4",
    "hex"
  )
);
console.log(tx);
console.log(tx.r);
console.log(tx.v);
console.log(tx.s);
