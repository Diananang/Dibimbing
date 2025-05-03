/**
 * PALINDROME WORDS
 * - Palindrome adalah sebuah string yang memiliki pengejaan yang sama baik dari awal maupun dari akhir, contoh
 *    - "madam" -> di reverse menjadi "madam".
 *    - "ada" -> di reverse menjadi "ada".
 * Buatlah sebuah perulangan dan pengecekan apakah sebuah string merupakan palindrome atau tidak. String tersebut
 * dapat berupa semua karakter alphabet atau kombinasi dengan angka.
 *
 * NOTES: Hanya gunakan looping dan if else biasa, tidak menggunakan method tambahan seperti split(), reverse() dll.
 */

const kata =  "KASUR RUSAK";

let pointerKiriIndex = 0;
let pointerKananIndex = kata.length - 1;
let isPalindrome = true; //Nilai awal true

while (pointerKiriIndex < pointerKananIndex){
    const karakterPointerKiri = kata[pointerKiriIndex].toLowerCase();
    const karakterPointerKanan = kata[pointerKananIndex].toLowerCase();

    console.log(`Karakter pointer kiri pada index ${pointerKiriIndex} -> ${karakterPointerKiri}`);
    console.log(`Karakter pointer kanan pada index ${pointerKananIndex} -> ${karakterPointerKanan}`);
    console.log(`Pointer kiri sama dengan pointer kanan? ${karakterPointerKiri === karakterPointerKanan}`);
    console.log("--------------------------------------------------");
    
    
    //jika karakter pointer kiri tidak sama pointer kanan
    if (karakterPointerKiri !== karakterPointerKanan){
        isPalindrome = false;
        break;
    }

    //increment pointer kiri & decrement pointer kanan
    pointerKiriIndex++;
    pointerKananIndex--;
}

console.log(
    isPalindrome ? `${kata} adalah PALINDROME` : `${kata} bukan PALINDROME`
);
