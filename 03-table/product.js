// define data in JSON array
var products = [
    {
        name: "Samsung TV 50",
        quantity: 1,
        ppu: 15000
    },
    {
        name: "Xiaomi Fan",
        quantity: 2,
        ppu: 500
    },
    {
        name: "iPhone 14 Pro Max Ultra",
        quantity: 1,
        ppu: 50000
    },
    {
        name: "Logitec Gaming Mouse",
        quantity: 1,
        ppu: 4000
    }
]

function loadData() {
    var elem = document.getElementById("myName")
    elem.innerHTML = "Thanyaluck Arunrattanakul"

    var productList = document.getElementById("productList")

    for (let p in products) {
       var row = document.createElement("tr")
       var data = document.createElement("td")
       data.innerHTML = products[p].name

       let quantity = document.createElement("td")
       quantity.innerHTML = products[p].quantity

       let ppu = document.createElement("td")
        ppu.innerHTML = products[p].ppu

       let total = document.createElement("td")
       total.innerHTML = products[p].ppu * products[p].quantity 


       row.appendChild(productName)
       row.appendChild(quantity)
       row.appendChild(ppu)
       row.appendChild(total)
       productList.appendChild(row)
    }

}