let people =[
    {nama: "Alice", age: 22},
    {nama: "Bob", age: 17},
    {nama: "Charlie", age: 16}
];

class Person{
    permit(arr){
        arr.forEach(element => {
            if (element.age >= 17) {
                console.log(`${element.nama} anda diizinkan untuk mengakses konten ini`);
            }else{
                console.log(`${element.nama} anda akan diizinkan untuk mengakses konten ini ${17 - element.age} tahun lagi`);
            }
        });
    }
    getAccess(arr) {
        let namaNama = [];
        arr.forEach(element => {
            if (element.age >= 17) {
                namaNama.push(element.nama);
            }
        });
        console.log(`Diizinkan masuk : ${namaNama}`);
        
    }
  
    getNotAllowed(arr) {
        // hitung ada berapa orang yang tidak diizinkan untuk mengakses
        let count = 0;
        arr.forEach(element => {
            if (element.age < 17) {
                count++;
                console.log(`Jumlah yang tidak boleh mengakses: ${count} orang`);
            }
        });
    }
  
    getAccessMessage() {
        this.permit()
    }
}

const personChecker = new Person();
personChecker.permit(people);
personChecker.getAccess(people);
personChecker.getNotAllowed(people);

