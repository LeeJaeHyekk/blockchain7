const addressLi = document.getElementById("wallet_address");
const publicKeyLi = document.getElementById("wallet_publicKey");
const privateKeyLi = document.getElementById("wallet_privateKey");
const balanceLi = document.getElementById("wallet_balance");

const info = (_wallet) => {
  //_wallet은 지갑정보 (개인키 공개키 주소 )
  console.log("2-9/4-10 전달받은 지갑 정보(data)를 웹페이지에 출력");
  //웹페이지상 위에띄운거
  // 2-7
  addressLi.innerHTML = _wallet.address;
  publicKeyLi.innerHTML = _wallet.publicKey;
  privateKeyLi.innerHTML = _wallet.privateKey;
  balanceLi.innerHTML = _wallet.balance;
};

document.getElementById("new_wallet_btn").onclick = () => {
  console.log("2-1지갑 생성 클릭했다");
  // 2-1
  axios.post("/wallet/create").then(({ data }) => {
    //2-6
    // console.log(data);
    console.log("2-8 응답받은 지갑 정보(data)를 info함수에 전달");
    info(data);
  });
};
const getInfo = async (_address) => {
  //밑에서 매개변수로 넘겨준 item(지갑주소)가 들어옴
  //4-2
  console.log("4-1 지갑 주소 목록중 하나 클릭");
  const wallet = (await axios.get(`/wallet/` + _address)).data;
  // _address는 지갑주소
  console.log(wallet);
  //개인키 공용키 주소 다같이들어감
  // {privateKey: '0D0CC25972BC4E62B990D84EBFC25EB37CD870A601AF01F1868394D825EA1BB8', publicKey: '032DA39C429DC5B16C7600016E234E9C058FEE24491DE27DA8B83638065F511FBB', address: '234E9C058FEE24491DE27DA8B83638065F511FBB', balance: 0}
  // 클릭된 address를 추가해서 보낸다
  // data를 붙여야함 안붙이면 wallet.data로써야함
  // /wallet/address랜덤으로 보내준다
  console.log("4-9 응답받은 지갑정보 (data)를 info함수에 전달");
  info(wallet);
};
const listUl = document.getElementById("wallet_list");
document.getElementById("wallet_list_btn").onclick = () => {
  console.log("3-1목록 가져오기 클릭");
  //3-2
  axios.get("/wallet/list").then(({ data }) => {
    // console.log(data);
    console.log(
      "3-5파일목록을 응답받음,ul 엘리먼트 내(innerHTML)를 비우고, 받은 파일 목록으로 채운다"
    );
    //3-6
    listUl.innerHTML = "";
    data.forEach((item) => {
      listUl.innerHTML += `<li onclick="getInfo('${item}')">${item}</li>`;
      // li태그 클릭했을때 getInfo 함수 호출한다 스트링으로 매개변수 item넘겨줌
      //4-1 onclick 실행 목록아이템 클릭
    });
    //3-7 밑에 출력
    // getInfo함수 호출하면서 보내줌
  });
};

document.getElementById("transaction_form").onsubmit = (e) => {
  e.preventDefault();
  console.log("5-1/6-1/8-1 전송 버튼 클릭");
  // 조건 : 위에 지갑 데이터 있어야함 && received 입력값이 있어야함 && amount 입력값이 있어야함

  const publicKey = publicKeyLi.innerHTML;
  const address = addressLi.innerHTML;
  const received = e.target.received.value;
  // received 주소값
  const amount = +e.target.amount.value;
  // amount 보내는 금액

  const req = {
    sender: {
      publicKey,
      address,
    },
    received,
    amount,
  };
  console.log(
    "5-2/6-2/8-2 현재 지갑 정보와 입력된값으로/ transaction/send 에 요청보냄"
  );

  axios.post("/transaction/send", req);
};

document.getElementById("block_mine_btn").onclick = () => {
  const data = addressLi.innerHTML;
  if (data === "") return;
  //data는 지갑주소 지갑주소가 빈칸이면 끝냄
  axios.post("/block/mine", { data }).then(() => {
    axios.post("/balance", { address: data }).then(({ data }) => {
      balanceLi.innerHTML = data.balance;
    });
  });
};
//월렛에있는 server.ts에서받음

//ts-node wallet/server 이걸로 연다
