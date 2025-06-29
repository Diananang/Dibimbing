/*
    Menghitung summary data nilai siswa
*/

// helper function, silahkan digunakan, jika perlu
const roundTwoDecimal = (num) => {
    return Math.round(num*100) / 100;
}

const average = (arrNum) => {
    return arrNum.reduce((acc, v) => acc + v) / arrNum.length;
}
// end of helper function

const showSummary = (rawData) => {
    let classGroup = {};

    for (let i = 0; i < rawData.length; i++) {
        let kelas = rawData[i].kelas;
        

        if (!classGroup[kelas]) { //buat group key baru jika tidak ada
            classGroup[kelas] = [];
        }
        classGroup[kelas].push(rawData[i].nilai);
    }
    console.log(classGroup);

    let i = 1;
      for(let key in classGroup) {
        console.log(i, '. Kelas = ', key, ' | Jumlah Siswa = ', classGroup[key].length, ' | Nilai Rata-rata = ', roundTwoDecimal(average(classGroup[key])) )
        i++;
      }
};

const rawData = [
    {nama: "siswa 1", kelas : 'A', nilai : 90},
    {nama: "siswa 2", kelas : 'B', nilai : 80},
    {nama: "siswa 3", kelas : 'A', nilai : 85},
    {nama: "siswa 4", kelas : 'B', nilai : 85},
    {nama: "siswa 5", kelas : 'B', nilai : 80},
    {nama: "siswa 6", kelas : 'B', nilai : 80},
    {nama: "siswa 7", kelas : 'A', nilai : 85},
    {nama: "siswa 8", kelas : 'C', nilai : 83},
    {nama: "siswa 9", kelas : 'C', nilai : 80},
];

showSummary(rawData);
/*
    Expected output:
    - Akan melakukan console.log() data seperti berikut:
    - nilai rata2, maksimal dalam 2 desimal

    1. Kelas = A | Jumlah Siswa = 3 | Nilai Rata-rata = 86.67
    2. Kelas = B | Jumlah Siswa = 4 | Nilai Rata-rata = 81.25
    3. Kelas = C | Jumlah Siswa = 2 | Nilai Rata-rata = 81.5
*/