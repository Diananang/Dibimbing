/**
 * Menggabungkan array
 */

let array2d = [[1,2,3],[4,5,6],[7,8,9]];

//pertama
const newArr = [];
for (let i = 0; i < array2d.length; i++) {
    newArray.push(...array2d[i]);
}

//kedua 
const newArray = array2d.reduce((acc, curr) => acc.concat(curr), []);

console.log("Cara Pertama: " + newArr); // output: [1,2,3,4,5,6,7,8,9]
console.log("Cara Kedua: " + newArray);
console.log(array2d); // output: [[1,2,3],[4,5,6],[7,8,9]] (tetap sama/tidak berubah)