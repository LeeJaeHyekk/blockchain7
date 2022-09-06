let randomNum;
let ranarr = [];

for (let i = 0; i < 3; i++) {
  randomNum = Math.floor(Math.random() * 10);
  // math.random 메서드는 0<= number&& number < 1
  ranarr.push(randomNum);
  console.log(ranarr);
}if (!ranarr.includes(randomNum)ranarr.push(randomNum))





const comSel = [];

function comSelectFunc(){
  for(
     let tempNum = parseInt(math.random()*10);  = 1번만 돌음
    comsel.length<3;
     tempNum = parseInt(Math.random()*10);
    ){
     if (!comsel.includes(tempNum)comSel.push(tempNum));
}

function comSelectFunc1(){
  for (;comsel.length<3;){
    // for의 변수 초기화와 반복 후 변경점을 삭제했다.
    const tempNum = parseInt(math.random()*10);
    // for 반복 내용에 tempNum를 초기화하여 comSel 배열을 확인후 배열에 추가 하도록 수정한다.
    // 위(comSelecFunc)에서 for 변수 초기화는 let인데 여기서는 왜 const인가?
    // comSelectFunc에서는 변수 초기화 후에 해당변수를 계속 재정의하여 확인해야 하지만 여기서(func1)은 반복 내용에서 변수를 초기화 하기 떄문에 재정의가 필요치 않아서 const가 가능하다.
    console.log(tempNum);
    if (!comsel.includes(tempNum)comSel.push(tempNum);
  }
}


function comSelectFunc3(){
  while(comsel.length<3){
  // comSelecFunc1의 for문은 조건만 남아있기 때문에 while로 대체가 가능합니다.
    const tempNum = parseInt(math.random()*10);
    console.log(tempNum);
    if (!comSel.includes(tempNum)) comSel.push(tempNum);
  }
}

comSelectFunc()
// 함수를 호출함으로써 컴퓨터의 숫자를 3개 정한다. 3개의 함수중 뭘 선택해도 상관없음(단, 여러개 호출 시 아래에서 호출된 것은 무시됨)
//무시되는 이유는 조건이 같기 떄문에 위 조건에 충족하지 않을 시 아래 조건 또한 충족되지 않는다.
// const set = new Set(ranarr);
// const unique


let playerSel =[]
while(playerSel<3){
  const tempInput =prompt('3자리 입력');
  // 입력 창에 대해서 취소를 누르면 tempInput은 정의되지 않아 underfined를 갖게된다.
  // 그래서 length를 갖지 못해 if에서 문제가 생긴다.
  if(tempInput !=3 || isNaN(parseInt(tempInput)){
    // isnan 함수는 매개변수가 nan, 즉 숫자가 아닌 문자를 강제로 숫자로 바꿨는지 확인해 준다.
    //입력 창에 대해서 취소를 누르면 tempInput은 정의
    continue;
    // 아래의 코드를 실행하지 않고 반복을 다시 시작한다.
  })
}


// const comSel = [];
// Math
// while 일때
// while(getComputedStyle.length<3);
// -----------------------------------------
// for(
// let tempNum = parseInt(math.random()*10);  = 1번만 돌음
// comsel.length<3;
// tempNum = parseInt(Math.random()*10);
// ){
  // if (!comsel.includes(tempNum)comsel.push(tempNum));
  // includes 메서드는 매개변수가 배열에 포함되어 있는지 boolean 값을 반환해 준다.
// }
// for(변수 초기화; 조건;반복 후 변경점){내용}
// 1. for는 "변수 초기화"를 실행하고, 조건을 확인 후 내용을 실행한다.
// 2. 내용 실행이 끝나면 "반복 후 변경점" 코드를 실행한다.
// 3. " 반복 후 변경점" 코드 실행후 조건을 확인하여 true면 내용을 실행한다.
//  이후 2로 돌아가서 다시 진행한다.


//  사용자 입력에 대해서 중복 체크
tempInput.split("").array.forEach(item => 
  // forEach는 배열의 아이템을 하나하나 가져와서 매개변수함수에 전달하여 함수를 실행한다.
  // (item) => {내용} << 화살표 함수이다.
  // item은 tempInput.split(``) 배열의 하나하나의 아이템이다.
  // function(item){내용}으로 대체 가능(75-77번 줄)
  {if(!playerSel.includes(parseInt(item)) playerSel.push(parseInt(item)));
  // tempInput.split("").forEach(function(item)){
    // if (!playerSel.includes(paresInt(item))) playerSel.push(pareInt(item));
  }
  // 컴퓨터가 선택한 랜덤 수는 정수기 떄문에(8,24,36번 줄 참고)플레이어가 입력한 숫자 또한 정수로 정의한다.
  // 컴퓨터가 선택한 랜덤 수와 마찬가지로 중복되면 안되기 떄문에 playerSel배열에 숫자가 없는지 확인 후 추가한다.
);
const tempArr = tempInput.split("");
for(let i=0; i<tempArr.length;i++)_{
  if(!playerSel.includes(parseInt(tempArr[i]))) playerSel.push(parseInt(tempArr[i]));

}
console.log(playerSel);
// 위의 forEach는 아래의 코드로 대체할 수 있다.
// tempArr이라는 변수로 배열을 정의한다.<< 왜? 그떄그떄마다 문자열(tempINput)을 split 매서드를 사용하여 짜르면 시간이 그만큼 늘어난다.
// 컴퓨터는 숫자를 0부터 세기 떄문에 i(index)를 0부터 시작하여 tempArr배열의 끝(길이-1)까지 코드를 실행한다.
if(playerSel.length !=3)playerSel =[];
}

//for를 써서 홀수 콘솔찍기
//for를 써서 짝수 콘솔찍기
//for를 써서 40까지  콘솔찍기
console.log("입력된 정상적인 플레이어의 선택 :" + playerSel);

let tempNumber = comSelectFunc1
//
while(){
  
}