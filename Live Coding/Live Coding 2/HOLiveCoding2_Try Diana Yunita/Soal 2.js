// Cetak angka dari 1 hingga 100. Untuk kelipatan 3 cetak "Kelipatan 3", untuk kelipatan 5 cetak "Kelipatan 5", dan untuk kelipatan keduanya cetak "Kelipatan 5 dan 3".

function kelipatan(n) {
    let output = "";

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += i + " Kelipatan 3 dan 5\n";
        }else if(i % 3 === 0){
            output += i + " Kelipatan 3\n";
        }else if (i % 5 === 0){
            output += i + " Kelipatan 5\n";
        }else{
            output +=  i + "\n";
        }
    }
    return output;
}
console.log(kelipatan(100));

