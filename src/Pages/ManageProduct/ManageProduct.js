import React from 'react';
import { useParams } from 'react-router-dom';
import './ManageProduct.css';

const ManageProduct = () => {
    const { productId } = useParams();
    return (
        <div>
            <h2>Manage Product= {productId}</h2>
        </div>
    );
};

export default ManageProduct;