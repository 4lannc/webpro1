// a promise
let songPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Lagu berhasil diputar: "Coblosan-Eriprasz"'); // Mengubah status menjadi Fulfilled setelah 4 detik
    }, 4000); 
});

// Menangani promise
songPromise.then(function(result) {
    console.log(result); // Menampilkan hasil Promise
}).catch(function(error) {
    console.log(error); // Menangani kesalahan jika terjadi
});