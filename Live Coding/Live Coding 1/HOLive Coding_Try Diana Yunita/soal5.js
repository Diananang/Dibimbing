/**
 * RIGHT TRIANGLE
 * Membuat segitiga siku siku dengan 2 kondisi
 * - Kondisi 1 -> dimulai dari kiri
 * *
 * **
 * ***
 * ****
 * *****
 */
for (let i = 1; i <= 5; i++){ //looping untuk baris
    let stringSatuBaris1 = "";

    for (let j = 1; j <= i; j++) {//looping untuk bintang
        stringSatuBaris1 += "*";
    }
    console.log(stringSatuBaris1);
    
}
console.log("-----------------------------------");
 /* - Kondisi 2 -> dimulai dari kiri dan terbalik
 * *****
 * ****
 * ***
 * **
 * *
 */
for (let i = 5; i >= 1; i--) { //looping baris
    let stringSatuBaris2 = "";
    
    for (let j = 1; j <= i; j++){ //looping bintang
       stringSatuBaris2 += "*";
    }
    console.log(stringSatuBaris2);
}
console.log("-----------------------------------");

 /* - Kondisi 3 -> dimulai dari kiri kemudian dilanjutkan terbalik
 * *
 * **
 * ***
 * ****
 * *****
 * ****
 * ***
 * **
 * *
 *
 * Lakukan looping untuk menyelesaikan segitiga berikut!
 */

 const totalBaris = 9;
 const batasTengahSegitiga = Math.ceil (totalBaris / 2); //pembulatan ke atas

 for (let i = 1; i <= totalBaris; i++) {
    let stringSatuBaris3 = "";

    if (i <= batasTengahSegitiga) {
        for (let j = 1; j <= i; j++) {
            stringSatuBaris3 += "*";
        }
    }else{
        for (let j = 0; j <= totalBaris - i; j++) {
            stringSatuBaris3 += "*";
        }
    }

    console.log(stringSatuBaris3);
    
 }
 console.log ("-----------------------------------")
