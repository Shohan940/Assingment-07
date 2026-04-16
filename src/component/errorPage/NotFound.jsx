import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div style={{ textAlign: "center", padding: "50px" }}>
                <h1 className='text-5xl font-bold text-[#244D3F]'>404</h1>
                <h2>Page Not Found</h2>
                <button className='btn btn-soft btn-success mt-8' onClick={() => navigate('/')}>Go Home</button>
                
            </div>
        </div>
    );
};

export default NotFound;