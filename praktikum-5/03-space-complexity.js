function jumlahArray(arr) {
    let total = 0;           //hanya 1 variabel tambahan 
    for (const x of arr) total += x;
    return total;
}

function duplikasiArray(arr) {
    const baru = [];            
    for (const x of arr) baru.push(x * 2);  
    return baru;  
}

function faktorialRekursif(n) {  
    if (n <= 1) return 1;  
    return n * faktorialRekursif(n - 1); 
}

function faktorialIteratif(n) {  
    let hasil = 1;  
    for (let i = 2; i <= n; i++) hasil *= i; 
    return hasil;  
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  

console.log('Jumlah array   :', jumlahArray(arr));          
console.log('Duplikasi array:', duplikasiArray(arr));        
console.log('Faktorial 10 rekursif :', faktorialRekursif(10));  
console.log('Faktorial 10 iteratif :', faktorialIteratif(10));  


function hitungUnik(arr) {  
    const seen = new Set(); 
    for (const x of arr) seen.add(x);  
    return seen.size;  
}

const dataAcak = [1,2,3,2,1,4,5,3,6,4,7];  
console.log('Elemen unik:', hitungUnik(dataAcak)); // 7 