// 객체가 뭐냐 {}로 묶인 키와 값으로 이루어진 변수(상자)?
const obj = {
  // obj = 객체
  a: 1,
  // a가 키고 1이 값이다.
  //   키의 정식 명칭은 프로퍼티(property)다
  b: function () {
    // b와 c는 함수 => 매서드(method)
    console.log("b");
  },
  c: () => {
    return "c";
  },
};
const arr = [1, 2, 3];
// 배열도 객체야.
// arr.push();
//  push 메서드를 호출
console.log(arr.length);
// 배열의 길이를 나타내는 프로퍼티
arr.indexOf(3);
// 배열에 있는 아이템을 찾아서 그 위치를 알려준다. 즉 위치를 리턴해준다.
// 없으면 -1, 첫번쨰 있으면 0
tempreturn = arr.find((item) => {
  // find는 함수이며 매개변수를 넣어주 면서 하나하나 실행해줘
  return item === 3;
});
// find는 검색할 때 나오는 코드
// 코드의 반환값이 true 나오는 함수를 넣어 준다.
// find의 반환값은 아이템의 순서가 아닌 아이템 그 자체이다.
// find 메서드는 매개변수로 함수를 전달한다.
// 매개변수에 해당하는 함수의 매개변수(item)은 배열의 각 아이템을 적용한다.
// find 함수는 배열의 각 아이템을 순서대로 매개변수함수에 전달하여 리턴값을 확인한다.
// 매개변수함수에게서 받은 리턴값이 true면 해당 아이템을 리턴하고 find함수를 종료 한다.
console.log(tempreturn);

const arrFind = function () {
  for (let i = 0; i < arr.length; i++) {
    // i 는 0부터 arr의 길이까지 하나씩 증가하면서 반복한다.
    if (tempFind(arr[i])) return arr[i];
    // tempFind 함수가 호출하고 매개변수로 arr의 i번째의 아이템을 전달한다.
    // tempFind 함수가 true를  리턴(반환 )하면 arr의 i번째 아이템을 리턴 한다.
  }
};

// const tempFind =  function(){
//     for()
// }

tempreturn = arr.filter((item) =>{ return item[0] ==="김";});

tempreturn = arr.map((item) => {
    return item[0] ==="김";
    // map은 매개변수함수의 return 값들을 배열로 리턴해 준다.
})

const tempArr = [
  {
    name: "정재훈",
    age: 30,
    area: "대치동",
  },
  {
    name: "염예나",
    age: 22,
    area: "하나",
  },
  {
    name: "김성진",
    age: 27,
    area: "성남",
  },
];
console.log(tempArr.find((item) => item.area === "하남"));
console.log(tempArr.findIndex((item) => item.area === "하남"));
console.log(tempArr.filter((item) => item.area === "하남"));
console.log(tempArr.map((item) => item.area === "하남"));
// 수정하며 내용확인

arr.forEach((item) => console.log(item)){
    console.log("forEach :" +item);
}

//           function(item){}
for(let i=0;i<arr.length;i++){
    console.log("for : "+arr[i]);

}
//  forEach 메서드는 아이템을 하나씩 함수에게 매개변수로 전달해 함수를 호출해 준다.
// 아래의 for 문과 같다.
arr.reverse();

console.log(arr);
console.log(arr.join("/"));
// 배열을 문자열로 바꿔줍니다. 매개변수로 아이템 사이에 넣을 문자를 입력합니다.
console.log(arr.toString()); // 문자열로 바꿈(거의 모든 객체에 포함되어 있음)
console.log(arr.slice(1,3));
// [1,2,3] 이라고 했을떄 1 앞이 0이고 , 각 ,마다 숫자가 늘어난다고 생각하면 편함.
// [0"정재훈", 1"염예나" , 2"김성진" , 3"최원겸" , 4 "김선주"] <<1에서 시작해서 3에서 끝난다.
// 1최원겸 , 2김성진 , 3 << 이런 배열을 리턴
console.log(arr.slice(1,-1));
// -은 뒤에서부터 확인합니다. 즉 5가 0 이고 4가 -1

// arr.splice(1,3) 1부터 3개를 짜른다. 단 arr을 수정해 버린다.

console.log(arr.sort());
// 메서드는 정렬을 해준다.(오름차순)
console.log(arr.sort().reverse());

// 메서드는 정렬을 해준다.(역오름차순)

const tempFind = (item) => {
  // item = arr[2] << item = 3
  console.log(`item : ${item}`);
  console.log(`item === "최원겸" : ${item === "최원겸"}`);
  return item === "최원겸";
  //   item이 3이랑 같으면 true를 리턴하고 아니면 false를 리턴한다.
};

const arrFind = function () {
  for (let i = 0; i < arr.length; i++) {
    console.log(`arr.length : ${arr.length}`);
    console.log(`i : ${i}`);
    console.log(`arr[${i}] : ${arr[i]}`);
    // i 는 0부터 arr의 길이까지 하나씩 증가하면서 반복한다.
    if (tempFind(arr[i])) return arr[i];
    // tempFind 함수를 호출하고 매개변수로 arr의 i번째의 아이템을 전달한다.
    // tempFind 함수가 true를 리턴(반환)하면 arr의 i번째 아이템을 리턴(반환)한다.
  }
};

console.log(arr.sort(curr,next) => {
    // console.log([1,6,2,3,4].sort(function(curr,next)){})
    if(curr > next) return 1;
    else if (curr < next) return -1;
    else return 0;
    // sort 메서드는 정렬을 해주는 메서드 입니다.
    // 1,0,-1 로 정렬 방식을 선택합니다.
    // 현재가 큰 것을 1로 주고 다음것이 큰것을 -1로 주면 오름차순으로 정렬된다.
})

