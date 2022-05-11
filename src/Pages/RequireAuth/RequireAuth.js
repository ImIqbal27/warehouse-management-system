import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);


    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    ///////////  email verification //////////
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center'>
            <h2 className='text-danger'>Your email is not verified !!</h2>
            <h5 className='text-success'>Please verify your email.</h5>
            <button
                onClick={async () => {
                    await sendEmailVerification();
                    // toast('Sent email');
                    alert('Sent email');
                }}
            >
                Verify email
            </button>
            {/* <ToastContainer></ToastContainer> */}
        </div>

    }


    ///////////////////
    return children;
};

export default RequireAuth;