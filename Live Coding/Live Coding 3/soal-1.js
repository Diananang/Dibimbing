/**
 * Membuat object baru, dengan perubahan & penambahan property
 */

let siswa = {
  nama : "Arkan",
  umur : 22
}

// soal A : buat variabel newSiswa, ubah umur jadi 23 dan tambahkan pekerjaan programmer

let newSiswa = {
  ...siswa,
  umur: 23,
  pekerjaan: "programmer"
}

console.log(newSiswa); // output: { nama: 'Arkan', umur: 23, pekerjaan: 'programmer' }
console.log(siswa); // output: { nama: 'Arkan', umur: 22 } (note : tetap)

// soal B : extrak ke pekerjaan & sisanya (dari variable newSiswa)
//let extracted = "pekerjaan"; //jika input tidak diketahui propertinya
const {pekerjaan, ...sisanya} = newSiswa;

console.log("\n" + pekerjaan); // programmer
console.log(sisanya); // { nama: 'Arkan', umur: 23 }