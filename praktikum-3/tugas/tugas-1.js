// data mahasiswa
const dataMahasiswa = [
    { nama: 'Budi', nilai: 80 },
    { nama: 'Siti', nilai: 90 },
    { nama: 'Andi', nilai: 70 },
    { nama: 'Rina', nilai: 60 },
    { nama: 'Doni', nilai: 50 },
    { nama: 'Lina', nilai: 85 }
];

// function hitung statistik (reduce)
function hitungStatistik(arrMahasiswa) {
    const hasil = arrMahasiswa.reduce((acc, mhs) => {
        acc.total++;
        acc.jumlahNilai += mhs.nilai;
        acc.tertinggi = Math.max(acc.tertinggi, mhs.nilai);
        acc.terendah = Math.min(acc.terendah, mhs.nilai);
        return acc;
    }, {
        total: 0,
        jumlahNilai: 0,
        tertinggi: -Infinity,
        terendah: Infinity
    });

    return {
        total: hasil.total,
        rataRata: hasil.jumlahNilai / hasil.total,
        tertinggi: hasil.tertinggi,
        terendah: hasil.terendah
    };
}

// filter lulus
function filterLulus(arrMahasiswa, batasLulus) {
    return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

// tambah grade (map)
function tambahGrade(arrMahasiswa) {
    return arrMahasiswa.map(mhs => {
        let grade;
        if (mhs.nilai >= 90) grade = 'A';
        else if (mhs.nilai >= 80) grade = 'B';
        else if (mhs.nilai >= 70) grade = 'C';
        else if (mhs.nilai >= 60) grade = 'D';
        else grade = 'E';

        return { ...mhs, grade };
    });
}

// tampilkan hasil
const statistik = hitungStatistik(dataMahasiswa);
const lulus = filterLulus(dataMahasiswa, 60);
const denganGrade = tambahGrade(dataMahasiswa);

console.log('=== Statistik ===');
console.log(statistik);

console.log('\n=== Mahasiswa Lulus ===');
lulus.forEach(mhs => {
    console.log(`${mhs.nama} - ${mhs.nilai}`);
});

console.log('\n=== Data + Grade ===');
denganGrade.forEach(mhs => {
    console.log(`${mhs.nama} - ${mhs.nilai} (${mhs.grade})`);
});