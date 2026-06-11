// 02-aplikasi-hash.js — Aplikasi HashMap

//1. Frequency Counter

function frekuensi(arr) {
  const map = new Map();

  for (const x of arr) {
    map.set(x, (map.get(x) || 0) + 1);
  }

  return map;
}

// Anagram Check O(n)
function adalahAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;

  const freq = {};

  for (const c of s1) {
    freq[c] = (freq[c] || 0) + 1;
  }

  for (const c of s2) {
    if (!freq[c]) return false;
    freq[c]--;
  }

  return true;
}

//2. Two Sum 

function twoSum(arr, target) {
  const seen = new Map(); // nilai -> indeks

  for (let i = 0; i < arr.length; i++) {
    const komplemen = target - arr[i];

    if (seen.has(komplemen)) {
      return [seen.get(komplemen), i];
    }

    seen.set(arr[i], i);
  }

  return null;
}

//3. Group Anagram 

function groupAnagram(kata) {
  const map = new Map();

  for (const word of kata) {
    const key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }

  return [...map.values()];
}

// 4. Longest Consecutive Sequence 

function longestConsecutive(arr) {
  const set = new Set(arr);

  let maks = 0;

  for (const x of set) {
    // awal sequence
    if (!set.has(x - 1)) {
      let current = x;
      let panjang = 1;

      while (set.has(current + 1)) {
        current++;
        panjang++;
      }

      maks = Math.max(maks, panjang);
    }
  }

  return maks;
}

// DEMO PROGRAM

console.log("=== Frequency Counter ===");

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const freq = frekuensi(arr);

freq.forEach((v, k) => {
  console.log(`${k}: ${v}x`);
});

console.log("\n=== Anagram Check ===");

console.log(
  "(listen, silent):",
  adalahAnagram("listen", "silent")
);

console.log(
  "(hello, world):",
  adalahAnagram("hello", "world")
);

console.log("\n=== Two Sum ===");

console.log(
  "[2,7,11,15], target=9:",
  twoSum([2, 7, 11, 15], 9)
);

console.log(
  "[3,2,4], target=6:",
  twoSum([3, 2, 4], 6)
);

console.log("\n=== Group Anagram ===");

console.log(
  groupAnagram([
    "eat",
    "tea",
    "tan",
    "ate",
    "nat",
    "bat"
  ])
);

console.log("\n=== Longest Consecutive Sequence ===");

console.log(
  "[100,4,200,1,3,2] →",
  longestConsecutive([100, 4, 200, 1, 3, 2])
);