import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleIcon from '../../images/g-logo.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }

    if (user) {
        navigate('/home')

    }

    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>

            </div>
            {errorElement}

            <div >
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-100 mx-auto d-block my-2'>
                    <img src={googleIcon} alt="" />
                    <span className='px-3'>Continue with Google</span>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;