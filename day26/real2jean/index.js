class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = undefined;
    this.right = undefined;
  }
  insert(node) {
    if (!this.left) this.left = node;
    else if (!this.right) this.right = node;
    else return [this.left, this.right];
    return [node];
  }
}

class CompleteBinaryTree {
  constructor() {
    this.root = undefined;
  }
  insert(data) {
    const tempNode = new TreeNode(data);
    if (!this.root) this.root = tempNode;
    else {
      let tempArr = [this.root];
      let isInsert = false;
      //   is,boolean 값이고 insert, 즉 넣었냐?
      let idx = 0;
      while (!isInsert) {
        const tempResult = tempArr[idx].insert(tempNode);
        // tempResult는 이름 그대로 임시로 저장한 결과값
        // treeNode의 insert  매서드의 return 값이다.
        if (tempResult.length == 1) isInsert = true;
        else {
          tempArr = tempArr.concat(tempResult);
          idx++;
        }
      }
    }
  }
}

const testTree = new TreeNode(1);
testTree.insert(2);
testTree.insert(3);
testTree.insertNode(new TreeNode(5));
const testTree2 = new TreeNode(6);
testTree2.insertNode(testTree);
console.log(testTree);
console.log(testTree2);
class BinaryNode {
  // 이진트리용 노드
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
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
  remove(data, node = this.root) {
    if (!this.root) return;
    //   루트가 없으면 지울데이터가 없으니까 아무것도 안한다.
    if (node.data > data) {
      // 지우려는 데이터가 현재 노드의 데이터보다 작다
      if (node.left) {
        // 현재 노드의 왼쪽 노드가 있으면
        //
        //  현재 노드에 왼쪽이 있으면 (노드왼쪽) 기준 으로(재귀함수)
        node.left = this.remove(data, node.left);
        //   현재 노드에서 왼쪽으로 한번 갔으니까, 루트의 왼쪽으로 왔으니 현재를 기준으로  다시 돌림
      }
    } else if (node.data < data) {
      // 지우려는 데이터가 현재 노드의 데이터보다 크다
      if (node.right) {
        // 현재 노드의 오른쪽 노드가 있으면
        node.right = this.remove(data, node.right);
      }
      // ----------------------------------------------
    } else {
      // 정답.
      if (!node.left && !node.right) {
        // left, right 모두 없을 때
        // 하위 노드가 아예 없다.
        if (node === this.root) this.root = undefined;
        return undefined;
      } else if (!node.left) {
        // 왼쪽 노드가 없다. => 오른쪽 노드는 있다.
        if (node === this.root) this.root = node.right;
        return node.right;
      } else if (!node.right) {
        // 오른쪽 노드가 없다. => 왼쪽 노드는 있다.
        if (node === this.root) this.root = node.left;
        return node.left;
      } else {
        let tempNode = node.right;

        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = this.remove(tempNode.data, node.right);
      }
    }
    return node;
    // 마지막에 현재 노드를 반환해준다.
    // 재귀 함수를 위해서
  }
  // remove(data, node) {
  //   if (!node) node = this.root;
  //   console.log(node);
  // } // 생각해보자
}
