// tugas-2.js


function subArrayJumlahK(arr, k) {
  const prefixMap = new Map();

  prefixMap.set(0, 1);

  let prefixSum = 0;
  let jumlah = 0;

  for (const num of arr) {
    prefixSum += num;

    if (prefixMap.has(prefixSum - k)) {
      jumlah += prefixMap.get(prefixSum - k);
    }

    prefixMap.set(
      prefixSum,
      (prefixMap.get(prefixSum) || 0) + 1
    );
  }

  return jumlah;
}
// 2. Karakter Pertama Unik

function karakterPertamaUnik(s) {
  const freq = new Map();

  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

// 3. Top K Frequent Elements

function topKFrequent(arr, k) {
  const freq = new Map();

  for (const num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([angka]) => angka);
}
// DEMO PROGRAM

console.log("=== Subarray Sum Equals K ===");

console.log(
  "[1,1,1], k=2 =>",
  subArrayJumlahK([1, 1, 1], 2)
);

console.log(
  "[1,2,3], k=3 =>",
  subArrayJumlahK([1, 2, 3], 3)
);

console.log("\n=== Karakter Pertama Unik ===");

console.log(
  "'leetcode' =>",
  karakterPertamaUnik("leetcode")
);

console.log(
  "'loveleetcode' =>",
  karakterPertamaUnik("loveleetcode")
);

console.log(
  "'aabb' =>",
  karakterPertamaUnik("aabb")
);

console.log("\n=== Top K Frequent Elements ===");

console.log(
  "[1,1,1,2,2,3], k=2 =>",
  topKFrequent([1, 1, 1, 2, 2, 3], 2)
);

console.log(
  "[4,4,4,6,6,1,1,1,1], k=2 =>",
  topKFrequent([4, 4, 4, 6, 6, 1, 1, 1, 1], 2)
);