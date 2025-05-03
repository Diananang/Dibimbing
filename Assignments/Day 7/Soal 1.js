/* 
Buat array berisi nilai selama 8 semester: [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25].
Lakukan perulangan untuk menghitung:
    Total nilai semester ganjil dan genap.
    Rata-rata nilai semester ganjil dan genap
*/

const nilaiNilai = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];

let semesterGanjil = [];
let semesterGenap = [];
//Memisahkan semester ganjil dan genap
for (let i = 0; i < nilaiNilai.length; i++) {
    if (i % 2 === 0){
        semesterGanjil.push (nilaiNilai[i]);
    }else{
        semesterGenap.push (nilaiNilai [i]);
    }
}

let totalGanjil = 0;
let totalGenap = 0;
let rataRataGanjil = 0;
let rataRataGenap = 0;

//menghitung nilai semester ganjil
for (let j = 0; j < semesterGanjil.length; j++){
    totalGanjil += semesterGanjil[j];
}
//menghitung nilai semester genap
for (let k = 0; k < semesterGenap.length; k++){
    totalGenap += semesterGenap[k];
}

rataRataGanjil = totalGanjil/semesterGanjil.length;
rataRataGenap = totalGenap/semesterGenap.length;

console.log(`Rata-rata nilai semester ganjil adalah ${rataRataGanjil} dan rata rata semester genap adalah ${rataRataGenap}`);
