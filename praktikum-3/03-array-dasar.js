const mahasiswa = ['Budi', 'Siti', 'Ahmad', 'Rina'];
const nilai     = [85, 92, 78, 95, 88];

console.log('=== Array Awal ===');
console.log('Mahasiswa:', mahasiswa);
console.log('Nilai     :', nilai);
console.log('Jumlah mahasiswa:', mahasiswa.length);


console.log('\n=== Akses Elemen ===');
console.log('Elemen pertama :', mahasiswa[0]);          
console.log('Elemen ketiga  :', mahasiswa[2]);          
console.log('Elemen terakhir:', mahasiswa[mahasiswa.length - 1]);


mahasiswa[1] = 'Siti Rahayu';   
console.log('\nSetelah diubah:', mahasiswa);


console.log('\n=== Manipulasi Array ===');
mahasiswa.push('Doni');         
console.log('Setelah push     :', mahasiswa);

mahasiswa.unshift('Zahra');      
console.log('Setelah unshift  :', mahasiswa);

const dihapusAkhir = mahasiswa.pop();    
console.log('Dihapus (pop)    :', dihapusAkhir);
console.log('Setelah pop      :', mahasiswa);

const dihapusAwal = mahasiswa.shift();   
console.log('Dihapus (shift)  :', dihapusAwal);
console.log('Setelah shift    :', mahasiswa);


console.log('\n=== Pencarian ===');
console.log('Indeks Ahmad  :', mahasiswa.indexOf('Ahmad'));
console.log('Ada Rina?     :', mahasiswa.includes('Rina'));
console.log('Ada Budi?     :', mahasiswa.includes('Budi'));


const sebagian = nilai.slice(1, 4); 
console.log('\nNilai asli  :', nilai);
console.log('Slice [1,4] :', sebagian);



let daftarBelanja = ['Beras', 'Gula', 'Minyak', 'Telur'];

console.log('\n=== Array Awal ===');
console.log(daftarBelanja);


console.log('\n=== Akses Elemen ===');
console.log('Item pertama:', daftarBelanja[0]);
console.log('Item terakhir:', daftarBelanja[daftarBelanja.length - 1]);

console.log('\n=== Daftar Belanja ===');
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log(`${i + 1}. ${daftarBelanja[i]}`);
}

daftarBelanja.push('Susu');
daftarBelanja.push('Kopi');

console.log('\nSetelah push:');
console.log(daftarBelanja);

let itemHapus = daftarBelanja.shift();
console.log('\nItem dihapus:', itemHapus);
console.log('Setelah shift:', daftarBelanja);


console.log('\n=== Pengecekan ===');
console.log('Ada Susu?', daftarBelanja.includes('Susu'));

console.log('\nJumlah item:', daftarBelanja.length);