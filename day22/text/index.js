// 자료 구조란 한정된 용량(메모리, 공간)에 최적화 시켜서 많은 데이터를 쓸 수 있도록 설계된것
// call stack, memory heap , Web API , Callback Queue , 중요! 키워드 (stack , heap , Queue)
// stack : 선입후출 , 먼저 들어간 게 나중에 나온다.
function stackOverFlow(count) {
  console.log(count);
  if (++count < 10) stackOverFlow(count++);
  console.log(count + "end");
}
stackOverFlow(0);
console.log(new Set([1,2,3]));
class Block7 {
  // block7 클래스를 선언합니다.
  constructor(count) {
    //생성자
    this.count = count;
    // 클래스의 count를 선언, 정의 즉 초기화 한다.
    // 매개변수 count로
    // this는 객체이다. 즉, 생성되는 객체의 count 키에 count 값을 초기화 한다.
  }
  consoleLog() {
    console.log("블록 7기의" + this.count + "번째 학생입니다.");
  }
  
const block7 = new Block7(1);
  // block7 클래스를 새롭게 생성한다.
  // 생성된 객체는 Block7을 기준으로 하기 때문에 개발자 도구에 이름이 붙어 있다.
  // new block7, 즉 new를 붙이고 호출시 constructor를 호출한다.
  // 매개변수는 constructor의 매개변수로 전달된다.
  // 자바스크립트에 원래 클래스 없었으나 C++,C#,Java 등을 사용하는 개발자들의 요청으로 추가되었습니다.
  block7.consolelog();
  // block7의 consoleLog 매서드를 호출한다.
  console.log(block7);
  //block7 확인
  const block7Obj = {
    const:1,
    consoleLog(){
    consolelog.("") 
    }
  }
  function Block7Func(count) {
    this.count = count;  
  }
  Block7Func.prototype.consoleLog = function(){
    // 화살표 함수의 this = root
    console.log("함수 블록 7기의 "+ this.count+"번째 학생 입니다.");

  };
  const block7func = new Block7Func(2);
  block7func.consoleLog();
  console.log(block7func);

  class Student extends Block7{
    // extends를 사용하여 Block7을 상속받아 Student 클래스를 생성한다.
    constructor(name, count){
      // 생성자 : new 붙여서 생성할때 사용되는 코드?
      super(count);
      //  super << 뭐냐 부모의 생성자, block7의 생성자. Block7의 생성자 이다.
      // super는 부모의 생성자 함수를 호출한다.
      this.name = name;
      
    }
    consoleLog(){
      console.log("이름은" + this.name +"입니다.");
      super.consoleLog();
    }
  }
  const kjk = new Student("김정규",1);
  kjk.consoleLog();
  console.log(kjk);
}

// queue(큐) :선입 선출 , 먼저들어가는 것이 먼저 나온다. / push, shift
// 큐는 보통 사용자 입력에 대해서 관리한다.
// heap(힙): 객체 , 배열을 저장할 때 사용한다. 상당히 마구잡이로 위치한다.
