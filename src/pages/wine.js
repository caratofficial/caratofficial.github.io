import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const wineImage = {

    borderRadius: "5%",

    width: '10rem',

}

const wineMenu = {

    width: "40rem",

    overflow: "hidden",

    background: "#b30000",

    color: "#f0f0f0",

    marginBottom: "1rem",

    padding: "0.5rem"

}

const wineDetails = {

    marginLeft: "1rem",

}

export default function Wine() {

    /*

    1. Fetch from https://api.sampleapis.com/coffee/hot

    2. Trasnsform into JSX

    */

    let items = []

    let [wineTitles, setWineTitles] = React.useState([])

    React.useEffect(async () => {

        // Run once after the page finished loading

        // Fetch from https://api.sampleapis.com/coffee/hot

        let res = await fetch('https://api.sampleapis.com/wines/reds')

        let wines = await res.json()

        for (let i = 0; i < wines.length; i++) {

            console.log(wines[i].wine)

            items.push(

                <div style={wineMenu} >

                    <div style={{ width: "11rem", float: "left" }}> <img style={wineImage} src={wines[i].image} /> </div>

                    <div style={wineDetails}>

                        <h3>{wines[i].wine}</h3>

                         {wines[i].winery} </div>

                </div>

            )

        }

        setWineTitles(items)

    }, [])

    return (

        <div style={{ margin: "1rem" }}>
            <h1>Wine</h1>
            
            <main>
                {wineTitles}
            </main>
        </div>
    )

}