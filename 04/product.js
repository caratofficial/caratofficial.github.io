// define data in JSON array
var products = [
    {
        "name": "Sunshine Care Bear",
        "quantity": "1",
        "ppu": "15000",
        "discount": "500"
    },
    {
        "name": "Christmas Care Bear",
        "quantity": "2",
        "ppu": "500",
        "discount": "150"
    },
    {
        "name": "Bed time Care Bear",
        "quantity": "1",
        "ppu": "50000",
        "discount": "100"
    },
    {
        "name": "Grumpy Care Bear",
        "quantity": "1",
        "ppu": "4000",
        "discount": "300"
    }
]

// This function will pick the value from the <selet>
// and add to the table
function addToCart() {

    let productObj = {
        name: $('#products').val(),
        quantity: $('#qty').val(),
        ppu: $('#ppu').val(),
        discount: $('#discount').val(),
    }
    

    // Clear existing items in the table
    // let productList = document.getElementById("productList")
    // for (let x = 0; x < products.length; x++) {
    //     productList.deleteRow(1)
    // }
    $('#productBody').html("")

    products.push(productObj)
    loadData()
}

function cleartable() {
    $("#productBody").empty();
    document.getElementById("gross").innerHTML=""
    loadData()
    $('#productBody').html("")



// TODO Should use product ID instead of name
function deleteProduct(index) {
    console.log("DELETE",index)
    delete products[index]  // delete the element from array
    $('#productBody').html("")
    loadData()
}

function loadData() {
    let allRows = ""
    let gross = 0
    let totaldis = 0
    let subdis = 0
    for (let p in products) {
        let cellItem = `<tr><td><img style="width: 1.5em;" src='sign-delete-icon.png' onclick='deleteProduct("${p}")'> ` + products[p].item + "</td>"
        let cellQuantity = '<td class="text-right">' + products[p].quantity + "</td>"
        let cellPPU = '<td class="text-right">' + products[p].ppu + "</td>"
        let total = products[p].ppu * products[p].quantity
        gross += total
        let cellTotal = '<td class="text-right">' + total + "</td>"
        let cellDiscount = '<td class="text-right">' + products[p].discount + "</td>"
        //let fdiscount = (0 + products[p].discount)
        totaldis += parseInt(products[p].discount)
        subdis = gross - totaldis
        let row = `<tr>${cellItem}${cellQuantity}${cellPPU}${cellDiscount}${cellTotal}</tr>`
        allRows += row
    }
    $('#productBody').html(allRows)

    $("#gross").html(gross)

    let vat = gross * 0.07
    let net = gross + vat
    $("#vat").html(vat.toFixed(2))
    $("#net").html(net.toFixed(2))
    $("#dis").html(totaldis)
    $('#sub').html(subdis)

}

function loadDataOld() {

    // $('#productBody').html('<tr><td>xxx</td><td>xxx</td><td>xxx</td><td>xxx</td></tr>')
    
    let productList = document.getElementById("productList")
    let gross = 0
    for (let p in products) {
        let row = document.createElement("tr")
        let productName = document.createElement("td")
        productName.innerHTML = products[p].name

        let quantity = document.createElement("td")
        quantity.innerHTML = products[p].quantity
        quantity.classList.add("text-right")

        let ppu = document.createElement("td")
        ppu.innerHTML = products[p].ppu
        ppu.classList.add("text-right")

        let total = document.createElement("td")
        total.innerHTML = products[p].ppu * products[p].quantity
        total.classList.add("text-right")
        gross += products[p].ppu * products[p].quantity

        row.appendChild(productName)
        row.appendChild(quantity)
        row.appendChild(ppu)
        row.appendChild(total)
        productList.appendChild(row)
}

    let grossElem = document.getElementById("gross")
    grossElem.innerHTML = gross

    let vat = gross * 0.07
    let net = gross + vat
    document.getElementById("vat").innerHTML = vat.toFixed(2)
    document.getElementById("net").innerHTML = net.toFixed(2)

    let discountelm = document.getElementById("dis")
    discountelm.innerHTML = dis

}

}
