    // let goods = [
    //     {
    //         name: `apel`,
    //         price: 10000,
    //         stock: 5,
    //         sugarLevel: `Medium`,
    //         category: `Fruit`
    //     },
    //     {
    //         name: `French Fries`,
    //         price: 15000,
    //         stock: 7,
    //         expired: 2022,
    //         category: `Fast Food`
    //     },
    //     {
    //         name: `pants`,
    //         price: 20000,
    //         stock: 9,
    //         size: `M`,
    //         category: `Cloth`
    //     },
    //     {
    //         name: `Iron`,
    //         price: 25000,
    //         stock: 11,
    //         warranty: true,
    //         category: `Electronic`
    //     }
    // ]
    // let cart = []
    // let totalprice = 0
    // let list1 = () => {
    //     let list = 'Daftar barang di Toko ungu: \n'
    //     goods.forEach((item, index) => {
    //         list += `${index + 1}. ${item[0]} = Rp${item[1].toLocaleString()}/buah. Stok = ${item[2]} \n`
    //     })
    //     return list
    // }
    // console.log(list1())


    // let x =[[1,2,3,4,5],[`a`,`b`,`c`]]
    // x.forEach(item => {
    //     item.forEach(item2 => {
    //         console.log(item2)
    //     })
    // })

    let y = [{name : `Pogba`, age : 28},{name:`Ronaldo`, age : 36},{name:`Nesta`, age : 46}]
    y.forEach(item => {
        for(let prop in item){
            console.log(item[prop])
            // console.log(prop)
        }
    })
