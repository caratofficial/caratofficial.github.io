var products = []


$(document).ready(function() {
    console.log("ready!");
    // load data
    $.ajax({
        url: "data.json"
    }).done(function(data) {
        //$(this).addClass("done");
        console.log("DONE", data)
        let dataStr = "";
        for (let d in data) {
            console.log(d)
                // save the data record into our local variable
            products.push(data[d])
            dataStr += `<tr>
                <td> <a onclick='deletequantity("${d}")' ><img src='delete.png' width='20em'/> </td>
                <td>${data[d].quantity}</td> 
                <td>${data[d].name}</td>
                <td>${data[d].price}</td>
                <td>${data[d].discount}</td>
                <td>${data[d].price - data[d].discount}</td>
            </tr>`
            $("#data-table tr:last").after(dataStr)
        }

        document.getElementById("quotationdata").innerHTML = dataStr;

        console.log(products)
        loadData();
    });
});

function addItem() {
    let ItemObj = {
        quantity: $('#Quantity').val(),
        name: $('#Name').val(),
        price: $('#Price').val(),
        discount: $('#Discount').val()
    }

    $('#data-table').html("")


    products.push(ItemObj)
    console.log(products)

    let index = products.length - 1
    loadData()

}

function deleteItem(index) {
    console.log("DELETE", index)
    delete products[index] // delete the element from array
    $('#data-table').html("")
    loadData()
}

function loadData() {
    let dataStr = ""
    let totaldiscount = 0;
    let gross = 0;
    for (let p in products) {
        dataStr += `<tr>
            <td> <a onclick='deletequantity("${p}")' ><img src='delete.png' width='20em'/> </td>
            <td>${products[p].quantity}</td> 
            <td>${products[p].name}</td>
            <td>${products[p].price}</td>
            <td>${products[p].discount}</td>
            <td>${parseFloat(products[p].price - products[p].discount).toFixed(2)}</td>
        </tr>`
        $("#data-table tr:last").after(dataStr)
        totaldiscount += products[p].discount;
        gross += products[p].price - products[p].discount;
    }
    let vat = gross * 0.07;
    document.getElementById("quotationdata").innerHTML = dataStr;

    document.getElementById("totaldiscount").innerHTML = parseFloat(totaldiscount).toFixed(2);
    document.getElementById("gross").innerHTML = parseFloat(gross).toFixed(2);
    document.getElementById("vat").innerHTML = parseFloat(vat).toFixed(2);
    document.getElementById("net").innerHTML = parseFloat(gross + vat).toFixed(2);

}

function deletequantity(index) {
    console.log("DELETE", index)
    delete products[index] // delete the element from array
    $('#data-table').html("")
    loadData()
}

function clearitems() {
    products = []
    $('#data-table').html("")
    loadData()
}