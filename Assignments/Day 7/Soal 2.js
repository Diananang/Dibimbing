/*
Buat object dengan data awal:
    nama -> Meuthia
    umur -> 25
    Ubah nilai umur menjadi 23.
Tambahkan:
Property jurusan dengan value “sistem informasi”.
Property jadwalKuliah, yang berisi object dengan hari (senin–rabu) dan mata kuliah (array of string) sesuai jadwal yang ditentukan. Dengan ketentuan sebagai berikut
    senin -> “kalkulus”, “AI”, “product management”
    selasa -> “network engineering”, “algoritma pemrograman”
    rabu -> “kalkulus”, “product design”, “IOT” 
*/

let person = {
    nama: "Meuthia",
    umur: 25,
}

//Ubah umur menjadi 23
person.umur = 23;

//Tambahkan property jurusan
person.jurusan = "Sistem Informasi";
//Tambahkan jadwalKuliah
person.jadwalKuliah = {
    senin: ["kalkulus, AI, product management"],
    selasa: ["network engineering, algoritma pemrograman"],
    rabu: ["kalkulus, product design, IOT"]
}
console.log(person);