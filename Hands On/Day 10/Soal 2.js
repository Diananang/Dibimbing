/* Terdapat sebuah array sorted [1, 7, 13, 21, 27, 45, 50]
 * Buatlah sebuah function untuk searching sebuah angka menggunakan "BINARY SEARCH"
 * - Jika menemukan angka, kembalikan true;
 * - Jika tidak menemukan angka, kembalikan false;
 *
 * Input -> 45 dan 21 (tentukan apakah keduanya ada didalam array tersebut)
*/

/**
 * tentukan awal dan akhir
 * hitung indeks tengah =  (awal+akkhir)/2
 * bandingkan elemen mid dengan target
 * jika sama kembalikan mid, elemen ditemukan
 * jika lebih kecil periksa bagian kanan, start = mid + 1
 * jika lebih kecil periksa bagian kiri, end = mid -1
 * jika tidak ditemukan return -1
 */

function binarySearch(array, target) {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while (startIndex <= endIndex) {
        const midIndex = (startIndex + endIndex)/2;

        if (array [midIndex] == target) {
            return true;
        }else if (array[midIndex] < target) {
            startIndex = midIndex + 1;
        }else {
            endIndex = midIndex - 1;
        }
    }
    return false;
}

const arraySorted = [1, 7, 13, 21, 27, 45, 50];
const target1 = 45;
const target2 = 21;
const target3 = 8;
console.log(`Apakah angka ${target1} berada pada array? ${binarySearch(arraySorted,target1)}`);
console.log(`Apakah angka ${target2} berada pada array? ${binarySearch(arraySorted,target2)}`);
console.log(`Apakah angka ${target3} berada pada array? ${binarySearch(arraySorted,target3)}`);


