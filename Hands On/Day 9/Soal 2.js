/**
 * Simulasi belanja di supermarket
 * 
 * Buat sebuah class Supermarket yang memiliki property 
 * - nama
 * - uang belanja
 * 
 * Buat method
 * - menghitung total belanja
 * - check discount belanja
 * - pembayaran (uang belanja - total belanja)
 *   - jika kurang, tampilkan pesan "Uang tidak cukup"
 *   - jika cukup, tampilkan pesan "Pembayaran berhasil", kembalikan sisa uang belanja
 */

class Supermarket{
    #nama;
    #uangBelanja;
    #arrayKeranjangBelanja = [];

    constructor(nama, uangBelanja){
        this.#nama = nama;
        this.#uangBelanja = uangBelanja;
    }
    #hargaBarangPerKategori(kategori){
        switch (kategori) {
            case "sayur":
                return 10000;
            case "daging":
                return 80000;
            case "buah":
                return 50000;
            case "ikan":
                return 20000;
            default:
                return 0;
        }
    }
    #menambahBarangKeranjang(objectBarang){
        this.#arrayKeranjangBelanja.push(objectBarang);
    }

    membeliBarang({namaItem, kategoriItem, jumlahItem}){
        const hargaPerBarang = this.#hargaBarangPerKategori(kategoriItem);

        if (hargaPerBarang === 0) {
            console.log(`Barang ${kategoriItem} tidak tersedia`);
            return;
        }

        const totalHargaBarang = hargaPerBarang * jumlahItem;
        //jika barang yang sama
        const itemBarangIndex = this.#arrayKeranjangBelanja.findIndex((item) =>{
            return item.kategoriItem === kategoriItem;
        });

        //jika sudah ada, update object
        if(itemBarangIndex !== -1) {
            this.#arrayKeranjangBelanja[itemBarangIndex].jumlahItem += jumlahItem;
            this.#arrayKeranjangBelanja[itemBarangIndex].totalHarga += totalHargaBarang;
        } else {
            // Jika barang belum ada di keranjang, buat object baru
            const objectBarangBaru = {
              namaItem,
              kategoriItem,
              jumlahItem,
              totalHarga: totalHargaBarang
            };
            this.#menambahBarangKeranjang(objectBarangBaru);
        }
    }

    menghapusBarang(kategoriItem, jumlahItem){
        const hargaBarangPerItem = this.#hargaBarangPerKategori(kategoriItem);

        // Check jika kategori barang tidak ada
        if(hargaBarangPerItem === 0) {
            console.log(`Barang ${kategoriItem} tidak tersedia`);
            return;
        }

        const totalHargaBarang = hargaBarangPerItem * jumlahItem;

        // Check jika dalam keranjang sudah ada barang yang sama
        const itemBarangIndex = this.#arrayKeranjangBelanja.findIndex((item) => {
            return item.kategoriItem === kategoriItem;
        });
        // Jika barang sudah ada di keranjang, update objectnya
        if(itemBarangIndex !== -1) {
            this.#arrayKeranjangBelanja[itemBarangIndex].jumlahItem -= jumlahItem;
            this.#arrayKeranjangBelanja[itemBarangIndex].totalHarga -= totalHargaBarang;

            // Jika jumlah item sudah 0, hapus dari keranjang
            if(this.#arrayKeranjangBelanja[itemBarangIndex].jumlahItem <= 0) {
                this.#arrayKeranjangBelanja.splice(itemBarangIndex, 1);
            }
        } else {
            console.log(`Barang ${kategoriItem} tidak ada di keranjang belanja`);
            return;
        }
    }
    

    #menghitungTotalBelanja(){
        const totalBelanja = this.#arrayKeranjangBelanja.reduce((totalHargaSaatIni, objectBarang) => {
            return totalHargaSaatIni + objectBarang.totalHarga;
          }, 0);
      
          return totalBelanja;
    }

    checkDiscount(){
        let totalBelanja = this.#menghitungTotalBelanja();
        let diskon = totalBelanja > 150000 ? totalBelanja * 0.15 : 0;
        let hargaSetelahDiskon = totalBelanja-diskon;

        console.log(`Total belanja: Rp ${totalBelanja}`);
        console.log(`Diskon yang diberikan: Rp ${diskon}`);

        return hargaSetelahDiskon;
    }
    pembayaran(){
        const totalBelanja = this.#menghitungTotalBelanja();

        //TODO: Check jika pembayaran lebih dari 150.000 diskon 15% --> #discountBarangPerKategori

        // Check apakah uang belanja cukup
        if(this.#uangBelanja >= totalBelanja) {
            return 'Pembayaran berhasil, sisa uang belanja: ' + (this.#uangBelanja - totalBelanja);
        } else {
            return 'Uang tidak cukup';
        }
    }
    get getArrayKeranjangBelanja(){
        return this.#arrayKeranjangBelanja;
    }
}
const orang1 = new Supermarket('Yanto', 500000);
console.log("Status belanja awal: ", orang1.getArrayKeranjangBelanja);

// Belanja barang
orang1.membeliBarang({
  namaItem: 'Daging Sapi',
  jumlahItem: 2,
  kategoriItem: 'daging',
});
orang1.membeliBarang({
  namaItem: 'Ikan Tuna',
  jumlahItem: 1,
  kategoriItem: 'ikan',
});
console.log("Status belanja saat ini: ", orang1.getArrayKeranjangBelanja);

console.log("==========================");
// Membeli barang yang sama
orang1.membeliBarang({
  namaItem: 'Daging Sapi',
  jumlahItem: 1,
  kategoriItem: 'daging',
});
console.log("Status belanja saat ini: ", orang1.getArrayKeranjangBelanja);

// Menghapus barang
console.log("==========================");
orang1.menghapusBarang('ikan', 2);
console.log("Status belanja saat ini: ", orang1.getArrayKeranjangBelanja);

//menghitung diskon
console.log("==========================");
const discount = orang1.checkDiscount();
console.log(`Total setelah diskon: Rp ${discount}`);

// Pembayaran
console.log("==========================");
const hasilPembayaran = orang1.pembayaran();
console.log(hasilPembayaran);