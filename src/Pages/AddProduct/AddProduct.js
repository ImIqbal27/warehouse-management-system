import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const imageURL = event.target.imageURL.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;

        console.log(name, imageURL, description, price, quantity, supplier);
        const productAllPart = { name, imageURL, description, price, quantity, supplier };
        const serverURL = `https://nameless-reaches-24864.herokuapp.com/product`;

        fetch(serverURL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productAllPart)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                // event.target.reset();
                // toast('Product Added Successfully');
                alert('Product Added Successfully');


            });


    }
    return (
        <div className='w-50 ms-5 ps-5'>
            <h2>Add product</h2>
            <Form onSubmit={handleAddProduct}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product name</Form.Label>
                    <Form.Control type="text" name="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control type="text" name="imageURL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control type="text" name="description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="number" name="price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Quantity</Form.Label>
                    <Form.Control type="number" name="quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Supplier name</Form.Label>
                    <Form.Control type="text" name="supplier" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Add Product
                </Button>

            </Form>


        </div>

    );
};

export default AddProduct;