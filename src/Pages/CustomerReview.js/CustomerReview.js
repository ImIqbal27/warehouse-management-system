import React from 'react';
import Review from './Review';
import './CustomerReview.css';

const CustomerReview = () => {
    const reviews = [
        {
            id: 1,
            name: 'Robert Downey',
            revieww: "This Warehouseis such a gem so helpful, kind and considerate. After trying three stores previously.Such an asset to The warehouse.",
            img: 'https://media1.popsugar-assets.com/files/thumbor/HwtAUAufmAZv-FgGEIMJS2eQM-A/0x1:2771x2772/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/30/878/n/1922398/eb11f12e5e825104ca01c1.02079643_/i/Robert-Downey-Jr.jpg'
        },
        {
            id: 2,
            name: 'Chris Evans',
            revieww: "Quick Delivery and good quality...warehouse  are awesome. Weren't let in for no reason even after queuing again",
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Chris_Evans_SDCC_2014.jpg/1200px-Chris_Evans_SDCC_2014.jpg'
        },
        {
            id: 3,
            name: 'Chirs Hemsworth',
            revieww: "We had an issue with an appliance which took a lot of resolving with the suppliers.We are so  of the hard work ,her to go the extra mile for us!",
            // img: 'https://images.hdqwalls.com/wallpapers/chris-hemsworth-mens-health-2019-a5.jpg'
            img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ6TeDFGGXiuKR36W9VBw93YeRuOf_-eaDmfqJ1InJONlGKnqV'
        },
        {
            id: 4,
            name: 'Mark Ruffalo',
            revieww: "Good prompt service .This Warehouseis such a gem so helpful.Excellent choice of binding machines and binders",
            img: 'https://i.pinimg.com/564x/3c/fa/6e/3cfa6e41d376e56d3a401739d3a4faf1--mark-ruffalo-beautiful-men.jpg'
        },
    ]
    return (
        <div>
            <h3 className=' text-start mt-5 ms-5 ps-5' style={{ color: '#05595B' }}>What Our Client Says</h3>
            <div className='customer-all-reviews '>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default CustomerReview;