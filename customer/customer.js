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

function addCustomer() {
    let customerObj = {
        name: $('#exampleFormControlInput1').val(),
        email: $('#exampleFormControlInput2').val(),
        phone: $('#exampleFormControlInput3').val()
    }
    
    $('#data-table').html("")


    customers.push(customerObj)
    console.log(customers)

    let index = customers.length - 1
    loadData()

}

    function deleteCustomer(index) {
        console.log("DELETE",index)
        delete customers[index]  // delete the element from array
        $('#data-table').html("")
        loadData()
    }

    function loadData() {
        let allRows = ""
        for (let p in customers) {
            let cellName = `<td><img class='icon' src='delete.png' onclick='deleteCustomer("${p}")'> ` + customers[p].name + "</td>"
            let cellEmail = '<td>' + customers[p].email + "</td>"
            let cellPhone = '<td class="text-right">' + customers[p].phone + "</td>"
            let row = `<tr>${cellName}${cellEmail}${cellPhone}</tr>`
            allRows += row
        }
        $('#data-table').html(allRows)
    
       
    }
    