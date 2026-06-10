class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

class LinkedList {

    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(data) {

        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

    }

    removeHead() {

        if (!this.head) return null;

        const value = this.head.data;

        this.head = this.head.next;

        this.length--;

        return value;

    }

    peek() {

        if (!this.head) return null;

        return this.head.data;

    }

}

class Stack {

    constructor() {

        this.list = new LinkedList();

    }

    push(data) {

        this.list.prepend(data);

    }

    pop() {

        return this.list.removeHead();

    }

    peek() {

        return this.list.peek();

    }

    isEmpty() {

        return this.list.length === 0;

    }

    size() {

        return this.list.length;

    }

    print() {

        let current = this.list.head;

        let hasil = "";

        while (current) {

            hasil += `[${current.data}] -> `;

            current = current.next;

        }

        console.log(hasil + "null");

    }

}

// Simulasi undo / redo

const aksi = new Stack();

aksi.push("Ketik A");
aksi.push("Ketik B");
aksi.push("Hapus B");
aksi.push("Ketik C");

console.log("Isi Stack:");
aksi.print();

console.log("\nUndo:");
console.log(aksi.pop());

console.log("\nUndo:");
console.log(aksi.pop());

console.log("\nSisa Stack:");
aksi.print();

console.log("\nPeek:");
console.log(aksi.peek());

console.log("\nSize:");
console.log(aksi.size());