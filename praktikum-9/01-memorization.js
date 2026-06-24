// 01-memoization.js

function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) return cache.get(key);

        const hasil = fn.apply(this, args);
        cache.set(key, hasil);
        return hasil;
    };
}

// Fibonacci
function fibNaif(n) {
    if (n <= 1) return n;
    return fibNaif(n - 1) + fibNaif(n - 2);
}

const fibMemo = memoize(function (n) {
    if (n <= 1) return n;
    return fibMemo(n - 1) + fibMemo(n - 2);
});

function fibIteratif(n) {
    if (n <= 1) return n;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }

    return b;
}

console.log("=== Fibonacci Benchmark ===");

let t = Date.now();
fibNaif(38);
console.log("Naif O(2ⁿ):", Date.now() - t, "ms");

t = Date.now();
fibMemo(38);
console.log("Memo O(n):", Date.now() - t, "ms");

t = Date.now();
fibIteratif(38);
console.log("Iteratif O(n):", Date.now() - t, "ms");

console.log("Hasil fib(38):", fibIteratif(38));

// Coin Change
const coinChangeMemo = memoize(function (jumlah, koin) {
    if (jumlah === 0) return 0;
    if (jumlah < 0) return Infinity;

    let min = Infinity;

    for (const k of koin) {
        const sub = coinChangeMemo(jumlah - k, koin);
        if (sub + 1 < min) min = sub + 1;
    }

    return min;
});

console.log("\n=== Coin Change ===");

const koin = [1, 5, 10, 25];

console.log("41 sen =", coinChangeMemo(41, koin));
console.log("30 sen =", coinChangeMemo(30, koin));
console.log("11 sen =", coinChangeMemo(11, koin));

// LCS
const lcsMemo = memoize(function (s1, s2, i = s1.length - 1, j = s2.length - 1) {
    if (i < 0 || j < 0) return 0;

    if (s1[i] === s2[j])
        return 1 + lcsMemo(s1, s2, i - 1, j - 1);

    return Math.max(
        lcsMemo(s1, s2, i - 1, j),
        lcsMemo(s1, s2, i, j - 1)
    );
});

console.log("\n=== Longest Common Subsequence ===");
console.log(lcsMemo("ABCBDAB", "BDCAB"));
console.log(lcsMemo("AGGTAB", "GXTXAYB"));