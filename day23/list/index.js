// const listNode = {
//   data: undefined,
//   //   노드의 데이터
//   next: undefined,
//   //   다음 노드
//   root: undefined,
//   insert(data) {
//     // 노드 추가
//     if (this.next) this.next.insert(data);
//     // 다음 노드가 있으면 그 노드에 추가
//     else
//       this.next = {
//         // 다음 노드가 없으면 여기에 추가
//         ...listNode,
//         data,
//       };
//   },
// };
// const listRoot = { ...listNode, data: 1, root: undefined };
// listRoot.insert(2);
// listRoot.insert(3);
// console.log(listRoot);

//
//
//

document.getElementById("event-item").addEventListener("click", () => {
  console.log(1);
});
document.getElementById("event-item").addEventListener("click", () => {
  console.log(2);
});
document.getElementById("event-item").addEventListener("click", () => {
  console.log(3);
});

// 아래는  추가
function SingleNode(data) {
  // 하나의 데이터(점)이다.
  this.data = data;
  //   노드의 데이터
  this.next = undefined;
  //   다음 노드
}
function SingleList() {
  // Single Linked List
  this.head = undefined;
  //   리스트의 헤드(머가리)
  this.tail = undefined; // 편하게 하려고 || 후에 원형 리스트에 사용
  //   리스트의 테일(꼬리)
  this.size = 0;
  //   리스트의 크기
}
SingleList.prototype.insert = function (data) {
  // 추가 매서드다, 클래스이기 때문에 prototype에 method(property)로 추가한다.
  if (!this.head) {
    // 머리가 없으면 , 리스트가 하나도 없다.
    this.head = new SingleNode(data);
    // 리스트에 노드를 추가한다.
    this.tail = this.head;
    // 꼬리도 정의해둔다.
  } else {
    // 머리가 있으면
    const temp = new SingleNode(data);
    // 임시로 하나 만든다.
    this.tail.next = temp;
    // 현재 꼬리에 만들어진 노드를 다음 노드로 연결한다.
    this.tail = temp;
    // 만든 노드를 꼬리에 정의한다.
  }
  return ++this.size;
  //   사이즈를 키운다.
};

const listArr = {
  arr: [],
  insert(data) {
    this.arr.push(data);
    return this.arr.length;
  },

  remove(data) {
    let isDelete = false;
    this.arr = this.arr.filter((item) => {
      if (item != data || isDelete) {
        return true;
      } else {
        isDelete = true;
        return false;
      }
    });
    // item != data);
    return this.arr.length;
  },
  contains(data) {
    return this.arr.contains(data);
  },
    SingleList.prototype.remove =function(data){
        // 삭제 메서드
    if(!this.head) return;
    // head가 없으면 리턴
    if(this.head.data == data){
        // head의 data가 삭제하려는 데이터면 
        const temp =this.head.next;
        // head의 next를 임시로 저장
        delete this.head;
        // 임시로 저장된 노드(head의 다음 노드)를 변수에 정의
        this.head = temp;
        // 임시로 저장된 노드(head의 다음 노드)를 head로 정의
        this.size --;
        //  하나 지웠으니 사이즈 지우기
        return;
    }
}
    SingleList.prototype.contains = function(data){
    // 존재 여부 확인 매서드
    let curr = this.head;
    // 현재 노드 설정(시작은 head)
    while(curr !== this.tail){
        // 현재 노드가 꼬리, 즉 끝인지 확인,끝이 아니면 실행
    if(!curr.next)return;
    // 다음 노드의 데이터를 확인해서 같으면 참 반환
    if(curr.next.data === data){
        // 현재 노드의 다음 노드의 데이터가 삭제하려는 데이터 인가?
        const temp = curr.next.next;

        delete curr.next;
        curr.next = temp;
        this.size --;
        return;
    }
    // 모든 노드 확인했는데 여기까지 오면 없다고 판단 가능
    curr = curr.next;


}
}
};
