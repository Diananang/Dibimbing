/**
 * 1. Buatlah sebuah class Person yang menerima property
 * - nama
 * - gender
 * - energy -> PRIVATE PROPERTY
 *
 * Buat method
 * - makan -> energy + 5
 * - tidur -> energy + 10
 * - berjalan -> energy - 5
 * - berlari -> energy - 8
 * - setter dan getter method dari property private "energy"
 * 
 * NOTES: Gunakan _ instead of # untuk private property agar dapat diakses pada child class
 *
 * Buat child class AnakAnak
 * - OVERRIDE method makan, tidur, berjalan dan berlari menggunakan penambahan dan pengurangan
 *   jumlah energy sesuai dengan usia.
 *    - makan -> energy + 10
 *    - tidur -> energy + 15
 *    - berjalan -> energy - 3
 *    - berlari -> energy - 5
 *    - TAMBAHKAN beberapa method spesifik yang dapat mengubah nilai dari energy
 */

class Person{
  constructor(nama, gender, energy){
    this.nama = nama;
    this.gender = gender;
    this._energy = 85;
  }

  makan(){
    this._energy += 5;
    console.log(`${this.nama} makan dan energy bertambah menjadi ${this._energy}`);
  }
  tidur(){
    this._energy += 10;
    console.log(`${this.nama} tidur dan energy bertambah menjadi ${this._energy}`);
  }
  berjalan(){
    this._energy -= 5;
    console.log(`${this.nama} berjalan dan energy berkurang menjadi ${this._energy}`);
  }
  berlari(){
    this._energy -= 8;
    console.log(`${this.nama} berlari dan energy berkurang menjadi ${this._energy}`);
  }
  get getEnergy(){
    return this._energy;
  }
  set setEnergy(energy){
    this._energy = energy;
  }
}

class AnakAnak extends Person {
  constructor(nama, gender, usia) {
    super(nama, gender);
    this.usia = usia;
  }
  makan() {
      this._energy += 10;
      console.log(`${this.nama} makan dan energy bertambah menjadi ${this._energy}`);
  }
  tidur() {
    this._energy += 15;
    console.log(`${this.nama} tidur dan energy bertambah menjadi ${this._energy}`);
  }
  berjalan() {
    this._energy -= 3;
    console.log(`${this.nama} berjalan dan energy berkurang menjadi ${this._energy}`);
  }
  berlari() {
    this._energy -= 5;
    console.log(`${this.nama} berlari dan energy berkurang menjadi ${this._energy}`);
  }
  bermain() {
    this._energy -= 7;
    console.log(`${this.nama} bermain dan energy berkurang menjadi ${this._energy}`);
  }
  belajar() {
    this._energy -= 5;
    console.log(`${this.nama} belajar dan energy berkurang menjadi ${this._energy}`);
  }
  minumSusu() {
    this._energy += 8;
    console.log(`${this.nama} minum susu dan energy bertambah menjadi ${this._energy}`);
  }

}
const person1 = new Person("Diana", "Perempuan");
person1.makan();
person1.tidur();
person1.berjalan();
person1.berlari();

console.log("========================");
const anak1 = new AnakAnak("Dipi", "Perempuan", 8)
anak1.makan();
anak1.tidur();
anak1.berjalan();
anak1.berlari();
anak1.bermain();
anak1.belajar();
anak1.minumSusu();