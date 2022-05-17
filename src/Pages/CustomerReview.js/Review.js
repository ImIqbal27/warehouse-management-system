import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css';

const Review = ({ review }) => {
    const { name, revieww, img } = review;
    return (
        <div className='review-card mx-auto mb-3 '>
            <img src={img} alt="" />
            <p style={{ color: '#05595B' }}> <b>{name}</b></p>
            <p > <i> "{revieww}"</i> </p>
        </div>
    );
};

export default Review;