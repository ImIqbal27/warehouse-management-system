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
    };
    const handleRestock = event => {
        event.preventDefault();
        const quantityNumber = parseInt(product.quantity);
        console.log(typeof (quantityNumber));
        console.log('Qtyyyyyy  =', quantityNumber);

        const restock = event.target.restock.value;
        const restockNumber = parseInt(restock);
        console.log('restockk= =', restockNumber)
        console.log(typeof (restockNumber))

        let updateRestock = quantityNumber + restockNumber;

        console.log(typeof (updateRestock));
        console.log("updattttt ==", updateRestock);

        const url = `https://nameless-reaches-24864.herokuapp.com/products/${productId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updateRestock })
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Restock successfully');

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
                <form onSubmit={handleRestock}>

                    <input type="number" name="restock" id="" />
                    <input type="submit" value="Restock" />

                </form>

            </div>
        </div>
    );
};

export default ManageProduct;