/**
 * FIZZ BUZZ Challenge
 * 1. Lakukan looping dari angka 1 - 30, lalu lakukan kondisi berikut
 * 2. Jika angka bisa dibagi habis dengan 4, maka print "Fizz".
 * 3. Jika angka bisa dibagi habis dengan 6, maka print "Buzz".
 * 4. Jika angka bisa dibagi habis oleh baik 4 dan 6, maka print "FizzBuzz".
 * 5. Jika angka tidak bisa dibagi oleh 4 atau 6, maka print angka normal
 *
 * 6. Setiap kali angka menyentuh kelipatan 5, maka print "CHECKPOINT!!!"
 */

for (let i = 1; i <= 30; i++){
    if (i % 4 === 0 && i % 6 === 0){
        console.log("FizzBuzz");
    }else if (i % 4 === 0){
        console.log("Fizz");
    }else if (i % 6 === 0 ) {
        console.log("Buzz");
    }else {
        console.log(i);
    }

    if(i % 5 === 0) console.log(`CHECKPOINT\n`)
}