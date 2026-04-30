//01-function-dasar.js
function sapa() {
    console.log('Halo! Selamat datang di praktikum JavaScript.');
}
sapa();
sapa();

function sapaNama(nama) {
    console.log(`Halo, ${nama}! Selamat belajar.`);
}
sapaNama('Budi');
sapaNama('Siti');

function tambah(angka1, angka2) {
    const hasil = angka1 + angka2;
    return hasil;
}

const hasilPenjumlahan = tambah(10, 25);
console.log('10 + 25 =', hasilPenjumlahan);
console.log('7 + 13 =', tambah(7, 13));

function hitung(nilai, pengali = 2) {
    return nilai * pengali;
}
console.log(hitung(5));
console.log(hitung(5, 3));

const pesanGlobal = 'Saya ada di mana saja';

function cekScope() {
    const pesanLokal = 'Saya hanya ada di dalam function ini';
    console.log(pesanGlobal);
    console.log(pesanLokal);
}

cekScope();
console.log(pesanGlobal);



//1.Function kurang
function kurang(a,b) {
    return a - b;
}

//2.Function kali
function kali(a,b) {
    return a * b;
}

//3.Function bagi(dengan pengecekan nol)
function bagi(a,b) {
    if(b===0) {
        console.log('Error:tidak bisa membagi dengan nol');
        return null;
    }
    return a/b;
}

//4.Function Kalkulator
function kalkulator(a,operator,b) {
    switch(operator) {
        case'+':
          return a + b;
        case'-':
          return kurang(a,b);
        case'*':
          return kali(a,b);
        case'/':
          return bagi(a,b);
          default:
            console.log('Operasi tidak dikenali');
            return null;      
    }
}

//5.Pengujian
console.log('\n=== TEST KALKULATOR ===');

console.log('10 + 2 =', kalkulator(10,'+',2));
console.log('10 - 2 =', kalkulator(10,'-',2));
console.log('10 * 2 =', kalkulator(10,'*',2));
console.log('10 / 2 =', kalkulator(10,'/',2));
console.log('10 + 0 =', kalkulator(10,'/',0)); //test errorv