const mahasiswa = {
    nama     : 'Budi Santoso',
    umur     : 20,
    jurusan  : 'Teknik Informatika',
    ipk      : 3.75,
    aktif    : true,
};

console.log('=== Akses Property ===');
console.log('Nama    :', mahasiswa.nama);
console.log('Jurusan :', mahasiswa['jurusan']);

const keyYangDicari = 'ipk';
console.log('IPK     :', mahasiswa[keyYangDicari]);

mahasiswa.email  = 'budi@email.com';
mahasiswa.umur   = 21;

console.log('\nSetelah diubah:', mahasiswa);

delete mahasiswa.aktif;
console.log('Setelah delete:', mahasiswa);

const dosen = {
    nama         : 'Dr. Ahmad Fauzi',
    mataKuliah   : 'Struktur Data',
    pengalaman   : 10,  // tahun

    perkenalan() {
        return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
    },

    statusSenior() {
        if (this.pengalaman >= 10) {
            return `${this.nama} adalah dosen senior.`;
        }
        return `${this.nama} adalah dosen junior.`;
    }
};

console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

// --- 6. Iterasi object ---
console.log('\n=== Iterasi Object ===');
for (const key in dosen) {
    if (typeof dosen[key] !== 'function') {
        console.log(`  ${key}: ${dosen[key]}`);
    }
}

// Object.keys(), Object.values(), Object.entries()
console.log('Keys  :', Object.keys(mahasiswa));
console.log('Values:', Object.values(mahasiswa));

// ================= LATIHAN 1 =================

// 1. Object buku
const buku = {
    judul: 'Belajar JavaScript',
    pengarang: 'Andi',
    tahunTerbit: 2023,
    harga: 100000,
    tersedia: true,

    info() {
        return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga}`;
    },

    diskon(persen) {
        return this.harga * (1 - persen / 100);
    }
};

console.log('\n=== LATIHAN 1 ===');
console.log(buku.info());
console.log('Harga setelah diskon 10%:', buku.diskon(10));

// 2. Array koleksi buku
const koleksiBuku = [
    {
        judul: 'JS Dasar',
        pengarang: 'Budi',
        tahunTerbit: 2020,
        harga: 80000,
        tersedia: true,
        info() {
            return `${this.judul} - Rp${this.harga}`;
        }
    },
    {
        judul: 'NodeJS',
        pengarang: 'Siti',
        tahunTerbit: 2021,
        harga: 120000,
        tersedia: false,
        info() {
            return `${this.judul} - Rp${this.harga}`;
        }
    },
    {
        judul: 'React',
        pengarang: 'Ahmad',
        tahunTerbit: 2022,
        harga: 150000,
        tersedia: true,
        info() {
            return `${this.judul} - Rp${this.harga}`;
        }
    }
];

// tampilkan semua buku
koleksiBuku.forEach(b => console.log(b.info()));

// filter buku tersedia
const bukuTersedia = koleksiBuku.filter(b => b.tersedia === true);
console.log('Buku tersedia:', bukuTersedia);