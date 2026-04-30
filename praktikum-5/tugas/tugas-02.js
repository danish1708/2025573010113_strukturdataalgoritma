function f1(n){ 
    return n + 1;
}

function f2(n){ 
    let total = 0;
for(let i=0; i<n; i++){ 
    total += i;
}
return total;
}

function f3(n){ 
    let count = 0;

for(let i=0; i<n; i++){ 
    for(let j=1; j<n; j*=2){ 
    count++;
}
}

return count;
}

function f4(n){ 
    let count = 0;

for(let i=0; i<n; i++){ 
    for(let j=0; j<n; j++){ 
        count++;
}
}

return count;
}

function ukur(fn, n){
let mulai = Date.now(); fn(n);
let selesai = Date.now(); return selesai - mulai;
 
}

function benchmarkSemua(ukuranData){ 
    for(let i=0; i<ukuranData.length; i++){ 
        let n = ukuranData[i];

console.log("\nData:", n); console.log("O(1):", ukur(f1, n), "ms");
console.log("O(n):", ukur(f2, n), "ms");
console.log("O(n log n):", ukur(f3, n), "ms");
console.log("O(n^2):", ukur(f4, n), "ms");
}
}

benchmarkSemua([100, 500, 1000, 5000, 10000]); 