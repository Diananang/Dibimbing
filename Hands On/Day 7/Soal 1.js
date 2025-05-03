/**
 * 1. Buatlah sebuah function untuk menampilkan FizzBuzz sebanyak N kali
 * - Jika angka habis dibagi 3 -> tampilkan "Fizz"
 * - Jika angka habis dibagi 5 -> tampilkan "Buzz"
 * - Jika angka habis dibagi 3 dan 5 -> tampilkan "FizzBuzz"
 * - Jika tidak habis dibagi 3 dan 5 -> tampilkan angka itu sendiri
 * - Tampilkan angka dari 1 sampai N
 *
 * - N merupakan sebuah nilai pada parameter.
 *
 * Tugas
 * - Buat function menggunakan 3 cara (function declaration, function expression, arrow function)
 * - Gunakan default value pada N jika N tidak diisi, isi default value dengan angka 5
 */


//Arrow Function
const fizzBuzzFunction = (n = 15) => {
    for (let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz\n");
        }else if (i % 3 === 0) {
            console.log("Fizz");
        }else if (i % 5 === 0) {
            console.log("Buzz\n");
        }else{
            console.log(i);
        }
    }
}
console.log("Arrow Function: ");
fizzBuzzFunction ();

//Declaration Function
function fizzBuzzAction2(n = 15){
    fizzBuzzFunction (n);
}
console.log("\nFunction Declaration: ");
fizzBuzzAction2 (20)

//Expression function
const fizzBuzzAction3 = function (n = 15){
    fizzBuzzFunction (n);
}
console.log("\nFunction Expression:");
fizzBuzzAction3 (25);
