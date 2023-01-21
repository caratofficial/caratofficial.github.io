import React, { useRef, useState } from "react"
import Layout from "../components/layout";

var products = [
  { name: "Samsung TV", price: 20000 },
  { name: "Audioengine A2+", price: 10000 },
  { name: "Huawei P30", price: 20000 },
]

function AboutPage() {
  let nameRef = useRef()
  let priceRef = useRef()
  let [productState, setProductState] = useState([])

  let total = 0;
  for (let p in productState) {
    total += productState[p].price
  }

  function addProduct() {
    let newName = nameRef.current.value
    let newPrice = priceRef.current.value
    // alert("Add Product "+newName+" "+newPrice)
    // Add data to the array
    productState.push({
      name: newName, price: parseFloat(newPrice)
    })
    
    // Does not work. Because we are setting
    // the same object to productState.
    // To fix, create a new array with the same value.
    // setProductState(productState)
    setProductState([...productState]) // works!
  }

  function deleteProduct(index) {
    productState.splice(index,1)
    setProductState([...productState]) // works!
  }

  return (
    <Layout>

      <h1>About Page</h1>
      <div>
        <div>
          Name: <input type="text" id="name" ref={nameRef}/>{" "}
          Price: <input type="number" id="price" ref={priceRef}/>{" "}
          <button onClick={addProduct}>+ ADD</button>
        </div>
        <table border="1">
          <thead>
            <tr>
            <th>Delete</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              productState.map((p,index) => (
                <tr>
                  <td><button onClick={()=>deleteProduct(index)}>Delete</button></td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  </tr>
              ))
            }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Total</td>
              <td>{total}</td>
            </tr>
          </tfoot>
        </table>
      </div>

    </Layout>
  )
}

export default AboutPage
