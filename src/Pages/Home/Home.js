import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import CustomerReview from '../CustomerReview.js/CustomerReview';
import OurServices from '../OurServices/OurServices';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <OurServices></OurServices>
            <Categories></Categories>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;