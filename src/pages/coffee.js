import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


const coffeeImage = {
    borderRadius: "5%",
    width: '10rem',

}

const coffeeMenu = {
    width: "40rem", 
    overflow: "hidden",
    background: "#0f0404",
    color: "#f0f0f0",
    marginBottom: "1rem",
    padding: "0.5rem"
}
const coffeeDetails = {
    marginLeft: "1rem",
}
export default function Coffee() {
    /*
    1. Fetch from https://api.sampleapis.com/coffee/hot
    2. Trsnsform into JSX
    */
    let items = []
    let [coffeeTitles, setCoffeeTitles] = React.useState([])

    React.useEffect(async () => {
        // Run once after the page finished loading
        // Fetch from https://api.sampleapis.com/coffee/hot
        let res = await fetch('https://api.sampleapis.com/coffee/hot')
        let coffees = await res.json()
        for (let i = 0; i < coffees.length; i++) {
            console.log(coffees[i].title)
            items.push(
                <div style={coffeeMenu} >
                    <div style={{ width: "11rem", float: "left" }}> <img style={coffeeImage} src={coffees[i].image} /> </div>
                    <div style={coffeeDetails}>
                        <h3>{coffees[i].title}</h3>
                         {coffees[i].description} </div>
                </div>
            )
        }

        setCoffeeTitles(items)
    }, [])

    return (
        <div style={{ margin: "1rem" }}>
            <h1>Coffee</h1>
            <Button>CLICK ME</Button>
            <main>
                {coffeeTitles}
            </main>
        </div>
    )
}

