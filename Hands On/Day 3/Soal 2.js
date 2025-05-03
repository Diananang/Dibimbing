/**
 * Menentukan Kelulusan Seorang Siswa
 * Seorang siswa hanya dianggap lulus jika :
 * 1. Nilai seluruh mata pelajarannya tidak ada yang 0 (lebih dari 0). DAN
 * 2. Rata-rata dari seluruh mata pelajarannya lebih dari 80. DAN
 * 3. Nama siswa tidak kosong (null / undefined) DAN
 * 4. NIP siswa tidak kosong (null / undefined)
 *
 * Menggunakan kombinasi arithmetic, logical dan boolean comparison, buat lah syntax code untuk
 * rules tersebut.
 */

const nama = 'Diana';
const nim = '2011512017';

//Mata pelajaran
const mapelBiologi = 80;
const mapelKimia = 75;
let rataRataNilai = 0;

//Check nilai kosong pada mapel
const isAdaMapelKosong = mapelBiologi === 0 || mapelKimia === 0;
console.log('Apakah ada mapel yang kosong?', isAdaMapelKosong);

//Nilai rata-rata
rataRataNilai = (mapelBiologi+mapelKimia)/2;
console.log('Nilai rata-rata: ', rataRataNilai);

//Kelulusan Siswa
const isSiswaLulus = !isAdaMapelKosong && rataRataNilai > 80 && nama == !null && nim == !null;
console.log(`Apakah siswa dengan nama ${nama} dengan nim ${nim} lulus: ${isSiswaLulus}`);
