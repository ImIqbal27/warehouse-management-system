import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { _id, name, price, description, imageURL, quantity } = product;
    const navigate = useNavigate();
    const navigateToManageProduct = id => {
        navigate(`/manageproduct/${id}`)

    }
    return (
        <div className='product-container  mx-auto'>
            <Card>
                <Card.Img variant="top" className='w-100' src={imageURL} style={{ height: "250px", width: "200px" }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Price:   {price}
                    </Card.Text>
                    <p>Qty :{quantity}</p>
                </Card.Body >

                <Card.Footer style={{ backgroundColor: '#05595B' }} className='w-100'>
                    <button className='btn-update'
                        onClick={() => navigateToManageProduct(_id)}>
                        <b className='text-black bg-none' >Update</b>
                    </button>
                </Card.Footer>

                {/* <button className='btn-update'
                    onClick={() => navigateToManageProduct(_id)}>
                    <Card.Footer style={{ backgroundColor: '#557B83' }} className='w-100'>
                        <b className="text-white">Update</b>
                    </Card.Footer>
                </button> */}
            </Card>
        </div>
    );
};

export default Product;