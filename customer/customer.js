var customers = []

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
            customers.push(data[d])
            let dataStr = `<tr>
                <td> <img src='delete.png' width='20em' onclick='deleteCustomer("${d}")'/> ${data[d].name} </td>
                <td>${data[d].email}</td>
                <td>${data[d].phone}</td>
            </tr>`
            $("#data-table tr:last").after(dataStr)
        }

        console.log(customers)
        loadData();
    });
});

function addToCustomer() {
    let customerObj = {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val()
    }
    
    $('#customerdata').html("")

   //
    customers.push(customerObj)
    loadData()

    let customersList = document.getElementById("customerList")
    for (let x = 0; x < customers.length; x++) {
    customersList.deleteRow()
     }

     //

}

    function deleteCustomer(index) {
        console.log("DELETE",index)
        delete customers[index]  // delete the element from array
        $('#customerdata').html("")
        loadData()
    }

    function loadData() {
        let allRows = ""
        for (let p in customers) {
            let cellName = `<td><img class='icon' src='delete.png' onclick='deletename("${p}")'> ` + products[p].name + "</td>"
            let cellEmail = '<td>' + products[p].email + "</td>"
            let cellPhone = '<td class="text-right">' + phone[p].ppu + "</td>"
            let row = `<tr>${cellName}${cellEmail}${cellPhone}</tr>`
            allRows += row
        }
        $('#customerdata').html(allRows)
    
       
    }
    