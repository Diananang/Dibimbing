function getData(url, callback) {
    console.log("fetching ....." + url);
    setTimeout(() => {
        callback(url);
    }, 2000); 
}

function renderData(url) {
    console.log({
        data: {
            name : "Diana",
            age: 23
        }
    });
}

getData('data siswa', renderData)