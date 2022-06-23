const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((val) => +val);

/* heap 활용 풀이*/
let [n, ...list] = input;

class Heap {
  constructor() {
    this.items = [];
  }

  swap(index1, index2) {
    let temp = this.items[index1];

    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  parent(index) {
    return this.items[this.parentIndex(index)];
  }

  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }

  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  add(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }

  poll() {
    let item = this.items[0];

    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();

    return item;
  }

  bubbleUp() {
    let index = this.items.length - 1;

    while (this.parent(index) && this.parent(index) > this.items[index]) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while (
      (this.leftChild(index) && this.leftChild(index) < this.items[index]) ||
      this.rightChild(index) < this.items[index]
    ) {
      let smallerIndex = this.leftChildIndex(index);

      if (
        this.rightChild(index) &&
        this.rightChild(index) < this.items[smallerIndex]
      ) {
        smallerIndex = this.rightChildIndex(index);
      }

      this.swap(smallerIndex, index);
      index = smallerIndex;
    }
  }
}

function solution(n, list) {
  let minHeap = new MinHeap();
  let sumNum = 0;
  let ansNum = 0;

  for (let i = 0; i < n; i++) {
    minHeap.add(list[i]);
  }

  for (let i = 0; i < n - 1; i++) {
    const firstNum = minHeap.poll();
    const secondNum = minHeap.poll();

    sumNum = firstNum + secondNum;
    minHeap.add(sumNum);
    ansNum += sumNum;
  }
  console.log(ansNum);
}

solution(n, list);

/* 메모리 초과 */
// const cardCnt = input[0];
// const cards = [];

// for (let i = 1; i < input.length; i++) {
//   cards.push(input[i]);
// }

// function solution(n, arr) {
//   let sortedArr = arr;
//   let sumNum = 0;
//   let ansNum = 0;

//   for (let i = 0; i < n - 1; i++) {
//     sortedArr = sortedArr.sort((a, b) => a - b);

//     const firstNum = sortedArr.shift();
//     const secondNum = sortedArr.shift();
//     sumNum = firstNum + secondNum;

//     sortedArr.push(sumNum);
//     ansNum += sumNum;
//   }
//   console.log(ansNum);
// }

// solution(cardCnt, cards);
