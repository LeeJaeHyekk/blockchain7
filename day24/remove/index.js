class Boss {
  constructor(data) {
    data = data;
    prev = undefined;
    next = undefined;
  }
}
class SecondBoss {
  constructor(data) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  insert(data) {
    if (!this.head) {
      this.head = this.tail = new Boss(data);
    } else {
      this.head.next = new Boss(data);
      //
      this.head.next.prev = this.tail;
      // this.head.next.prev = this.tail;
      this.tail = this.tail.next;
      // this.tail = this.tail.next;
    }
    this.size++;
  }
  remove(data) {
    let curr = this.head;
    if (!curr) return;
    if (curr.data === data) {
      this.head = this.head.next;
      this.head.prev = null;
      this.size--;
      return curr.data;
    }
  }
}
// ------------------------------
// CircularLinkedList.prototype.remove = function (data) {
//   let curr = this.head;
//   if (!curr) return;
//   if (curr.data == data) {
//     this.head = this.head.next;
//     this.tail.next = this.head;
//     delete curr;
//     this.size--;
//     return curr.data;
//   }
//   while (curr !== this.tail) {
//     if (curr.next.data === data) {
//       const tempNode = curr.next;
//       curr.next = tempNode.next;
//       if (tempNode === this.tail) this.tail = curr;
//       //   if(curr.next == this.head) this.tail= curr;
//       --this.size;
//     }
//     curr = curr.next;
//   }
// };

// CircularLinkedList.prototype.toString = function (data) {
//   if (!this.head) return;
//   let curr = this.head;
//   let tempStr = `${this.head.data}`;
//   while (curr !== this.tail) {
//     tempStr += ",";
//     tempStr += curr.next.data;
//     curr = curr.next;
//   }
//   return tempStr;
// };
