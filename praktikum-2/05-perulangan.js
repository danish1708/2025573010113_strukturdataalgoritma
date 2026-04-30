// Struktur: for (inisialisasi; kondisi; update)
console.log('=== For Loop: Hitung 1 sampai 5 ===');
for (let i = 1; i <= 5; i++) {
    console.log(`Iterasi ke-${i}`);
}

console.log('\n=== While Loop: Countdown ===');
let hitung = 5;
while (hitung > 0) {
    console.log(`Hitung mundur: ${hitung}`);
    hitung--;
}
console.log('Selesai!');

console.log('\n=== Bilangan Genap antara 1 - 20 ===');
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) { // jika i habis dibagi 2 (sisa = 0), maka genap
    process.stdout.write(i + ' '); // cetak di baris yang sama
    }
}

console.log(''); // pindah baris

console.log('\n=== Break dan Continue ===');
for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        console.log(`Melewati angka ${i} (continue)`);
        continue; // lewati angka 4, lanjut ke i=5
}
if (i === 8) {
    console.log(`Berhenti di angka ${i} (break)`);
    break; // hentikan loop di angka 8
}
   console.log(`Angka: ${i}`);
}

//latihan

console.log("=== Segitiga Bintang ===");

for (let i = 1; i <= 5; i++) {
  let baris = '';
  for (let j = 1; j <= i; j++) {
    baris += '*';
  }
  console.log(baris);
}

console.log("\n=== Bilangan Prima 1 - 50 ===");

for (let i = 2; i <= 50; i++) {
  let prima = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      prima = false;
      break;
    }
  }
   if (prima) {
    console.log(i);
  }
}

console.log('');