// 오버로드, 오버라이드
class Parent {
  console(data) {
    console.log("Parent", data);
  }
}
class Child {
  console(data) {
    console.log("Child", data);
    // console을 주석처리 하면 부모의 console을 가져다 사용한다.
    // console을 주석처리 하지 않으면 오버라이딩 이 되어서 함수가 변경된다. overRide
  }
}

const parent = new Parent();
parent.console("재혁아");
const child = new Child();
child.console("뭐나올까?");
