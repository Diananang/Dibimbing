/**Function dengan input numbers = 15
 * klu habis dibagi 3, output "aha"
 * klu habis dibagi 5, output "ihi"
 * klu habis dibagi 3 dan 5, output "uhu"
 * selebihnya output nomor
 */

const numbers = 15;
function number(num) {
    const array = [];
    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            array.push("uhu");
        }else if (i % 3 === 0){
            array.push("aha");
        }else if (i % 5 === 0){
            array.push("ihi");
        }else{
            array.push(i);
        }
    }
    return array;
}
console.log (number(numbers));