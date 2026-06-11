// tugas-2.js
// Min Stack dengan getMin() O(1)

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // O(1)
  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  // O(1)
  pop() {
    if (this.isEmpty()) return null;

    const value = this.top.data;
    this.top = this.top.next;
    this.size--;

    return value;
  }

  // O(1)
  peek() {
    return this.top ? this.top.data : null;
  }

  // O(1)
  isEmpty() {
    return this.size === 0;
  }
}

// =====================================
// Min Stack
// =====================================

class MinStack {
  constructor() {
    this.dataStack = new Stack(); // Stack utama
    this.minStack = new Stack();  // Stack minimum
  }

  // O(1)
  push(value) {
    this.dataStack.push(value);

    if (
      this.minStack.isEmpty() ||
      value <= this.minStack.peek()
    ) {
      this.minStack.push(value);
    }
  }

  // O(1)
  pop() {
    if (this.dataStack.isEmpty()) return null;

    const removed = this.dataStack.pop();

    if (removed === this.minStack.peek()) {
      this.minStack.pop();
    }

    return removed;
  }

  // O(1)
  peek() {
    return this.dataStack.peek();
  }

  // O(1)
  getMin() {
    return this.minStack.peek();
  }

  // O(1)
  isEmpty() {
    return this.dataStack.isEmpty();
  }
}

// =====================================
// Pengujian Sesuai Soal
// =====================================

const ms = new MinStack();

console.log("Push 5");
ms.push(5);

console.log("Push 3");
ms.push(3);

console.log("Push 7");
ms.push(7);

console.log("Push 2");
ms.push(2);

console.log("getMin() =", ms.getMin()); // 2

console.log("pop() =", ms.pop()); // 2
console.log("getMin() =", ms.getMin()); // 3

console.log("pop() =", ms.pop()); // 7
console.log("getMin() =", ms.getMin()); // 3