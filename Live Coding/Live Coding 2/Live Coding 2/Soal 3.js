// String karakter pertama yang tidak berulang
// contoh input = "swiss"
// output = "w"

function perulangan(huruf) {
    let lowercase = huruf.toLowerCase();
    let hasil = lowercase.split("");
    
    for (let i = 0; i < lowercase.length; i++) {
        if (hasil.filter (function (a){
            return a == lowercase.charAt(i);
        }). length == 1)
        return lowercase.charAt(i);
    }
}
console.log(perulangan ("Try Diana Yunita"));

//kedua
function perulangan2(huruf){
    let hasil;
    huruf.split("").some(function (character, index, obj) {
        if (obj.indexOf(character) === obj.lastIndexOf (character)) {
            hasil = character;
            return true;
        }
        return false;
    });
    return hasil;
}
console.log(perulangan2("ddiana"));

// cara 3
function firstNonRepeatingChar(str) {
    const charCount = {};
  
    // Hitung frekuensi karakter
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Cari karakter pertama yang frekuensinya 1
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    return null;
}
console.log(firstNonRepeatingChar("Try Diana Yunita"));


