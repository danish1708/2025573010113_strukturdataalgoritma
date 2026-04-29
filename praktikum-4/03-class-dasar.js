class Mahasiswa {
    constructor(nama, nim, jurusan) {
        this.nama    = nama;
        this.nim     = nim;
        this.jurusan = jurusan;
        this.nilai   = [];
    }

    tambahNilai(nilai) {
        this.nilai.push(nilai);
    }

    hitungRataRata() {
        if (this.nilai.length === 0) return 0;
        const total = this.nilai.reduce((sum, n) => sum + n, 0);
        return (total / this.nilai.length).toFixed(2);
    }

    getInfo() {
        return `[${this.nim}] ${this.nama} - ${this.jurusan} | IPK: ${this.hitungRataRata()}`;
    }
}

const mhs1 = new Mahasiswa('Budi Santoso', '2021001', 'Informatika');
const mhs2 = new Mahasiswa('Siti Rahayu', '2021002', 'Sistem Informasi');
const mhs3 = new Mahasiswa('Ahmad Fauzi', '2021003', 'Informatika');

mhs1.tambahNilai(85); mhs1.tambahNilai(90); mhs1.tambahNilai(78);
mhs2.tambahNilai(92); mhs2.tambahNilai(88); mhs2.tambahNilai(95);
mhs3.tambahNilai(70); mhs3.tambahNilai(75);

console.log('=== Data Mahasiswa ===');
console.log(mhs1.getInfo());
console.log(mhs2.getInfo());
console.log(mhs3.getInfo());

// Static
class Kalkulator {
    static tambah(a, b) { return a + b; }
    static kurang(a, b) { return a - b; }
    static kali(a, b)   { return a * b; }
    static bagi(a, b) {
        if (b === 0) return 'Error: bagi nol';
        return a / b;
    }
}

console.log('\n=== Static Method ===');
console.log('10 + 5 =', Kalkulator.tambah(10, 5));

// Getter Setter
class Lingkaran {
    constructor(jariJari) {
        this._jariJari = jariJari;
    }

    get jariJari() { return this._jariJari; }
    get luas() { return (Math.PI * this._jariJari ** 2).toFixed(2); }
    get keliling() { return (2 * Math.PI * this._jariJari).toFixed(2); }

    set jariJari(nilai) {
        if (nilai <= 0) throw new Error('Jari-jari harus positif!');
        this._jariJari = nilai;
    }
}

console.log('\n=== Getter & Setter ===');
const l = new Lingkaran(7);
console.log('Luas:', l.luas);

// ================= LATIHAN 3 =================

console.log('\n=== LATIHAN 3 ===');

class BankAccount {
    constructor(namaPemilik, saldoAwal = 0) {
        this.namaPemilik = namaPemilik;
        this.saldo = saldoAwal;
    }

    setor(jumlah) {
        if (jumlah <= 0) {
            console.log('Jumlah tidak valid');
            return;
        }
        this.saldo += jumlah;
    }

    tarik(jumlah) {
        if (jumlah <= 0) {
            console.log('Jumlah tidak valid');
            return;
        }
        if (jumlah > this.saldo) {
            console.log('Saldo tidak mencukupi');
            return;
        }
        this.saldo -= jumlah;
    }

    cekSaldo() {
        console.log(`Pemilik: ${this.namaPemilik} | Saldo: Rp${this.saldo}`);
    }

    static transfer(akun1, akun2, jumlah) {
        if (jumlah > akun1.saldo) {
            console.log('Transfer gagal');
            return;
        }
        akun1.tarik(jumlah);
        akun2.setor(jumlah);
    }
}

// test
const akun1 = new BankAccount('Budi', 500000);
const akun2 = new BankAccount('Siti', 200000);

akun1.setor(100000);
akun1.tarik(200000);
akun1.cekSaldo();

BankAccount.transfer(akun1, akun2, 100000);

akun1.cekSaldo();
akun2.cekSaldo();