import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, des, img } = service;
    return (
        <div className='service-card '>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <b style={{ color: '#05595B' }}>{name}</b>
                <p > <small>{des}</small></p>
            </div>

        </div>
    );
};

export default Service;