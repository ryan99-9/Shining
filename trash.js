// let showfruit = new Fruit (`Apel`,`Rp 10.000`,`5`,`Fruit`,`Medium`)
// let showsnack = new Snack (`French Fries`,`Rp 15.000`,`7`,`Fast Food`,`2022`)
// let showwearing = new Wearing (`Pants`,`Rp 20.000`,`9`,`Cloth`,`M`)
// let showelec = new Electronic (`Iron`,`Rp 25.000`,`11`,`Electronic`,true)
// let showall = () => {
//   let a = showfruit
//   +=showsnack
//   +=showwearing
//   +=showelec
//   return a

   //DataBase
   let goods = [
    {
        name: `apel`,
        price: 10000,
        stock: 5,
        sugarLevel: `Medium`,
        category: `Fruit`
    },
    {
        name: `French Fries`,
        price: 15000,
        stock: 7,
        expired: 2022,
        category: `Fast Food`
    },
    {
        name: `pants`,
        price: 20000,
        stock: 9,
        size: `M`,
        category: `Cloth`
    },
    {
        name: `Iron`,
        price: 25000,
        stock: 11,
        warranty: true,
        category: `Electronic`
    }
]
let keranjang = []
let totalbelanja = 0

class Product {
    constructor(name, price, stock, cate) {
        this.name = name,
            this.price = price,
            this.stock = stock,
            this.category = cate
    }
}
class Fruit extends Product {
    constructor(name, price, stock, cate, sugar) {
        super(name, price, stock, cate)
        this.sugarLevel = sugar
    }
}
// class Snack extends Product {
//     constructor(name, price, stock, cate, exp) {
//         super(name, price, stock, cate)
//         this.expired = exp
//     }
// }
// class Wearing extends Product {
//     constructor(name, price, stock, cate, size) {
//         super(name, price, stock, cate)
//         this.size = size
//     }
// }
// class Electronic extends product {
//     constructor(name, price, stock, cate, war) {
//         super(name, price, stock, cate)
//         this.warranty = war
//     }
// }
//Membuat Fungsi untuk meringkas tampilan list
//menampilkan daftar barang 
let list = `Daftar barang di toko Sanjaya: \n`
goods.forEach((item,index) => {
    list += `${index+1}.`
    for (let prop in item) {
        list += `${item[prop]} `
     } 
     list += `\n`
})
// console.log(list)

let buah = new Fruit (`pisang`,20000,5,`Fruit`,`Low`)
goods.push(buah)
console.log()