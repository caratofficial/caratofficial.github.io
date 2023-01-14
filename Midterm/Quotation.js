var products = []

$(document).ready(function () {
    console.log("ready!");
    // load data
    $.ajax({
        url: "data.json"
    }).done(function (data) {
        //$(this).addClass("done");
        console.log("DONE",data)
        for(let d in data){
            // save the data record into our local variable
            products.push(data[d])
            let dataStr = `<tr>
    //            <td> <img src='delete.png' width='20em' onclick='deleteCustomer("${d}")'/> ${data[d].Item} </td>
                <td>${data[d].Priceperunit}</td>
                <td>${data[d].Quantity}</td>
            </tr>`
            $("#data-table tr:last").after(dataStr)
        }

        console.log(products)
        loadData();
    });
});

function addItem() {
    let ItemObj = {
        Item: $('#exampleFormControlInput1').val(),
        Priceperunit: $('#exampleFormControlInput2').val(),
        Quantity: $('#exampleFormControlInput3').val()
    }
    
    $('#data-table').html("")


    products.push(ItemObj)
    console.log(products)

    let index = products.length - 1
    loadData()

}

    function deleteCustomer(index) {
        console.log("DELETE",index)
        delete products[index]  // delete the element from array
        $('#data-table').html("")
        loadData()
    }

    function loadData() {
        let allRows = ""
        for (let p in products) {
            let cellItem = `<td><img class='icon' width='20em' src='delete.png' onclick='deleteCustomer("${p}")'> ` + products[p].Item + "</td>"
            let cellPriceperunit = '<td>' + products[p].Priceperunit + "</td>"
            let cellQuantity = '<td class="text-right">' + products[p].Quantity + "</td>"
            let row = `<tr>${cellItem}${cellPriceperunit}${cellQuantity}</tr>`
            allRows += row
        }
        $('#data-table').html(allRows)
    
       
    }
    