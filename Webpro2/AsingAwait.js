// a promise
let LaguLainPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Lagu berhasil diputar: "Kelingan Mantan"'); // Mengubah status menjadi Fulfilled setelah 4 detik
    }, 4000); 
});

// async function
async function playLaguLain() {
    try {
        // wait until the promise resolves 
        let result = await LaguLainPromise; // Menunggu hasil dari Promise
        console.log(result); // Menampilkan hasil Promise
    } catch (error) {
        console.log(error); // Menangani kesalahan jika terjadi
    }
}
// calling the async function
playLaguLain(); // Memanggil fungsi asinkron