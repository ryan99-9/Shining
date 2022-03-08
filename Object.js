//Object
//Syntax Object
let obj = {
    name: "apel",
    proce: 10000,
    stock: 5
}

//HOw to Acces Value in Object
console.log(obj.name)
console.log(obj["name"])

//Make Object with new keyword
let obj2 = new Object() //let obj2 = {}
obj2.username = "juan"
console.log(obj2)

//Method
let obj3 = {
    name: "pogba",
    hello: function greet() {
        console.log('hello')
    }
}
obj3.hello()

let obj4 = {
    name: "Bruno",
    greet() {
        console.log('hello')
    }
}
obj4.greet()

//This
let obj5 = {
    name: "Maldini",
    intro: function () {
        console.log(`Hello!My name is ${obj5.name}`)
    }
}
obj5.intro()

let obj6 = {
    name: "Nesta",
    intro: function () {
        console.log(`Hello!My name is ` + this.name)
    }
}
obj6.intro()

//Class : cetakan untuk membuat object, dengan properti yang sama persis dan valuenya berbeda.
//digunakan ketka kita butuh untuk membuat object dengan prop yang sama berkali kali
class Artis {   //membuat class huruf besar
    constructor(nama, lagu, rilis) {
        this.nama = nama,
            this.lagu = lagu,
            this.tahun = rilis
    }
    intro = () => {
        console.log(`I am a singer`)
    }
}
let artis1 = new Artis('Isyana',`angan anganku`, 2018)
let artis2 = new Artis(`Afgan`,`Sadis`, 2018)
console.log(artis1,artis2)
artis1.intro()

//INHERITANCE => Class untuk membuat class lainnya. untuk mencetak class 
class Livingthings {
    constructor(name, age, alive) {
        this.name = name,
            this.age = age,
            this.alive = true
    }
    eat = () => {
        console.log(`eating`)
    }
    breed = () => {
        console.log('breed')
    }
}
class Human extends Livingthings { //inheritance dari livingthings (Livingthings => Human)
    constructor(name,age,pet){
        super(name,age)
        this.pet = pet
    }
    work = () => {
        console.log(`work`)
    }
}
let human1 = new Human(`Budi`, 30, `Dog`)
console.log(human1)

class Animal extends Human{ //inheritance dari human (Livingthings => Human => Animal)
    constructor(name,age,fly){
        super(name,age)
        this.fly = fly
    }
    tail = () => {
        console.log('tail')
    }
}

let animal1 = new Animal(`Monkey`, 5, false)
console.log(animal1)
