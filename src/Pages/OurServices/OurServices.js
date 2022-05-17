import React from 'react';
import Service from './Service';
import './OurServices.css';

const OurServices = () => {
    const services = [
        {
            id: 1,
            name: 'Trucking Service',
            des: 'Transport begun providing transportation solutions to transport contract warehousing customer in the 1980s and expanded over time to include dedicated ',
            img: 'https://www.pngitem.com/pimgs/m/10-108338_truck-icon-png-delivery-truck-icon-png-transparent.png'
        },
        {
            id: 2,
            name: 'Shipping Delivery',
            des: 'Transport begun providing transportation solutions to transport contract warehousing customer in the 1980s and expanded over time to include dedicated ',
            img: 'https://cdn3.iconfinder.com/data/icons/shipping-delivery-2/24/Ship-512.png'
        },
        {
            id: 3,
            name: 'Paking and Store ',
            des: 'Transport begun providing transportation solutions to transport contract warehousing customer in the 1980s and expanded over time to include dedicated ',
            img: 'https://static.thenounproject.com/png/1825079-200.png'
        },
        {
            id: 4,
            name: 'Air Transport International',
            des: 'Transport begun providing transportation solutions to transport contract warehousing customer in the 1980s and expanded over time to include dedicated ',
            img: 'http://cdn.onlinewebfonts.com/svg/img_10714.png'
        },
    ]
    return (
        <div className='our-services-full'>
            <h2 className=' text-start ms-5 ps-5 text-decoration-underline' style={{ color: '#05595B' }}>Our Services </h2>
            <div className="our-services">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default OurServices;