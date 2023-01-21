import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import CoffeeCard from '../../components/CoffeeCard';
import { useLocalStorage } from 'react-use';


const dummyPrice = 59

function PosPage() {

    // window.localStorage['coffee'] = 'Latte'
    const [coffee, setCoffee] = useLocalStorage('coffee', 'Latte')

    let [coffeeTitles, setCoffeeTitles] = React.useState([])
    let [subMenu, setSubMenu] = React.useState('iced')
    // let [cart, setCart] = React.useState([])
    let [cart, setCart] = useLocalStorage('cart', [])

    function addToCard(coffee) {
        // console.debug(coffee)
        cart.push(coffee)
        console.table(cart)
        setCart([...cart])
    }

    React.useEffect(() => {
        let items = []
        fetch(`https://api.sampleapis.com/coffee/${subMenu}`)
            .then(res => res.json())
            .then((coffees) => {
                for (let i = 0; i < coffees.length; i++) {
                    // console.log(coffees[i].title)
                    items.push(
                        <CoffeeCard
                            key={i}
                            image={coffees[i].image}
                            title={coffees[i].title}
                            description={coffees[i].description}
                            price={dummyPrice}
                            handleClick={() => { addToCard(coffees[i]) }}
                        />
                    )
                }
                setCoffeeTitles(items)
            })
    }, [subMenu])


    return <Container>
        <h1>POS</h1>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => { setSubMenu('hot') }}>Hot</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('iced') }}>Iced</Button>
        </ButtonGroup>
        <Row>
            <Col>
                <Row>
                    {coffeeTitles}
                </Row>
            </Col>
            <Col sm={3}>
                <h2>Cart {coffee}</h2>
                {cart.map((item, i) => {
                    return <Row key={i}>
                        <Col>{item.title}</Col>
                        <Col>{dummyPrice}</Col>
                    </Row>
                })}
                <Row>
                    Total: {cart.length * dummyPrice} Baht
                </Row>
            </Col>
        </Row>
    </Container >
}

export default PosPage