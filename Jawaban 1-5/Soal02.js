// Soal 1
// Buatlah function yang memilik dua buah parameter tanggal untuk menampilkan hari antara dua buah tanggal!
// Contoh:
// Jika function dijalankan
// betweenDays('2019-11-01', '2019-11-05')
// akan diperoleh hasil:
// '2019-11-01', '2019-11-02', '2019-11-03', '2019-11-04', '2019-11-05'


function betweenDays(num1, num2) {
    var arr = [];
    for(let i = num1; i <= num2; i++) {
        arr.push("2019-11-0" + i)
    }
    return arr;
}

console.log(betweenDays(1, 2).join(', '));
// 2019-11-01, 2019-11-02
console.log(betweenDays(1, 5).join(', '));
// 2019-11-01, 2019-11-02, 2019-11-03, 2019-11-04, 2019-11-05



























