class Node {
  constructor(value) {
    this.value = (value !== undefined) ? value : null;
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
  
  pop() {
    if (this._head === null || this._head.nextNode === null) {
      this._head = null
      this._size = 0
      return
    }
    let node = this._head;
    let previousNode;
    while (node.nextNode !== null) {
      previousNode = node;
      node = node.nextNode
    }
    previousNode.nextNode = null
    this._size--
  }
  
  contains(value) {
    let node = this._head;
    while (node !== null) {
      if (value === node.value) {
        return true
      }
      node = node.nextNode
    }
    return false
  }
}

let node = new LinkedList();
node.prepend({nome: 'chico', idade: 44})
node.append('blablabla')
node.append(299)
node.append(false)
console.log(node.contains(false))
