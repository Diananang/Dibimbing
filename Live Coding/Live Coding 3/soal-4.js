/**
 * Rotate array 1 Dimensi
 */

//num = jumlah rotasi

const rotate = (arr, num) => {
  //Cek array kosong dan jumlah rotasi <= 0
  if (!arr || arr.length === 0 || num <=0) return arr;

  //jika jumlah rotasi besar dari panjang array maka hasil modulo akan menjadi jumlah rotasi
  // mis: num = 8, rotasi = 2;
  const rotasi = num % arr.length; 

  //memisahkan bagian awal dengan bagian rotasi
  const awal = arr.slice(0, arr.length - rotasi);
  const sisa = arr.slice(arr.length-rotasi);

  return [...sisa, ...awal];
}

// cara kedua
const rotate2 = (arr, num) =>{
  const newArr = [...angka];
  let rotasi = num % arr.length;

  for (let i = 1; i < rotasi; i++){
    let sisa = newArr.pop();
    newArr.unshift(sisa); 
  }
  return newArr;
}

let angka = [3,4,5,6,7,8];
console.log('array : ', angka); // [3,4,5,6,7,8]
console.log('rotasi ke-1 : ', rotate(angka, 1)); // output: [8,3,4,5,6,7]
console.log('rotasi ke-2 : ', rotate(angka, 2)); // output: [7,8,3,4,5,6]
console.log('rotasi ke-3 : ', rotate(angka, 3)); // output: [6,7,8,3,4,5]
console.log('rotasi ke-8 : ', rotate(angka, 8)); // output: [7,8,3,4,5,6] (note: sama dengan rotasi kedua)