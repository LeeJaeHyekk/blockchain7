const request = axios.create({
  method: "POST",
  // post 통신
  baseURL: "http://localhost:8545",
  // 통신할  서버
  headers: {
    // 정보 타입 json
    "content-type": "application/json",
  },
});

const walletListElem = document.getElementById("wallet-list");
// html에서 wallet list라는 아이디를  가져온다.
const accountElem = document.getElementById("account");
// html에서 account라는 아이디를 가져온다.
const balanceElem = document.getElementById("balance");
// html에서 balance라는 아이디를 가져온다.
const selectElem = document.getElementById("select-account");
// html에서 select-account라는 아이디를 가져온다.

let isCreating = false;
// 만들때 초기값을 false라 한다.(상태 변화 감지)
let interval;
// interval이라는 변수를 만든다.( 일정 시간에 따른 반복)
let accounts = [];
// 지갑 목록들을 넣을 빈 배열을 만든다.

async function mineStop() {
  // 마이닝 정지를 만든 함수
  await request({
    // 통신할 정보
    data: {
      // id : chain id
      id: 1337,
      // jsonrpc : 버전 2.0
      jsonrpc: "2.0",
      //  명령 : 채굴 정지
      method: "miner_stop",
    },
  });
  clearInterval(interval);
  // 클리어 초기화
  interval = undefined;
  // interval 이란 변수를 undifined로 넣는다.
}

// const {data : {result}} = await request({ data: { |id:1337|, |jsonrpc:"2.0"|, |method:"eth_getBalance"|, |params: [_account,"latest"]|    }    })

async function getBalance(_account) {
  // 잔액을 불러오는 함수
  //   const {
  //     data: { result },
  //     // data 아래 값을 가지고 있으며 그걸로 통신함
  //   } = await request({
  //     data: {
  //       id: 1337,
  //       jsonrpc: "2.0",
  //       method: "eth_getBalance",
  //       params: [_account, "latest"],
  //     },
  //   });
  //   console.log({ data });
  //   console.log(data.result);
  //   //   console.log(tempResult);
  //   //   console.log(tempResult.data);
  //   //   console.log(tempResult.data.result);
  //   balanceElem.innerHTML =
  //     parseInt(parseInt(result, 16) / Math.pow(10, 15)) / 1000;
  // 16 진수인 result 를 10진수화 시킨 값에 10의15승을 나누고 다시 1000을 나눈다.
  // 결과적으로 결과값과 소숫점 아래 3자리만 남기게 한다.
  //  여기 아래는 구조분해할당 없이 콘솔용 코드
  const tempResult = await request({
    data: {
      id: 1337,
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: [_account, "latest"],
    },
  });
  console.log(tempResult);
  console.log(tempResult.data);
  console.log(tempResult.data.result);
  balanceElem.innerHTML =
    parseInt(parseInt(tempResult.data.result, 16) / Math.pow(10, 15)) / 1000;
}

async function getWallet(_account) {
  // 지갑을 가져오는 함수이며
  // if (interval !== undefined) mineStop();
  // 예외처리 인터벌이 언디파인드가 아니라면 마이닝 스탑을 한다.
  accountElem.innerHTML = _account;
  // html에 현재 값을 띄워준다(매개변수 account 에 담긴 값들).
  await getBalance(_account);
  // 잔액을 나타내는 함수를 _account 매개변수를 넣어서 실행한다.

  selectElem.innerHTML = "";
  // 현재 지갑을 제외한 나머지 지갑을 고를수 있는 select창을 초기화 한다.
  accounts.forEach((item) => {
    // 현재 모든 지갑의 정보들을 배열 형태로 갖고 있는 곳에 forEach를 돌려 아이템 정보가 없다면 아이템을 새로 만들어 넣는다.
    if (item !== _account)
      selectElem.innerHTML += `<option value="${item}">${item}</option>`;
  });
}

async function getAccounts() {
  // 잔액을 가져오는 함수
  const {
    data: { result },
  } = await request({
    data: {
      id: 1337,
      jsonrpc: "2.0",
      method: "eth_accounts",
    },
  });
  //  데이터에 id , jsonrpc , method: eth_accounts 로 넣어서 실행한다.
  walletListElem.innerHTML = "";
  //   지갑 목록을 초기화 한다.
  console.log("result:", result);
  result.forEach((item) => {
    walletListElem.innerHTML += `<li onclick="getWallet('${item}')">${item}</li>`;
  });
  //   지갑목록들을 walletList에 추가한다.
  accounts = result;
}
getAccounts();
//  잔액을 가져온다.
// mineStop();
//  마이닝을 정지한다.

document.forms["new-wallet"].onsubmit = async function (e) {
  // new-wallet폼에서 변화를 감지합니다. 감지할 수 있는 방법으로는 e = event 로 이용합니다.
  e.preventDefault();
  // 이벤트가 연속으로 적용되게 하는 걸 막는다.
  if (e.target["new-pw"].value.length < 5 || isCreating) return;
  // input 창에 비밀번호의 길이가 5보다 작거나 false면 함수를 탈출한다.
  isCreating = true;
  // isCreating 을 참으로 변경합니다.
  await request({
    data: {
      id: 1337,
      jsonrpc: "2.0",
      method: "personal_newAccount",
      params: [e.target["new-pw"].value],
      //   매개변수로 input창에 입력된 비밀번호를 담아 보낸다.
    },
  });
  await getAccounts();
  // 잔액을 나타내는 함수를 실행한다.
  e.target["new-pw"].value = "";
  //   다시 input창을 초기화 합니다.
  isCreating = false;
  //   isCreating  boolean을 true 에서 false로 바꾼다.
};

document.getElementById("start").onclick = async function () {
  // start 버튼을 클릭하면 함수 실행
  if (accountElem.innerHTML === "") return;
  // 현재 지갑이 비어있으면 함수 탈출
  await request({
    // 채굴할 지갑을 설정합니다.
    data: {
      id: 1337,
      jsonrpc: "2.0",
      method: "miner_setEtherbase",
      params: [accountElem.innerHTML],
    },
  });
  await request({
    // 채굴을 시작합니다.
    data: {
      id: 1337,
      jsonrpc: "2.0",
      method: "miner_start",
    },
  });
  interval = setInterval(() => {
    // coinbase로 채굴할 지갑을 설정하고, miner_start로 채굴을 시작하면 잔액이 바뀌는데 , 채굴해서 바뀐값을 받아오기 위해 2초마다 잔액을 받아온다.
    getBalance(accountElem.innerHTML);
  }, 2000);
};

document.getElementById("stop").onclick = mineStop;
//  stop을 누르면 minStop 함수를 실행

document.forms["transaction"].onsubmit = async function (e) {
  // transaction 에서 변화를 감지합니다. (e)라는 매개변수로 통제 합니다.
  e.preventDefault();
  let to = selectElem.value;
  // to : 골라진 값으로 넣어 줍니다.
  if (e.target["transaction-account"].value)
    to = e.target["transaction-account"].value;

  await request({
    data: {
      id: 1337,
      jsonrpc: "2.0",
      method: "personal_unlockAccount",
      params: [accountElem.innerHTML, e.target["tran-pw"].value],
      // tran-pw에 해당하는 accountElem 값을 params로 받아온다.
    },
  });
  await request({
    data: {
      id: 1337,
      jsonrpc: "2.0",
      method: "eth_sendTransaction",
      params: [
        {
          from: accountElem.innerHTML,
          to: selectElem.value,
          value:
            "0x" + (e.target["ether"].value * Math.pow(10, 18)).toString(16),
        },
      ],
    },
  });
  getBalance(accountElem.innerHTML);
};

document.forms["select-meta"].onsubmit = function (e) {
  e.preventDefault();
  getWallet(e.target["meta"].value);
};
