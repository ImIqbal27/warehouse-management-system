import React, { useEffect, useState } from 'react';
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
            <h2>Manage Product= {product.name}</h2>
        </div>
    );
};

export default ManageProduct;