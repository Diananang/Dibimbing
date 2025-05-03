let daftarHarga = [120000, 40000, 75000, 50000, 30000];

//hitung harga setelah diskon 10%
//Mengecek apakah produk termasuk premium (harga setelah diskon > 50.000)
class Harga {
    arrayHarga = [];
    premiumList = [];
    afterDiscount(arr){
        // return (this.arrayHarga = arr.map(item => item - item*0.1));
        arr.forEach(element => {
            let hargaDiskon = element - element*0.1;
            this.arrayHarga.push(hargaDiskon);
        });
        console.log("Harga setelah diskon:" + this.arrayHarga);
    }

    premium(){
        return (this.premiumList= this.afterDiscount.reduce((acc, curr) => acc(curr > 50000)));
    }
}

const output = new Harga ();

output.afterDiscount(daftarHarga);
output.premium(daftarHarga);