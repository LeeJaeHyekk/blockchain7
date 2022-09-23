const queueNode = {
  arr: [],

  push() {
    this.arr.push(data);
  }
  
  shift() {
    const temp = this.data;
    //  첫 데이터를 저장한다. 정의한다.
    if(this.head){
    // 헤드가 있으면
    this.data = this.head.data;
    // 현재 노드의 데이터를 헤드의 데이터로 정의한다.
    if(!this.head?.head){
    // 헤드의 헤드가 없으면 (다음 헤드가 마지막 노드면)
    delete this.head;
    // 헤드를 삭제한다.
    }else{
    // 헤드의 헤드가 있으면 (현재 노드의 헤드가 마지막 노드가 아니면)
    this.head.shift();
    // 해드의 shift 메서드를 호출한다.
    }
  }else{
    // 헤드가 없으면 현재 노드가 끝이기 때문에 data를 없애 준다.
    this.data = undefined;
  }
  return temp;
//   첫 데이터를 return, 반환해 준다.
  }
//   get() {
//     return this.arr;
//   },
// };
// queueNode.push(0);
// queueNode.push(2);
// queueNode.push(4);
// queueNode.push(6);
// console.log(queueNode.shift());
// console.log(queueNode.get());

class Node {
  constructor(data) {
    this.data = data;
  }
}
class queueNode extends Node {
    constructor(data){
        super
    }
}
