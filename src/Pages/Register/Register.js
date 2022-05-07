import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-grid'>
            <div className='container w-50'>
                <img src='' alt="" />
            </div>

            <div className='container  w-50  '>
                <h2 className='text-center mt-2'>Please Register</h2>
                <Form >
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required />
                    </Form.Group>

                    <Button variant="primary w-100 mx-auto d-block  mb-2" type="submit">
                        Login
                    </Button>
                </Form>
                {/* {errorElement} */}
                <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' > Login</Link></p>

            </div>

        </div>
    );
};

export default Register;