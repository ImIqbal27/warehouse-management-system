import React from 'react';

import useProducts from '../hooks/useProducts';

const Manage = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ??');
        if (proceed) {
            const url = `https://nameless-reaches-24864.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remining = products.filter(product => product._id !== id);
                    setProducts(remining);
                })

        }

    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Product</h2>
            {
                products.map(product => <div key={product._id} ><h6>{product.name} <button
                    onClick={() => handleDelete(product._id)}>X</button>  </h6>  </div>)
            }

        </div>
    );
};

export default Manage;