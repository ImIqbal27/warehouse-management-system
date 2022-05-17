import React, { useEffect, useState } from 'react';
import useProducts from '../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('https://nameless-reaches-24864.herokuapp.com/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    //  #05595B
    const [products] = useProducts();

    return (
        <div >
            <h2 className=' text-start ms-5 ps-5' style={{ color: '#05595B' }}>Products</h2>

            <div className='products-container'>
                {
                    products.slice(0, 4).map(product => <Product key={product._id}
                        product={product}
                    ></Product>)
                }

            </div>
        </div>
    );
};

export default Products;