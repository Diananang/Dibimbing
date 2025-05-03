let items = [
    { name: "Pensil", price: 5000, category: "alat tulis" },
    { name: "Buku", price: 15000, category: "alat tulis" },
    { name: "Nasi Kotak", price: 25000, category: "makanan" },
    { name: "Kaos", price: 50000, category: "pakaian" },
    { name: "Roti", price: 10000, category: "makanan" }
];

class ShoppingList {
    constructor (barang){
        this.barang = barang;
    }

    namaBarang(){
        let nama = this.barang.map(element => element.name);
        console.log("Nama Barang: " , nama);
    }

    filterBarang(){
        let filter = this.barang.filter(element => element.price > 20000);
        console.log("Harga Barang > 20000: " , filter);
    }

    totalHarga(){
        let total = this.barang.reduce((acc,element) => acc + element.price, 0)
        console.log("Total Harga Barang: " , total);
    }

    makanan(){
        let namaMakanan =  this.barang.filter(element => element.category == "makanan").map((element) => element.name)
        console.log("Nama makanan: " , namaMakanan);
    }
}

const output = new ShoppingList(items);
output.namaBarang();
output.filterBarang();
output.totalHarga();
output.makanan();