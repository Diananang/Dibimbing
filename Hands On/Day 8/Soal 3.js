/**
 * Filter and Modify objects
 */

const mahasiswa = {
    nomorIndukMahasiswa: "123456789",
    nama: "Aldo Prasetyo",
    umur: 25,
    jurusan: 'Sistem Informasi',
    semester: 5,
    nilaiNilai: {
      semester1: [90, 85, 80],
      semester2: [88, 92, 95],
      semester3: [85, 87, 90],
      semester4: [80, 82, 85],
    }
  };
  
  /**
   * semester1 -> (90 + 85 + 80) / 3
   * semester2 -> (88 + 92 + 95) / 3
   * semester3 -> (85 + 87 + 90) / 3
   * semester4 -> (80 + 82 + 85) / 3
   * 
   * semester5 -> arrayNilaiSemesterAkhir / 3
   * 
   * total / 5
   */
  
  const formatObjectMahasiswa = (objectMahasiswa, ...arrayNilaiSemesterAkhir) => {
    // Rata rata dari semester 1 - semester 4
  
    const keysNilaiNilai = Object.keys(objectMahasiswa.nilaiNilai); //nilaiNilai semester 1-4
    const rataRataNilaiNilai = keysNilaiNilai.reduce((acc, arraySemester) => {
      
      const arraySemesterSpesifik = objectMahasiswa.nilaiNilai[arraySemester];//mengambil value dari object nilaiNilai per semester
      const rataRataArraySemesterSpesifik = 
        arraySemesterSpesifik.reduce((acc, nilaiSemesterSpesifik) => { //akumulasi nilai semester 1 - 4
          return acc + nilaiSemesterSpesifik;
        }, 0) / arraySemesterSpesifik.length; //menghitung rata-rata per semester
  
      console.log("*** acc: ", acc);
      console.log("*** arraySemesterSpesifik: ", arraySemesterSpesifik);
      console.log("*** rataRataArraySemesterSpesifik: ", rataRataArraySemesterSpesifik);
      console.log("\n");
  
      return acc + rataRataArraySemesterSpesifik;
    }, 0);
    // Rata rata nilai semester 5
    const rataRataNilaiSemester5 = arrayNilaiSemesterAkhir.reduce((totalNilaiSaatIni, nilaiItem) => {
      return totalNilaiSaatIni + nilaiItem;
    }, 0) / arrayNilaiSemesterAkhir.length; // rata-rata nilai semester 5
  
    const rataRataSeluruhSemester = (rataRataNilaiNilai + rataRataNilaiSemester5) / 5; //menghitung rata-rata semester 1 -5
    
    return {
      ...objectMahasiswa, //mengcopy objectMahasiswa
      nilaiNilai: {
        ...objectMahasiswa.nilaiNilai, //mengcopy object nilaiNilai dari objectMahasiswa
        semester5: arrayNilaiSemesterAkhir //menambahkan array nilai semester 5
      },
      rataRataNilai: rataRataSeluruhSemester //menambahkan rataRata seluruh semester ke dalam objectMahasiswa
    }
  }
  
  const formattedObjectMahasiswa = formatObjectMahasiswa(mahasiswa, 75, 80, 90);
  console.log("object original: ", mahasiswa)
  console.log("object formatted: ", formattedObjectMahasiswa);