class BinarySearchTree {
  // 이진 검색 트리
  constructor() {
    this.root = null;
  }
  insert(data) {
    if (!this.root) {
      this.root = new BinaryNode(data);
      return;
    }
    let node = this.root;
    while (true) {
      if (node.data > data) {
        if (node.left) {
          node = node.left;
        } else {
          node.left = new BinaryNode(data);
          return;
        }
      } else if (node.data < data) {
        if (node.right) {
          node = node.right;
        } else {
          node.right = new BinaryNode(data);
          return;
        }
      } else return;
    }
  }
  remove(data) {} // 생각해보자
}
