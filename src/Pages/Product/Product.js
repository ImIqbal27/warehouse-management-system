import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Product.css';

const Product = ({ product }) => {
    const { id, name, price, description, img, quantity } = product;
    return (
        <div className='product-container'>
            <Card>
                <Card.Img variant="top" className='w-100' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Des:   {description}
                    </Card.Text>
                    <Card.Text>
                        Price:   {price}
                    </Card.Text>
                    <p>Qty :{quantity}</p>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">update</small>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Product;