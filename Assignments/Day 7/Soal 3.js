/*
Buat function untuk menghitung luas:
    Persegi Panjang (gunakan Function Declaration)
    Segitiga Siku-Siku (gunakan Function Expression)
    Ketupat (gunakan Arrow Function)
    Lingkaran (boleh dengan gaya function bebas)
Semua function harus menerima parameter dinamis.
*/

//Luas Persegi Panjang
function luasPersegiPanjang(panjang = 0, lebar = 0) {
    return panjang * lebar;
}
console.log("Luas persegi panjang: ", luasPersegiPanjang(10,5));

//Luas Segitiga Siku-siku
const luasSegitigaSikuSiku = function (alas = 0, tinggi = 0) {
    return (alas * tinggi) / 2;
}
console.log("Luas Segitiga Siku-Siku: ", luasSegitigaSikuSiku (8, 5));

//Luas Ketupat
const luasKetupat = (a = 0,b = 0) => {
    return 0.5 * (a * b);
}
console.log("Luas Ketupat: ", luasKetupat(12,4));

//Luas Lingkaran
const luasLingkaran = (r = 0) =>{
    phi = 3.14;
    return phi * r * r;
}
console.log("Luas Lingkaran: ", luasLingkaran (8));

