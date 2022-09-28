class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  insert(data, index) {
    if (index === undefined) this.children.push(new TreeNode(data));
    else if (index > -1) this.children[index].push(new TreeNode(data));
  }
  insertNode(node) {
    this.children.push(node);
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
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarysearchTree {
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
  // ------------------------------------------------------
  // -------------------------------------------------------
  remove(data, node = this.root) {
    //   666
    if (this.root) return;
    //      !100

    if (node.data > data) {
      //   666  >  666   x

      // 지우려는 데이터가 현재 노드의 데이터보다 작다.
      // node.left
      if (node.left) {
        // 현재 노드의 왼쪽 노드가 있으면
        // 아래의 노드레프트의(옴겨간거)  기준
        node.left = this.remove(data, node.left);
        // 777 의 왼쪽 : 666  == 666 , 777의 왼쪽 == 666            15      12
      }
    } else if (node.data < data) {
      //         666        666 x
      if (node.right) {
        // 기준 :100   오른쪽:  777
        node.right = this.remove(data, node.right);
        // 100의 오른쪽: 777  =         666, 777
      }
      // 지우려는 데이터가 현재 노드의 데이터보다 크다
    } else {
      // 666 == 666
      if (!node.left && !node.right) {
        // 고립 x

        // 하위 노드가 없다
        if (node === this.root) this.root = undefined;
        // 670     !==    100
        return undefined;
        // 삭제한다.
      } else if (!node.left) {
        // 왼쪽  x

        // 왼쪽 노드가 없다. => 오른쪽 노드는 있다.
        return node.right;
      } else if (!node.right) {
        //  x

        // 오른쪽 노드가 없다 => 왼쪽 노드는 있다.
        return node.left;
        // 꺼내라  14
      } else {
        // 666 == 666
        let tempNode = node.right;
        //    임시노드설정 값을 보존하기 위해서  tempnode =  670
        while (tempNode.left) {
          // 반복문 : 670의 왼쪽 x
          tempNode = tempNode.left;
        }
        // 670의  왼쪽이 없어
        node.data = tempNode.data;
        // 666   = 670의 값으로 대입
        node.right = this.remove(tempNode.data, node.right);
        // 666. 670  =                    670  ,    670
      }

      // 정답
    }
    return node;
  }
}

const testSearch = new BinarysearchTree();
testSearch.insert(227);
testSearch.insert(777);
testSearch.insert(727);
testSearch.insert(141);
testSearch.insert(1229);
testSearch.insert(666);
console.log(testSearch);

// 1vs10 || 파카 인간상성

// 마샬 : 간단하고 빠른 기숳   - 거버넌스 ??? 프로토콜 외출?  dao에서 인프라를 갖추는데
