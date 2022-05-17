import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Category = ({ category }) => {
    const { id, name, img } = category;


    return (
        <Card style={{ width: '12rem' }} className='mx-auto me-2'>
            <Card.Title style={{ color: '#062C30' }}>{name}</Card.Title>
            <Card.Img variant="top" src={img} />
            <Card.Body>

                {/* <Button variant="primary">Go</Button> */}
            </Card.Body>
        </Card>
    );
};

export default Category;