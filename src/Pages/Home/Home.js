import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Categories></Categories>
        </div>
    );
};

export default Home;