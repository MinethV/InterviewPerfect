import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = ({ auth }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleAuthentication = async () => {
            await auth.handleAuthentication();
            navigate('/');
        };
        
        handleAuthentication();
    }, [auth, navigate]);

    return (
        <div>
            <p>Loading...</p>
        </div>
    );
};

export default Callback;
