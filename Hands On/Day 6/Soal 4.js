/**
 * STUDENT EXAMINATION
 * - Terdapat 5 orang student pada suatu kelas dengan data object sebagai berikut
 *    - nama
 *    - array nilai
 *    - studentId
 *
 * Lakukan hal berikut:
 * 1. Pada student pertama, assign value studentId karena studentId awal yang dibuat salah (Object.assign()).
 * 2. Buatlah sebuah array dari kelima object student tersebut.
 * 3. Lakukan looping pada array student tersebut, kemudian
 *    a. hitung total dan rata-rata array nilai student tersebut
 *    b. kemudian buatlah if else condition dimana akan menentukan grade dari student tersebut ("A", "B", "C", "D")
 *    c. assign field baru berupa "gradeSiswa" pada object student berdasarkan hasil dari grading
 * 4. Print masing masing object student dengan format "Student dengan nama {{nama}} dan student id {{studentId}} mendapatkan
 *    grade nilai {{gradeSiswa}}".
 * 5.Print array setelah diganti
 */

const student1 = {
    nama: 'Yeni',
    nilai: [90,55,70,87,88],
    studentID: '2522701'
};
const student2 = {
    nama: 'Burma',
    nilai: [87,85,90,80,80],
    studentID: '2522702'
};
const student3 = {
    nama: 'Anton',
    nilai: [85,60,80,81,88],
    studentID: '2522703'
};
const student4 = {
    nama: 'Yujin',
    nilai: [98,90,91,88,95],
    studentID: '2522704'
};
const student5 = {
    nama: 'Dona',
    nilai: [70,65,75,75,89],
    studentID: '2522705'
}

//1. Ganti studentID student1
student1.studentID = '2522708';

//2. Membuat array
const objectStudents = [student1, student2, student3, student4, student5];

//3. Looping
for (let i = 0; i < objectStudents.length; i++) {
    //a. Total dan rata-rata nilai
    const nilaiNilaiStudent = objectStudents[i].nilai; //mengambil value nilai

    let totalNilai = 0;
    let rataRata = 0;
    nilaiNilaiStudent.forEach(function (nilaiStudent) {
        totalNilai += nilaiStudent;
    });
    rataRata = totalNilai/nilaiNilaiStudent.length;

    //b. Grading
    let grade = '';
    if (rataRata >= 90 && rataRata <= 100) {
        grade = "A";
    } else if (rataRata >= 80) {
        grade = "B";
    }else if (rataRata >= 70) {
        grade = "C";
    }else{
        grade = "D";
    }
    
    //c. Field GradeSiswa
    objectStudents[i].gradeSiswa = grade;

    console.log(`Student dengan nama "${objectStudents[i].nama}" dan student ID: ${objectStudents[i].studentID} mendapatkan grade nilai ${objectStudents[i].gradeSiswa}`);   
}

console.log('Update array: ', objectStudents);
