import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import WineCard from '../../components/WineCard';
import { useLocalStorage } from 'react-use';

const dummyPrice = 400

function PosPage() {

    //window.localStorage['wine'] = 'Reds'
    const [wine, setWine] = useLocalStorage('wine', 'pink')

    let [wineTitles, setWineTitles] = React.useState([])
    let [subMenu, setSubMenu] = React.useState('whites')
    //let [cart, setCart] = React.useState([])
    let [cart, setCart] = useLocalStorage('cart', [])
    

    function addToCart(wine) {
        //console.debug(wine)
        cart.push(wine)
        console.table(cart)
        setCart([...cart])

    }

    React.useEffect(() => {
        let items = []
        // Run once after the page finished loading
        // Fetch from https://api.sampleapis.com/coffee/hot
        fetch(`https://api.sampleapis.com/wines/${subMenu}`)
            .then(res => res.json())
            .then((wines) => {
                for (let i = 0; i < wines.length; i++) {
                    console.log(wines[i].wine)
                    items.push(
                        <WineCard
                            key={i}
                            wine={wines[i].wine}
                            image={wines[i].image}
                            winery={wines[i].winery}
                            price={dummyPrice}
                            handleClick={() => { addToCart(wines[i]) }}
                        />
                    )
                }
                setWineTitles(items)
            })
    }, [subMenu])

    return <Container>
        <h1>POS</h1>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => { setSubMenu('sparkling') }}>sparkling</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('whites') }}>whites</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('reds') }}>reds</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('rose') }}>rose</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('dessert') }}>dessert</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('port') }}>port</Button>
        </ButtonGroup>
        <Row>
            <Col>
                <Row>
                    {wineTitles}
                </Row>
            </Col>
            <Col sm={3}>
                <h2>Cart {wine}</h2>
                {cart.map((item, i) => {
                    return <Row key={i}>
                        <Col>{item.wine}</Col>
                        <Col>{dummyPrice}</Col>
                    </Row>
                })}
                <Row>
                    Total: {cart.length * dummyPrice} Baht
                </Row>
            </Col>
        </Row>
    </Container>
}

export default PosPage