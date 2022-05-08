import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { id, name, price, description, img, quantity } = product;
    const navigate = useNavigate();
    const navigateToManagePoduct = id => {
        navigate(`/manageproduct/${id}`)

    }
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
                <button className='btn-update'
                    onClick={() => navigateToManagePoduct(id)}>
                    <Card.Footer>
                        <small className="text-muted">Update</small>
                    </Card.Footer>
                </button>
            </Card>
        </div>
    );
};

export default Product;