class Node {
  constructor(data) {
    this.data = data;
    this.prev - undefined;
    this.next = undefined;
  }
}
class DoubleLinkedList {
  // 이런 컨테이너가 있다. 추상적으로...class
  constructor(data) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  insert(data) {
    console.log("입력된 데이터는 " + data);
    if (!this.head) {
      //   console.log("해드가 없다.");
      this.head = this.tail = new Node(data);
      //   console.log("해드는" + this.head);
      //   console.l는og("꼬리 " + this.tail);
    } else {
      //   console.log("해드가 있다.");
      //   console.log("테일의 다음 노드는" + this.tail.next);
      this.head.next = new Node(data);
      //   console.log("현재 테일의 다음 노드는" + this.tail.next);
      //   끝에 다음 노드를 추가 한다.
      this.head.next.prev = this.tail;
      //   console.log("현재 테일의 다음 노드의 이전은" + this.tail.next.prev);
      this.tail = this.tail.next;
      //   console.log("현재 테일은" + this.tail);
    }
    this.size++;
  }
  remove(data) {
    let curr = this.head;
    if (!curr) return;
    if (curr.data === data) {
      // ?.은 curr가 객체인지 확인하고 data 프로퍼티를 가져온다.
      this.head = this.head.next;
      //해드 컨테이너에 지금의 헤드를 옴김
      this.head.prev = null;
      //  ------------------------- 기존 머리는 뒤진거
      this.size--;
      // ------------------- 뒤진머리를 카운트
      return curr.data;
      // 반환값으로 어떤 데이터를 지웠는지 반환값을 알려줌  || data라고 해도 같은말
    }
    while (curr !== this.tail) {
      // 끝까지 가버리기 전까지
      if (curr.next.data === data) {
        // 입력값이랑 기존값이랑 비교 자료형까지 같은지..
        const tempNode = curr.next;
        //임시 노드가 현재의 다음값이다. 선언
        curr.next = tempNode.next;
        // 0|| 1 || 0 ->  0 || 0
        if (curr.next) curr.next.prev = curr;
        // 다음이 있다면, 현재의 그 다음의 이전은 우리다.
        //   0 || 0 || 0 || 0  || 0 ||
        // curr || /  || 0 ||
        else this.tail = curr;
        //  우리리 뒤에 아무도 없으니까 우리가 꼬리다.
        --this.size;
        // 뒤졌으니 사이즈 줄여주고
        return tempNode.data;
        // 여기도 데이터라고 써도 된다.
      }
      curr = curr.next;
    }
  }
  contains(data) {
    let curr = this.head;
    while (true) {
      if (curr.data === data) return true;
      if (!curr.next) return false;
      curr = curr.next;
    }
  }
}
const testDouble = new DoubleLinkedList();
testDouble.insert("테스팅");
testDouble.insert("테스팅1");
