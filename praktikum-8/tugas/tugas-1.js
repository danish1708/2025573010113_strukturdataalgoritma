// tugas-1.js

const DELETED = Symbol("DELETED");

class HashMapLinearProbing {
  constructor(kapasitas = 11) {
    this.kapasitas = kapasitas;
    this.tabel = new Array(kapasitas);
    this.ukuran = 0;
  }

  // Hash Function
  _hash(key) {
    let hash = 0;
    const PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      hash = (hash * PRIME + key.charCodeAt(i)) % this.kapasitas;
    }

    return hash;
  }

  // Load Factor
  loadFactor() {
    return this.ukuran / this.kapasitas;
  }

  // Resize otomatis
  _resize() {
    const dataLama = [];

    for (const slot of this.tabel) {
      if (slot && slot !== DELETED) {
        dataLama.push(slot);
      }
    }

    this.kapasitas *= 2;
    this.tabel = new Array(this.kapasitas);
    this.ukuran = 0;

    for (const [key, value] of dataLama) {
      this.set(key, value);
    }

    console.log(`Resize -> kapasitas baru: ${this.kapasitas}`);
  }

  // Insert / Update
  set(key, value) {

    if (this.loadFactor() > 0.7) {
      this._resize();
    }

    let idx = this._hash(key);

    while (
      this.tabel[idx] &&
      this.tabel[idx] !== DELETED
    ) {
      if (this.tabel[idx][0] === key) {
        this.tabel[idx][1] = value;
        return;
      }

      idx = (idx + 1) % this.kapasitas;
    }

    this.tabel[idx] = [key, value];
    this.ukuran++;
  }

  // Search
  get(key) {
    let idx = this._hash(key);
    let start = idx;

    while (this.tabel[idx] !== undefined) {

      if (
        this.tabel[idx] !== DELETED &&
        this.tabel[idx][0] === key
      ) {
        return this.tabel[idx][1];
      }

      idx = (idx + 1) % this.kapasitas;

      if (idx === start) break;
    }

    return undefined;
  }

  // Delete dengan Tombstone
  delete(key) {
    let idx = this._hash(key);
    let start = idx;

    while (this.tabel[idx] !== undefined) {

      if (
        this.tabel[idx] !== DELETED &&
        this.tabel[idx][0] === key
      ) {
        this.tabel[idx] = DELETED;
        this.ukuran--;
        return true;
      }

      idx = (idx + 1) % this.kapasitas;

      if (idx === start) break;
    }

    return false;
  }

  has(key) {
    return this.get(key) !== undefined;
  }

  keys() {
    const result = [];

    for (const slot of this.tabel) {
      if (slot && slot !== DELETED) {
        result.push(slot[0]);
      }
    }

    return result;
  }

  values() {
    const result = [];

    for (const slot of this.tabel) {
      if (slot && slot !== DELETED) {
        result.push(slot[1]);
      }
    }

    return result;
  }

  infoDistribusi() {
    let terisi = 0;

    for (const slot of this.tabel) {
      if (slot && slot !== DELETED) {
        terisi++;
      }
    }

    console.log("\n=== Informasi Hash Table ===");
    console.log("Kapasitas :", this.kapasitas);
    console.log("Ukuran    :", this.ukuran);
    console.log(
      "LoadFactor:",
      this.loadFactor().toFixed(2)
    );
    console.log("Slot Terisi:", terisi);
  }

  printTable() {
    console.log("\n=== Isi Tabel ===");

    this.tabel.forEach((slot, index) => {

      if (slot === undefined) {
        console.log(`${index}: kosong`);
      } else if (slot === DELETED) {
        console.log(`${index}: <deleted>`);
      } else {
        console.log(
          `${index}: ${slot[0]} => ${slot[1]}`
        );
      }

    });
  }
}

// Demo Program

const map = new HashMapLinearProbing();

map.set("javascript", 1);
map.set("python", 2);
map.set("java", 3);
map.set("c++", 4);
map.set("rust", 5);
map.set("go", 6);
map.set("typescript", 7);
map.set("php", 8);
map.set("swift", 9);

console.log("get(java):", map.get("java"));
console.log("get(kotlin):", map.get("kotlin"));

console.log("has(python):", map.has("python"));

map.delete("java");

console.log(
  "Setelah delete java:",
  map.has("java")
);

console.log("Keys:", map.keys());

map.infoDistribusi();

map.printTable();