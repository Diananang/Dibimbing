/**
 * Variable Definition and Primitive Data Type
 *
 * Buatlah data seorang student dengan kriteria berikut
 * a. nama student tersebut yaitu Budi Santoso
 * b. usia student tersebut yaitu 24 tahun
 * c. email student tersebut adalah budi_santoso21@gmail.com
 * d. status aktif student tersebut bernilai true
 *
 * Tampilkan data student tersebut menggunakan console.log()
 * - Gunakan metode biasa untuk console.log()
 * - Gunakan metode template literal string
 *
 * Format print --> Selamat Pagi Semuanya, perkenalkan nama saya {{nama}}, saya seorang student dengan
 * usia {{usia}} tahun. Jika ada yang ingin mengontak saya bisa melalui email saya {{email}}.
 */


const nama = 'Budi Santoso';
const usia = 24;
const email = 'budi_santoso21@gmail.com';
const isAktif = true;

// Metode Biasa
console.log('Selamat Pagi Semuanya, Perkenalkan nama saya '+ nama,
    ', saya seorang student dengan '+ usia,
    'tahun. Jika ada yang ingin mengontak saya bisa melalui email saya '+ email,
    '.');

//Metode Literal
console.log(`Selamat Pagi Semuanya, Perkenalkan nama saya ${nama}, saya seorang student dengan ${usia} tahun. Jika ada yang ingin mengontak saya bisa melalui email saya ${email}.`);
