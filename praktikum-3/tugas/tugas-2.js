function pangkat (basis, eksponen) {
    if (eksponen === 0) return 1;
    return basis * pangkat(basis, eksponen -1);
}

function balikstring(str) {
    if (str.length <= 1) {
        return str;
    }
    return str[str.length - 1] + balikstring(str.slice(0, str.length - 1));
}

function cekpalindrom(str) {
    let hasil = balikstring(str);

    if (str === hasil) {
        return "palindrom";
    }else{
        return "Bukan palindrom";
    }
}

console.log("=== Pangkat ===");
console.log("2^4 =", pangkat(2, 4));
console.log("5^3 =", pangkat(5, 3));

console.log("\n=== Balik String ===");
console.log("halo ->", balikstring("halo"));
console.log("Danish ->", balikstring("Danish"));

console.log("\n=== Cek Palindrom ===");
console.log("katak ->", cekpalindrom("katak"));
console.log("civic ->", cekpalindrom("civic"));
console.log("halo ->", cekpalindrom("halo"));