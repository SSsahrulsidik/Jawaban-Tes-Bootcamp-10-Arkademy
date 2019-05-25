// Soal 4

// Buatlah function untuk mencetak gambar seperti dibawah ini, yang mempunyai sebuah parameter sebagai panjang atau lebar gambar. Parameter harus merupakan bilangan ganjil.
// Catatan: Harus menggunakan perulangan jangan hardcode/ditulis langsung.

// coba-coba
let t = '';
for(lebar = 1; lebar <= 4; lebar++){
  if(lebar % 2 == 0){
    t += '';
  } else if(lebar % 2 == 1){
    t += ' ';
  }
  for(panjang = 1; panjang <= 5; panjang++){
    t += ('#' + ' ');
  }
  t += '\n';
}
console.log(t);
//  # # # # # 
// # # # # # 
//  # # # # # 
// # # # # # 

//
let s ='';
let panjang1 = '=';
let lebar1 = '*';
for(i = 1; i <= 5; i++){
    for(j = 1; j <= 5; j++){
        // s += '=';
        if('a') {
            s += '=';
        }
    }
    s += '\n';
}
console.log(s);
// =====
// =====
// =====
// =====
// =====





























