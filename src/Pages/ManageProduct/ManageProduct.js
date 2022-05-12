import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ManageProduct.css';

const ManageProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
    return (
        <div>
            <div>
                <img src={product.imageURL} alt="" style={{ width: '200px', height: '200px' }} />
                <h3>Product : {product.name}</h3>
                <p>Price : {product.price}</p>
                <p>Stock : {product.stock}</p>
                <p>Description : {product.description}</p>
                <p>Seller : {product.seller}</p>
            </div>


            <div>
                <button>Delivered</button>

            </div>
            <div>
                <form action="">
                    <input type="button" value="Restock" />
                    <input type="text" name="restock" id="" />

                </form>

            </div>
        </div>
    );
};

export default ManageProduct;