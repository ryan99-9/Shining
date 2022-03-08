// let tanggal = new a()
// // console.log(tanggal.getFullYear())
// console.log(tanggal.getMonth())
// console.log(tanggal.getDay())

//Memaknai data ini = Variabel a adalah class yang berisikan properti yang otomatis ada, dengan value merupakan data - data terbaru.
//Hanya masalahnya pengkodean index dimulai dari 0, jadi 0 merupakan Januari dst, termasuk hari.


//Merubah datanya menjadi object
// var fruits = [["Apel", 10_000, 5], ["Anggur", 15_000, 5], ["Pisang", 20_000, 5]]
// class Fruit {
//     constructor(nama, harga, stock) {
//         this.nama = nama,
//             this.harga = harga,
//             this.stock = stock
//     }
// }
// let buah = new fruit(fruits[0])
// console.log(buah)

//Dengan object a dan if, tentukan waktu saat ini. 
//Hari ini minggu, 6 Februari 2022
//Pukul (saat ini)

// let a = new Date ()
// console.log(a.getMonth()) //fungsi ini tidak jalan karena yang dibutuhkan if adalah data, sedangkan consolag hubungannya sama output

// let b = new Date ()
// let a = b.getMonth()

// if (a === 0) {
//     console.log(`Januari`) // yang seperti ini hanya mengeluarkan bulan.
// } else if (a === 1) {
//     console.log(`Februari`)
// }else if (a === 2) {
//     console.log(`Maret`)
// }else if (a === 3) {
//     console.log(`April`)
// }else if (a === 4) {
//     console.log(`Mei`)
// }else if (a === 5) {
//     console.log(`Juni`)
// }else if (a === 6) {
//     console.log(`Juli`)
// }else if (a === 7) {
//     console.log(`Agustus`)
// }else if (a === 8) {
//     console.log(`September`)
// }else if (a === 9) {
//     console.log(`Oktober`)
// }else if (a === 10) {
//     console.log(`November`)
// }else if (a === 11) {
//     console.log(`Desember`)
// }

let b = new Date ()
let a = b.getMonth()


if (a === 0) {
    console.log(`Januari`) // yang seperti ini hanya mengeluarkan bulan.
} else if (a === 1) {
    console.log(`Februari`)
}else if (a === 2) {
    console.log(`Maret`)
}else if (a === 3) {
    console.log(`April`)
}else if (a === 4) {
    console.log(`Mei`)
}else if (a === 5) {
    console.log(`Juni`)
}else if (a === 6) {
    console.log(`Juli`)
}else if (a === 7) {
    console.log(`Agustus`)
}else if (a === 8) {
    console.log(`September`)
}else if (a === 9) {
    console.log(`Oktober`)
}else if (a === 10) {
    console.log(`November`)
}else if (a === 11) {
    console.log(`Desember`)
}