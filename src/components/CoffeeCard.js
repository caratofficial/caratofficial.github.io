import * as React from 'react'
import { Card, Button } from 'react-bootstrap';

function CoffeeCard(props) {
    const { title, image, description, price,  handleClick } = props;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title} - {price} Baht</Card.Title>
                {/* <Card.Text>description}</Card.Text> */}
                <Button variant="primary" onClick={handleClick}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default CoffeeCard