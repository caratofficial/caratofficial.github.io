import * as React from 'react'
import { Card, Button } from 'react-bootstrap';

function WineCard(props) {
    const {wine, image, winery, price, handleClick} = props;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{wine} - {price} Baht</Card.Title>

                {/*<Card.Text>
                {wines[i].winery}
    </Card.Text>*/}
                <Button variant="primary" onClick={handleClick}>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default WineCard