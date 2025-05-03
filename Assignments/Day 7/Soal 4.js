/*
Buat function yang menerima parameter array.
Kembalikan array baru berisi hanya bilangan genap dari input array.
Jumlah elemen array input minimal 8.
*/
let number = [90,6,73,92,57,9,88,2];
let newArray = [];
const filterGenap = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push (array[i]);
        }
    }
}
filterGenap(number);
console.log(newArray);
