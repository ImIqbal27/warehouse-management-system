import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ManageProduct.css';

const ManageProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://nameless-reaches-24864.herokuapp.com/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, []);
    //productId
    const handleDeliver = () => {
        const qty = product.quantity;
        const qtyToNumber = parseInt(qty);
        const newQtyNumber = qtyToNumber - 1;
        console.log(newQtyNumber);

        const url = `https://nameless-reaches-24864.herokuapp.com/products/${productId}`;
        // const url = `http://localhost:5000//products/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQtyNumber })
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('updated successfully');

            })



    }

    return (
        <div>
            <h1>Update Products</h1>
            <div>
                <img src={product.imageURL} alt="" style={{ width: '200px', height: '200px' }} />
                <h3>Product : {product.name}</h3>
                <p>Product Id: {product._id}</p>
                <p>Price : {product.price}</p>
                <p>Quantity : {product.quantity} </p>
                <p>Description : {product.description}</p>
                <p>Supplier : {product.supplier}</p>
            </div>



            <div>
                <button onClick={() => handleDeliver(productId)}>Delivered</button>

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