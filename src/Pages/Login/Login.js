import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);


    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Sent email');
        }
        else {
            alert('Please Enter Your Email !');
        }

    }
    return (
        <div className='login-grid'>
            <div className='container w-50'>
                <img src='' alt="" />
            </div>

            <div className='container  w-50  '>
                <h2 className='text-center mt-2'>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" required />
                    </Form.Group>

                    <Button variant="primary w-100 mx-auto d-block  mb-2" type="submit">
                        Login
                    </Button>
                </Form>
                {/* {errorElement} */}
                <p>New To Warehouse? <Link to='/register' className='text-primary text-decoration-none' > Register</Link></p>
                <p>Forget Password ? <button t className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}> Reset Password</button></p>


            </div>

        </div>
    );
};

export default Login;