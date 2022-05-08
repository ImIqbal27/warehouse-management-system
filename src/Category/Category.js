import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Category = ({ category }) => {
    const { id, name, img } = category;


    return (
        <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                {/* <Button variant="primary">Go</Button> */}
            </Card.Body>
        </Card>
    );
};

export default Category;