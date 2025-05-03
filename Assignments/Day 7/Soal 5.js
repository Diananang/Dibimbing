/*
Buat array berisi 8 angka antara 1–100.
Gunakan method _.remove dari Lodash untuk:
    Menghapus bilangan genap.
    Menghapus bilangan < 50 ATAU > 100.
*/

import _ from "lodash";

let array = [27, 89, 14, 63, 50, 76, 5, 98];
console.log(`Angka awal: ${array}`);

let oddNum = _.clone(array);
_.remove(oddNum, (n) => n % 2 === 0);
console.log(`Angka ganjil: ${oddNum}`);

let rangeNum = _.clone(array);
_.remove(rangeNum, (m) => m < 50 || m > 100);
console.log(`Angka < 50 atau angka > 100: ${rangeNum}`);
