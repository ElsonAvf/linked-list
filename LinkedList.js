
class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._size = 0;
  }
  
  get size() {
    return this._size
  }
  
  append(value) {
    if (this._head === null) {
      this._head = new Node(value);
      this._size++;
      return;
    }
    let node = this._head
    while (node.nextNode !== null) {
      node = node.nextNode;
    }
    node.nextNode = new Node(value)
    this._size++;
  }
  
  prepend(value) {
    let oldNode = this._head;
    this._head = new Node(value);
    this.head.nextNode = oldNode;
    this._size++
  }
  
  head() {
    return (this._head) ? this._head.value : null;
  }
  
  tail() {
    if (!this._head) {
      return null
    }
    let node = this._head;
    while (node.nextNode !== null) {
      node = node.nextNode;
    }
    return node.value
  }
  
  at(index) {
    let node = this._head;
    let currentIndex = 0;
    do {
      if (index === currentIndex) {
        return node.value
      }
      node = node.nextNode
      currentIndex++
    } while (node !== null)
    return -1
  }
}

let node = new LinkedList();
node.prepend({nome: 'chico', idade: 44})
console.log(node.tail())

