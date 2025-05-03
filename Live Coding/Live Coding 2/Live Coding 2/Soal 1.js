/*Steps:
1. Create prototype
2. Create pesudocode
Function reverseString (inputString)
    SET reversedString TO emptyString
    FOR each character in inputString startinf from the end
        ADD character to reversedString
    Return reversedString
    
3. Create code
*/

function reversedString(string) {
    let reversed = "";
    for (let i = string.length - 1; i >= 0;  i--){
        reversed += string[i];
    }
    return reversed;
}

const output = reversedString("diana")
console.log(output);

// Cara kedua
function reversedString2(string) {
    return string.split ("").reverse().join("");
}
const newString = reversedString2("diana");
console.log(newString);



