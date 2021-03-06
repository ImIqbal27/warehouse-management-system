import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import './Categories.css';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('fake-category.txt.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div >
            <h2 className=' text-start ms-5 ps-5' style={{ color: '#05595B' }}>Categories</h2>
            <div className='categories-section'>
                {
                    categories.map(category => <Category key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;