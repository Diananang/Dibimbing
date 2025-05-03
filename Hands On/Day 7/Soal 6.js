/**
 * LODASH
 * 6. Buatlah sebuah function untuk memfilter sebuah array of object 
 * - Filterlah array dimana usia harus lebih dari 20 tahun dan kurang dari 30 tahun.
 * - Groupping array yang telah di filter berdasarkan city / pekerjaan.
 * 
 */

import _ from "lodash"

const arrayObject = [
    {nama: 'Boby', usia: 29, pekerjaan: "Presiden", kota: "Jakarta"},
    {nama: 'Sashi', usia: 23, pekerjaan: "Dokter", kota: "Malang"},
    {nama: 'Dipi', usia: 21, pekerjaan: "Ibu rumah tangga", kota: "Padang"},
    {nama: 'Roti', usia: 25, pekerjaan: "Juru bicara", kota: "Malang"},
    {nama: 'Bawang', usia: 21, pekerjaan: "Pegawai magang", kota: "Malang"},
    {nama: 'Oreo', usia: 19, pekerjaan: "Mahasiswa", kota: "Jakarta"},
    {nama: 'Ema', usia: 26, pekerjaan: "Guru", kota: "Jakarta"},
    {nama: 'Simba', usia: 29, pekerjaan: "Wiraswasta", kota: "Jakarta"},
    {nama: 'Abas', usia: 19, pekerjaan: "Mahasiswa", kota: "Medan"},
    {nama: 'Nala', usia: 23, pekerjaan: "Model", kota: "Bandung"}
];
//Filter usia
let usiaFilter = _.filter(arrayObject,  (person) => person.usia > 20 && person.usia <30);
console.log("Filter berdasarkan Usia 21-29: ");
console.log(usiaFilter);

//Group array
console.log("\nGroup berdasarkan kota: ");
let kotaGroup = _.groupBy(usiaFilter, 'kota');
console.log(kotaGroup);
