/* 4. Terdapat sebuah aray unsorted random
 * - input array [12, 9, 6, 1, 3, 11];
 * - Sort array tersebut menggunakan Selection Sort
 */

/**
 * 
 * anggap elemen pertama sebagai elemen paling kecil
 * lakukan perulangan array dalam (i+1 to array.length)
 * jika array[j]< array[minIndex], set minIndex = j
 * jika minIndex != i, swap array[i] dengan array[minIndex]
 */
function selectionSort(array) {
    if(!array?.length){
        return [];
    }
    
    const n = array.length;
    const newArray = [...array];

    for (let i = 0; i < n; i++) {
        let minIndex = i;

        for (let j = i+1; j < n; j++) {
            if (newArray[j] < newArray[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
                [newArray [i], newArray[minIndex]] = [newArray[minIndex], newArray[i]];
        }
    }
    return newArray;
}

const inputArray = [12, 9, 6, 1, 3, 11];
console.log(`Array awal: ${inputArray}`);
const outputArray = selectionSort(inputArray);
console.log(`Array setelah diurutkan: ${outputArray}`);
