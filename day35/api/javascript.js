// javascript 는 prototype 이다.
// 변수는 저장할 데이터의 이름이다.
// cosnt , let , var
// var는 hoisting 이 가능하다.
// 저장할 데이터의 이름이기 떄문에 호출하면 저장된 다이터를 가져온다.(출력, 사용)
// const는 변경이 불가능 하다. << 재정의가 불가능 하다.
// let 은 같은 이름을 사용하지 못한다. let은 다른 데이터를 다시 저장할 수 있다. 변경이 가능하다.
// var는 마음대로 무구잡이로 사용 가능 하다.
// 같은 이름을 사용할수 있으나 재선언이 가능하다.(단 덮어쓴다.)
const constA = 1;
// constA = 2; 재정의가 불가능 하다.
// const constA=2 재정의 가 불가능 하다.
let letA = 1;

// 자료형 : |String |,|number|,|boolean|,|arr|,|null|,|function|,|object|,|undifined|,|symbol|
// symbol : 절대적으로 중복되지 않는 값  symbol("asd") == symbol("asd")

// 숫자로 바꾸기
// parseInt
// math.floor
// Number
// parseFloat

// [].push는 length를 리턴한다.
// 제일 뒤에 아이템을 추가한다.
// pop은 맨 뒤으 아이템을 제거한다. 뭘 제거했는지 보여주기 위해 제거할 아이템을 반환한다.
// unshift : 제일 앞에 아이템을 추가한다.
// shift :  pop과 같이 제거한 아이템을 반환한다.
// [].join   ==  아이템을 string으로 연결 , 매개변수로 받은  string()을 아이ㅔㅁ 중간에 삽입
// [].filter  == 원하는 데이터만 배열로 반환한다.
// [].find  == 깊이 찾다 객체내에서
// [].map    == 배열의 아이템을 변화 시키고 싶을때 사용한다. 매개변수 함수를 실행하고 그 반환값을 합하여 반환한다.
// [].slice  ==  자르기
// [].splice  == 자르기(원본 훼손)
// [].reduce == 합하기(join << 매 )
// [].reverse == 객체 내의 프로퍼티(키)를 사용하여 각 값을 더할수 있다.
// [].sort == 정렬
// [].concat() ==> [...a,...b] : 배열 합치기
// [].forEach ==
// [].indexof
// [].reduce=
// [].findindex

// object
// 객체 : 키와 값으로 이루어져 있음. key : value
// 선언은 {}로 묶어서 선언한다
// tmepObj.a  //// let a
// tempObj.b  //// let b
// 사용함에 있어서 다른점 : 객체의 프로퍼티(키 값)이니까 tempObj를 붙여서 .을 통래서 찾아서 사용한다.
//  객체는 중괄호{} 안에 있는 변수이다.
// JSON 은 객체 데이터를 파일로 저장하기 위해서 사용한다.
// const tempObj ={a:{a:{a:1}}}
// data(axios).data(server).list  << node.js에서 express 서버를 생성하고 axios로  데이터를 응답 받았을떄 사용한다.
// data["data"]["data"]["list"]
// Array[Object]
