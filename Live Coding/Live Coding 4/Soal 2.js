let daftarHarga = [120000, 40000, 75000, 50000, 30000];

//hitung harga setelah diskon 10%
//Mengecek apakah produk termasuk premium (harga setelah diskon > 50.000)
class Harga {
    constructor (harga){
        this.harga = harga;
    }
    arrayHarga = [];
    premiumList = [];
    afterDiscount(){
        this.arrayHarga = this.harga.map(element => element - element*0.1, 0);
        console.log("Harga setelah diskon:" + this.arrayHarga);
    }

    premium(){
        let premiumList = this.arrayHarga.filter(element => element > 50000, 0);
        console.log("Harga dengan produk premium: " + premiumList);
        
    }
}

const output = new Harga (daftarHarga);

output.afterDiscount();
output.premium();
