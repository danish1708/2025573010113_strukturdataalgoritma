// =================================================================
// 1. DEFINISI NODE & LINKED LIST (Diperlukan sebagai Storage Stack)
// =================================================================
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

    // Methodprepend untuk menambah di depan (head) -> Big O: O(1)
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Method deleteAt untuk menghapus indeks tertentu
    // Jika indeks 0 (hapus head) -> Big O: O(1)
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

    // Method getAt untuk mengambil data pada indeks tertentu
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

    isEmpty() {
        return this.head === null;
    }

    printList() {
        if (this.isEmpty()) {
            console.log("(Stack Kosong)");
            return;
        }
        let current = this.head;
        let result = [];
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}


// =================================================================
// 2. IMPLEMENTASI CLASS STACK (Menggunakan Komposisi dari LinkedList)
// =================================================================
class Stack {
    constructor() {
        // Komposisi: membuat storage internal menggunakan objek LinkedList
        this.storage = new LinkedList();
    }

    // push(data) -> Operasi O(1) memanfaatkanprepend
    push(data) {
        this.storage.prepend(data);
    }

    // pop() -> Operasi O(1) menghapus data di posisi head (indeks 0)
    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow (Kosong)";
        }
        return this.storage.deleteAt(0);
    }

    // peek() -> Melihat data teratas (head) tanpa menghapusnya
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.storage.getAt(0);
    }

    // isEmpty() -> Mengecek apakah stack kosong
    isEmpty() {
        return this.storage.isEmpty();
    }

    // size() -> Mengembalikan jumlah element di stack
    size() {
        return this.storage.size;
    }

    // print() -> Menampilkan isi stack
    print() {
        this.storage.printList();
    }
}


// =================================================================
// 3. DEMONSTRASI SIMULASI UNDO/REDO (Sesuai Soal Poin 5)
// =================================================================
console.log("--- SIMULASI UNDO / REDO (LATIHAN 2) ---");

const undoStack = new Stack();

// Array aksi tiruan user
const daftarAksi = [
    "Ketik kata 'Halo'",
    "Buka foto pemandangan",
    "Tambahkan filter vintage",
    "Ubah ukuran gambar ke 1080p"
];

console.log("\n... User melakukan beberapa aktivitas/action ...");
daftarAksi.forEach(aksi => {
    console.log(`[Action Baru]: ${aksi}`);
    undoStack.push(aksi); // Memasukkan aksi ke dalam stack
});

console.log("\nKondisi Stack saat ini (Paling kiri/atas adalah aksi terbaru):");
undoStack.print(); 
console.log("Total aksi tersimpan di stack:", undoStack.size());
console.log("Aksi aktif saat ini (Peek):", undoStack.peek());

console.log("\n... User menekan tombol UNDO 2 kali ...");
console.log("-> Undo sukses, membatalkan:", undoStack.pop()); 
console.log("-> Undo sukses, membatalkan:", undoStack.pop()); 

console.log("\nKondisi Stack setelah dilakukan 2x Undo:");
undoStack.print();
console.log("Aksi aktif sekarang setelah undo:", undoStack.peek());