function interLambat(a, b){ 
    let hasil = [];

for(let i=0; i<a.length; i++){ 
    for(let j=0; j<b.length; j++){ 
        if(a[i] == b[j]){
            hasil.push(a[i]);
        }
    }
}

return hasil;
}

function interCepat(a, b){ 
    let hasil = [];
 
let set = new Set(a);

for(let i=0; i<b.length; i++){ 
    if(set.has(b[i])){
hasil.push(b[i]);
}
}

return hasil;
}



function anagram(arr){ 
    let obj = {};

for(let i=0; i<arr.length; i++){ 
    let kata = arr[i];
let key = kata.split('').sort().join('');

if(obj[key]){ 
    obj[key].push(kata);
} else {
    obj[key] = [kata];
}
}

return Object.values(obj);
}

function tripletLambat(arr){ 
    for(let i=0;i<arr.length;i++){ 
        for(let j=0;j<arr.length;j++){
for(let k=0;k<arr.length;k++){
if(arr[i]*arr[i] + arr[j]*arr[j] == arr[k]*arr[k]){ 
    return true;
    }
  }
m}
}
return false;
}
 
function tripletCepat(arr){ 
    arr.sort((a,b)=>a-b);

for(let i=arr.length-1;i>=0;i--){ 
    let kiri = 0;
let kanan = i-1;

while(kiri < kanan){
let jumlah = arr[kiri]*arr[kiri] + arr[kanan]*arr[kanan]; let target = arr[i]*arr[i];

if(jumlah == target){ return true;
} else if(jumlah < target){ kiri++;
} else { kanan--;
}
}
}

return false;
}

console.log ("=== hasil ==="); let a = [1,2,3,4];
let b = [3,4,5];

console.log("Inter lambat:", interLambat(a,b)); console.log("Inter cepat:", interCepat(a,b));

let kata = ["eat","tea","tan","ate","nat","bat"]; console.log("Anagram:", anagram(kata));

let angka = [3,4,5];
console.log("Triplet lambat:", tripletLambat(angka)); console.log("Triplet cepat:", tripletCepat(angka));
