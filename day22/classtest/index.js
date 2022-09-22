class Node {
  constructor(data) {
    // 기본 노드(부모)
    this.data = data;
    // 생성자에게
  }
}
// class Stack{
//     constructor(){
//         this.arr = [];
//     }
// }
//  push(data){
//     this.arr.push(data);
//  }
//  pop(){
//     return this.arr.pop();
//  }
//  log(){
//  console.log(this.arr);
//  }
//  const stack = new Stack();
//  stack.push(1);
//  stack.push(2);
//  stack.push(3);
//  stack.log();
//  console.log(stack.pop());
// }

class StackNode extends Node {
  constructor(data, head) {
    //data와 head를 받아서 진행한다.
    // head는 다음데이터이다.
    super(data);
    // 부모 노드(기본 노드)의 생성자를 호출한다. 실행한다.
    this.head;
    // head를 생성한다.
  }
  push(data) {
    // 넣다, data 매개변수를
    if (!this.data) this.data = data;
    // 만약에 data가 없으면 현재 노드의 data에 전달받은 매개변수 data를 정의한다.
    // pop을 하다보면 전부 없앨 수 있기 때문에 현재 노드의 data 또한 삭제될 수 있기 떄문이다.
    else if (this.head) {
      this.head.push(data);
      //  head가 있다는 이야기는 마지막 노드가 아니다. 즉 마지막 순서가 아니다.
      //   마지막 순서가 아니기 떄문에 다음 노드에 데이터를 넣도록 한다.
    } else {
      // 다음 데이터가 없음이 확인되고, 현재 데이터도 있을때 head에 새 노드를 추가한다.
      this.head = new StackNode(data);
    }
  }
  pop() {
    if (this?.head?.head) return this.head.pop();
    // 만약에 this의 head의 head가 있으면 this의 head의 pop 메서드 호출
    else if (!this?.head) {
      // 만약에 this의 head가 없으면
      const temp = this.data;
      // temp 변수에 현재 data를 정의한다.
      this.data = undefined;
      //   현재 data를  삭제한다.
      return temp;
      //   temp를 return한다.
    } else {
      // this의 head의 head가 없고 this의 head가
      const temp = this.head.data;
      delete this.head;
      //   this
      this.head = undefined;
      return temp;
    }
  }
}
const StackObj = {
  data: 1,
  head: undefined,
  push: function (data) {
    if (!this.data) this.data = data;
    else if (this.head) {
      this.head.push(data);
    } else {
      this.head = new StackNode(data);
    }
  },
};
console.log(StackObj);
StackObj.push;

const stack = new StackNode(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack);
console.log();

//    = new StackNode(data)

//     }else{

//     }
//   }
//   pop(){

//   }
// }
