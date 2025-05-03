/**
 * PERPANGKATAN
 * Lakukan looping pada angka 1-10, lalu lakukan pemangkatan dengan kondisi berikut
 * - Jika suatu angka merupakan bilangan genap DAN berada dibawag 5, maka lakukan pemangkatan dari angka 1-2
 * - Jika suatu angka merupakan bilangan ganjil DAN berada dibawah 5, maka lakukan pemangkatan dari angka 1-3
 * - Jika suatu angka berada diatas 5, maka lakukan pemangkatan dari angka 1 saja.
 */

for (let i = 0; i <= 10; i++){
    let batasLoopingPangkat = 1;

    //Batas looping pangkat
    if((i % 2 === 0) && (i <= 5)){
        batasLoopingPangkat = 2;
    }else if((i % 2 !== 0) && (i <= 5)){
        batasLoopingPangkat = 3;
    }else{
        batasLoopingPangkat;
    }

    console.log(`Perpangkatan angka ${i}: `);

    //Looping untuk pangkat
    for(let j = 1; j <= batasLoopingPangkat; j++){
        const hasilPangkat = i ** j;
        console.log(`${i} ^ ${j} = ${hasilPangkat}`);
    }

    console.log("-------------------------------");
    
    
}