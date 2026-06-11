// tugas-1.js
// Simulasi Sistem Antrian Rumah Sakit

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(data) {
    const node = new Node(data);

    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const data = this.head.data;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.size--;
    return data;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    let cur = this.head;
    const hasil = [];

    while (cur) {
      hasil.push(`${cur.data.nama} (${cur.data.prioritas})`);
      cur = cur.next;
    }

    return hasil.length > 0 ? hasil.join(" -> ") : "Kosong";
  }
}

// =====================================
// Class Pasien
// =====================================

class Pasien {
  constructor(id, nama, prioritas) {
    this.id = id;
    this.nama = nama;
    this.prioritas = prioritas; // darurat / biasa
    this.waktuDaftar = new Date().toLocaleTimeString();
  }
}

// =====================================
// Class Antrian Rumah Sakit
// =====================================

class AntrianRS {
  constructor() {
    this.antrianDarurat = new Queue();
    this.antrianBiasa = new Queue();
  }

  daftar(pasien) {
    if (pasien.prioritas === "darurat") {
      this.antrianDarurat.enqueue(pasien);
      console.log(
        `Pasien ${pasien.nama} masuk ke ANTRIAN DARURAT`
      );
    } else {
      this.antrianBiasa.enqueue(pasien);
      console.log(
        `Pasien ${pasien.nama} masuk ke ANTRIAN BIASA`
      );
    }
  }

  layani() {
    let pasien = null;

    if (!this.antrianDarurat.isEmpty()) {
      pasien = this.antrianDarurat.dequeue();
    } else if (!this.antrianBiasa.isEmpty()) {
      pasien = this.antrianBiasa.dequeue();
    }

    if (pasien) {
      console.log(
        `Melayani: ${pasien.nama} | Prioritas: ${pasien.prioritas} | Waktu Daftar: ${pasien.waktuDaftar}`
      );
    } else {
      console.log("Tidak ada pasien dalam antrian.");
    }
  }

  tampilkanAntrian() {
    console.log("\n===== STATUS ANTRIAN =====");

    console.log(
      "Darurat :",
      this.antrianDarurat.print()
    );

    console.log(
      "Biasa   :",
      this.antrianBiasa.print()
    );

    console.log("==========================\n");
  }
}

// =====================================
// Simulasi 10 Pasien
// =====================================

const rs = new AntrianRS();

const namaPasien = [
  "Andi",
  "Budi",
  "Citra",
  "Dina",
  "Eko",
  "Fajar",
  "Gina",
  "Hani",
  "Indra",
  "Joko"
];

for (let i = 0; i < 10; i++) {
  const prioritas =
    Math.random() < 0.3 ? "darurat" : "biasa";

  const pasien = new Pasien(
    i + 1,
    namaPasien[i],
    prioritas
  );

  rs.daftar(pasien);
}

rs.tampilkanAntrian();

console.log("=== PROSES PELAYANAN ===");

while (
  !rs.antrianDarurat.isEmpty() ||
  !rs.antrianBiasa.isEmpty()
) {
  rs.layani();
}

console.log("\nSemua pasien telah dilayani.");