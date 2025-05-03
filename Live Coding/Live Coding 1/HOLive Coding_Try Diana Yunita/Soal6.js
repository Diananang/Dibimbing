/**
 * APAKAH STRING MENGANDUNG HURUF VOKAL
 * A, I , U , E ,O
 * 
 * - apakah dia mengandung huruf vokal
 * - ada berapa huruf vokal dalam 1 string
 * - berapa huruf vokal per masing masing A, I, U , E, O
 */

const kata ="programming";
const hurufVokal = ["A", "I", "U", "E", "O"];

let isHurufVokal = false;
let jumlahHurufVokal = 0;

const jumlahHurufVokalObject = {
    A: 0,
    I: 0,
    U: 0,
    E: 0,
    O: 0
}

for (let i = 0; i < kata.length; i++) {
    const karakterString = kata[i].toUpperCase();

    //Check huruf vokal
    switch (karakterString) {
        case "A":
            jumlahHurufVokalObject.A += 1
            break;
        case "I":
            jumlahHurufVokalObject.I += 1
            break;
        case "U":
            jumlahHurufVokalObject.U += 1
            break;
        case "E":
            jumlahHurufVokalObject.E += 1
            break;
        case "O":
            jumlahHurufVokalObject.O += 1
            break;
        default:
            break;
    }
}

console.log(jumlahHurufVokalObject);

//Mendapatkan total huruf vokal
const arrayValuesObject = Object.values(jumlahHurufVokalObject);
arrayValuesObject.forEach(function (itemValue) {
    jumlahHurufVokal += itemValue;
});

console.log(`Jumlah huruf vokal pada string "${kata}" adalah ${jumlahHurufVokal}`);

