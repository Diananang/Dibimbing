// Diberikan array berisi string, kelompokkan string-string tersebut yang merupakan anagram satu sama lain.
// Contoh Input:
// ["eat", "tea", "tan", "ate", "nat", "bat"]

// Contoh Output:
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

function anagram(string) {
    let hasil = {}; //menyimpan hasil dalam object
    for (let kata of string){
        let array = kata.split("").sort().join(""); //pisahkan kata, kemudian sort setiap kata, masukkan ke dalam string
        if (hasil[array]) { //cek format yang sudah diurutkan (array) sudah ada dalam objek(hasil)
            hasil[array].push(kata); //jika sudah ada, push/tambahkan kata ke grup yang sudah ada
        }else{
            hasil[array] = [kata]; // jika belum ada maka buat grup kata baru
        }
        //console.log(kata);
    }
    return Object.values(hasil);//mengembalikan nilai dari objek dalam bentuk array
}
console.log(anagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
