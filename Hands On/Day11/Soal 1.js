/**membuat function untuk menghitung umur */
// umur = tahun sekarang - tahun lahir
function age(name, born) {

    const now = new Date().getFullYear();

    let ageNow = now - born;
    console.log(`Umur ${name} sekarang adalah: ${ageNow}`);
}

age("Diana", 2002);

//variabel, conditional, function