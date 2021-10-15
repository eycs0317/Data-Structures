class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++
    }
    return this;
  }

  pop() {
    if(this.length === 0) {
      return 'empty list'
    }
    if(this.length === 1) {
      let temp = this.head;
      this.head = null
      this.tail = null;
      this.length--;
      return temp;
    }
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail
    this.tail.next = null
    this.length--;
    return current
  }
}

let myList = new SinglyLinkedList();
myList.push('hello')
myList.push('hey')
myList.push('yo')

console.log('myList - pop', myList.pop())
console.log('myList', myList)