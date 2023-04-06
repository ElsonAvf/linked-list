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
    this._head.nextNode = oldNode;
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
  
  find(value) {
    let node = this._head;
    let index = 0;
    while (node !== null) {
      if (value === node.value) {
        return index
      }
      node = node.nextNode
      index++
    }
    return null
  }
  
  toString() {
    let node = this._head;
    let str = ''
    while (node !== null) {
      str += `(${node.value}) -> `
      node = node.nextNode
    }
    str += 'null'
    return str
  }
  
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value)
      return
    }
    let node = this._head.nextNode;
    let previousNode = this._head;
    let currentIndex = 1
    while (node !== null || index === currentIndex) {
      if (index === currentIndex) {
        previousNode.nextNode = new Node(value)
        previousNode.nextNode.nextNode = node
        this._size++
        return
      }
      previousNode = node
      node = node.nextNode
      currentIndex++
    }
    return null
  }
  
  removeAt(index) {
    if (this._head === null) {
      return null
    }
    if (index === 0) {
      this._head = this._head.nextNode
    }
    let node = this._head.nextNode;
    let previousNode = this._head;
    let currentIndex = 1
    while (node !== null) {
      if (index  === currentIndex) {
        previousNode.nextNode = node.nextNode
        this._size--
      }
      previousNode = node;
      node = node.nextNode
      currentIndex++
    }
    return null
  }
}