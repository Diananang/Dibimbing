/**
 * PASSWORD CREATION
 * Seseorang ingin membuat password dari kumpulan karakter pada sebuah string. Kondisi nya sebagai berikut:
 * 1. Jika password kurang dari 7 karakter, maka print "PASSWORD TERLALU PENDEK".
 * 2. Jika password melebihi 7 karakter namun tidak terdapat angka, maka print "PASSWORD LEMAH, TAMBAHKAN ANGKA".
 * 3. Jika password sudah melebihi 7 karakter dan terdapat angka, namun hanya ada 1 angka saja maka print
 * "PASSWORD CUKUP KUAT, TAMBAHKAN ANGKA 1 LAGI AGAR SEMPURNA"
 * 4. Jika password sudah melebihi 7 karakter dan terdapat setidaknya 2 angka, maka print "PASSWORD SEMPURNA".
 * 5. Jika password lebih dari 10 karakter, maka print "PASSWORD TERLALU PANJANG".
 *
 * Gunakan method parseInt() dan isNaN() untuk melakukan check pada angka didalam string!
 */

const contohPassword = "diana12aaa";
const panjangPassword = contohPassword.length;

// 1. Check ketika password kurang dari 7 karakter
if(panjangPassword < 7) {
  console.log("PASSWORD TERLALU PENDEK");
} else if(panjangPassword > 10) {
  console.log("PASSWORD TERLALU PANJANG");
} else {
  let jumlahAngka = 0;

  for(let i = 0; i < panjangPassword; i++) {
    const karakterPassword = contohPassword[i];

    // Parse karakterPassword menjadi number
    const karakterAngka = parseInt(karakterPassword);
    console.log(`hasil format number untuk karakter ${karakterPassword} adalah ${karakterAngka}`);
    // NOTE: Jika angka -> tambahkan jumlahAngka dengan 1;
    if(!isNaN(karakterAngka)) jumlahAngka+=1;
  }

  // 2. Check jika password tidak terdapat angka
  if(jumlahAngka === 0) {
    console.log("PASSWORD LEMAH, TAMBAHKAN ANGKA!");
  } else if(jumlahAngka === 1) {
    console.log("PASSWORD CUKUP KUAT, TAMBAHKAN ANGKA 1 LAGI AGAR SEMPURNA!");
  } else {
    console.log("PASSWORD SEMPURNA!");
  }
}