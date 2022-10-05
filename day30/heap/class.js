function Heap(type = "min") {
  this.item = [];
  this.type = type;
}
Heap.prototype.swap = function (idx1, idx2) {
  const temp = this.items[idx1];
  this.items[idx1] = this.items[idx2];
  this.items[idx2] = temp;
};
Heap.prototype.getParentIndex = function (idx) {
  return parseInt((idx - 1) / 2);
};
Heap.prototype.getleftChildIndex = function (idx) {
  return idx * 2 + 1;
};
Heap.prototype.getrightChildIndex = function (idx) {
  return idx * 2 + 2;
};

Heap.prototype.getType = function () {
  return this.type === "max" ? -1 : 1;
};

Heap.prototype.insert = function (item) {
  this.items.push(item);
  let nowIdx = this.items.length - 1;
  while (true) {
    if (nowIdx < 1) return this.items.length;
    const parentIdx = this.getParentIndex(nowIdx);
    if (
      this.items[parentIdx] * this.getType() >
      this.items[nowIdx] * this.getType()
    ) {
      this.swap(parentIdx, nowIdx);
      nowIdx = parentIdx;
    } else {
      break;
    }
  }
  return this.items.length;
};

Heap.prototype.remove = function () {
  const temp = this.items.shift();
  this.items.unshift(this.items.pop());
  let nowIdx = 0;
  while (true) {
    const leftChild = this.getleftChildIndex(nowIdx),
      rightChild = this.getrightChildIndex(nowIdx);
    if (
      this.items[nowIdx] * this.getType() >
        this.items[leftChild] * this.getType() ||
      this.items[nowIdx] * this.getType() >
        this.items[rightChild] * this.getType()
    ) {
      if (
        this.items[leftChild] * this.getType() >
        this.items[rightChild] * this.getType()
      ) {
        this.swap(nowIdx, rightChild);
        nowIdx = rightChild;
      } else {
        this.swap(nowIdx, leftChild);
        nowIdx = leftChild;
      }
    } else {
      break;
    }
  }
  return temp;
};

const heap = new Heap();
