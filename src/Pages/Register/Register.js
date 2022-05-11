import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import regImg from '../../images/reg.jpg';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);

    }
    if (user) {
        navigate('/home')
    }
    if (error) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }
    return (
        <div className='reg-grid'>
            <div className='container w-50'>
                <img src={regImg} alt="" />
            </div>

            <div className='container  w-50 mx-auto mb-5 pb-5'>
                <h2 className='text-center mt-2'>Please Register</h2>
                <Form onSubmit={handleRegister} >
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Name </Form.Label>
                        <Form.Control type="text" name='name' required />

                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required />

                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" name='phone' required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' required />
                    </Form.Group>

                    <Button variant="primary w-100 mx-auto d-block  mb-2" type="submit">
                        Register
                    </Button>
                </Form>
                {errorElement}

                <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' > Login</Link></p>
                <SocialLogin></SocialLogin>

            </div>


        </div>
    );
};

export default Register;