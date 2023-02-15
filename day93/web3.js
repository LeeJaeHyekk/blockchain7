const web3 = new Web3("http://localhost:8080");

web3.eth.extend({
  // RPC에 대한 메서드를 추가한다.
  property: "txpool",
  //   모듈 이름을 설정, 없어도 됨
  methods: [
    {
      name: "content",
      //   호출할 때 이름(선언되는 메서드의 이름)
      call: "txpool_content",
      //   rpc 이름
    },
  ],
});
web3.eth.txpool.content().then(console.log).catch(console.error);

web3.eth
  .sendTransaction({
    from: accounts[0],
    to: accounts[1],
    value: web3.utils.toWei("1"),
  })
  .on("transactionHash", (hash) => {
    // 트랜잭션 보낼 시 해당 트랜잭션의 정보를 기준으로 hash를 생성한다.
    console.log(hash);
  })
  .on(
    ("receipt",
    (recipt) => {
      // block에 추가 시 영수증을 발행한다.
      console.log(recipt);
    })
  )
  .on("confirmation", (confirmation, receipt) => {
    // 완료
    console.log(confirmation);
    console.log(receipt);
  })
  .on("error", (error) => {
    console.log(error);
  });
