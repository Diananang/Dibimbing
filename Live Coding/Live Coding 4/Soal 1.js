let people =[
    {nama: "Alice", age: 22},
    {nama: "Bob", age: 17},
    {nama: "Charlie", age: 16}
];

class Person{
    constructor(orang){
        this.orang = orang;
    }
    permit(){
        this.orang.forEach(element => {
            if (element.age >= 17) {
                console.log(`${element.nama} anda diizinkan untuk mengakses konten ini`);
            }else{
                console.log(`${element.nama} anda akan diizinkan untuk mengakses konten ini ${17 - element.age} tahun lagi`);
            }
        });
    }
    
    getAccess() {
        let akses = this.orang.filter(element => element.age >= 17);
        return akses;
    }
  
    getNotAllowed() {
        // hitung ada berapa orang yang tidak diizinkan untuk mengakses

        let count = this.orang.filter(element => element.age < 17).length;
        return count;
    }
  
    getAccessMessage() {
        console.log("=============================================");
        
        console.log("Meminta izin akses: ",people);
        this.permit();
        console.log("\nDiizinkan mengakses: ", this.getAccess());
        console.log("\nJumlah orang yang dilarang mengakses: ", this.getNotAllowed());
    }
}

const personChecker = new Person(people);
personChecker.permit();
personChecker.getAccess();
personChecker.getNotAllowed();
personChecker.getAccessMessage();

