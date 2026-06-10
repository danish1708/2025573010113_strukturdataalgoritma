// 01-linked-list.js

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // TUGAS LATIHAN 1
    getAt(index) {
        if (index < 0 || index >= this.size || this.head === null) {
            return null;
        }

        let current = this.head;
        let count = 0;
        while (current !== null) {
            if (count === index) {
                return current.data;
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // 2. deleteAt(index) - Big O: O(n)
    deleteAt(index) {
        if (index < 0 || index >= this.size || this.head === null) {
            return null;
        }

        let current = this.head;
        
        if (index === 0) {
            this.head = current.next;
        } else {
            let previous = null;
            let count = 0;

            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            previous.next = current.next;
        }

        this.size--;
        return current.data;
    }

    // 3. indexOf(data) - Mengembalikan indeks atau -1
    indexOf(data) {
        let current = this.head;
        let index = 0;

        while (current !== null) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    // 4. isEmpty() - true jika kosong
    isEmpty() {
        return this.head === null; 
    }

    // 5. clear() - hapus semua node
    clear() {
        this.head = null;
        this.size = 0;
    }

    // Method pembantu untuk cetak list (opsional)
    printList() {
        let current = this.head;
        let result = [];
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}



// UJI COBA LATIHAN 1
console.log("--- UJI COBA LATIHAN 1 ---");
const list = new LinkedList();

console.log("Apakah list kosong?", list.isEmpty()); 

list.prepend("C");
list.prepend("B");
list.prepend("A");
list.printList(); 

console.log("Apakah list kosong?", list.isEmpty()); 
console.log("Data di indeks 1:", list.getAt(1)); 
console.log("Data di indeks 5 (invalid):", list.getAt(5)); 

console.log("Indeks dari 'C':", list.indexOf("C")); 
console.log("Indeks dari 'Z':", list.indexOf("Z")); 

console.log("Hapus data di indeks 1 (B):", list.deleteAt(1)); 
list.printList(); 

list.clear();
console.log("Setelah clear, apakah kosong?", list.isEmpty()); 