/**
 * Looping
 * 1. Lakukan looping pada string, untuk melihat apakah
 *  - Terdapat karakter huruf A pada string tersebut dan berapa kali muncul.
 *  - Menghitung berapa banyak huruf vokal pada string tersebut kemunculannya.
 *  - Menghitung apakah string tersebut mengandung lebih dari 7 karakter huruf (membuat username / password)
 *
 * 2. Lakukan looping pada suatu string untuk membuat password. Kriterianya sebagai berikut
 *  - Terdapat karakter huruf minimal 7.
 *  - Terdapat huruf alphabet (upper dan lower case)
 *  - Terdapat angka pada string tersebut (0 - 9). Buat pengecekan dengan boolean statement
 *
 * 3. Looping pada range of number, lalu menentukan bilangan ganjil dan bilangan genap dari angka 1-30
 */

// 1. Looping String
const kalimat = 'Mati Lampu';
let counterHurufA = 0;
let counterHurufVokal = 0;
let counterBanyakHuruf = 0;

for (let i = 0; i < kalimat.length; i ++){
    const lowerCase = kalimat[i].toLowerCase();
    if(lowerCase === 'a'){
        counterHurufA ++;
    }

    const isHurufVokal = 
        lowerCase === 'a'|| 
        lowerCase === 'i'||
        lowerCase === 'u'||
        lowerCase === 'e'||
        lowerCase === 'o';
    
    if (isHurufVokal){
        counterHurufVokal++;
    }

    if (kalimat.length >= 7){
        counterBanyakHuruf++;
    }
}
console.log("=========Soal Nomor 1=========");
console.log(`Kalimatnya adalah "${kalimat}"`);
console.log(`Kemunculan huruf a sebanyak ${counterHurufA}`);
console.log(`Banyak huruf vokal pada kalimat tersebut adalah ${counterHurufVokal}`);
console.log(`Banyak karakter dari kalimat tersebut adalah ${counterBanyakHuruf}`);

//2. Looping password
console.log("\n=========Soal Nomor 2=========");

const nama = 'Dibimbing123';
let jumlahKarakter = 0;
let angka = 0;

for (let i = 0; i < nama.length; i++){
    jumlahKarakter++;
}
console.log(`Jumlah karakter pada kalimat adalah ${jumlahKarakter}`);

if (jumlahKarakter >= 7){
    console.log(`Akun dengan nama "${nama}" berhasil dibuat`);
} else{
    console.log(`Akun dengan nama "${nama}" gagal dibuat. Cek kembali jumlah karakternya.`);
}

//3. Looping pada number 1-30
console.log("\n=========Soal Nomor 3=========");

for (let i = 1; i <= 30; i++){
    const isGenap = i % 2 === 0;

    if (isGenap){
        console.log(`Nilai ${i} merupakan bilangan genap`);
    }else{
        console.log(`Nilai ${i} merupakan bilangan ganjil`);
    }
}
