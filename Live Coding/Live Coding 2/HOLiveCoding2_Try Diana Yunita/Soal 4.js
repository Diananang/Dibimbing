// Diberikan array berisi string, kelompokkan string-string tersebut yang merupakan anagram satu sama lain.
// Contoh Input:
// ["eat", "tea", "tan", "ate", "nat", "bat"]

// Contoh Output:
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

function anagram(string) {
    let hasil = {};
    for (let kata of string){
        let array = kata.split("").sort().join(""); 
        if (hasil[array]) { 
            hasil[array].push(kata); 
        }else{
            hasil[array] = [kata]; 
        }
    }
    return Object.values(hasil);
}
console.log(anagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
