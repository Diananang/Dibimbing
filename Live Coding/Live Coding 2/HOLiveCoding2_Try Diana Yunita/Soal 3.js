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