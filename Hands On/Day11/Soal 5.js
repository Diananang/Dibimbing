// Promise
const getData = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json()) // membuat api menjadi Json
    .then (data => { //mengambil data dari json
        console.log(data);
    })
    .catch(error =>{
        console.error('Error pada fetch: ', error);
    })
}
getData();

//Async await
const getData2 = async() =>{
    try { //jika berhasil
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts/1')
        const data = await response.json()
        console.log(data);
    } catch (error) { // jika error
        console.log('Error pada fetch: ', error);
    }
}
getData2();