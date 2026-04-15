import React from 'react';

const CardCount = () => {
    return (
        <div className='max-w-300 mx-auto'>
            <div className='flex justify-between text-center'>
                <div className='card shadow-xl rounded space-y-3 p-8'>
                    <span className='font-bold text-2xl'>10</span>
                    <p className='text-gray-400'>Total Friend</p>
                </div>
                <div className='card shadow-xl rounded space-y-3 p-8'>
                    <span className='font-bold text-2xl'>10</span>
                    <p className='text-gray-400'>Total Friend</p>
                </div>
                <div className='card shadow-xl rounded space-y-3 p-8'>
                    <span className='font-bold text-2xl'>10</span>
                    <p className='text-gray-400'>Total Friend</p>
                </div>
                <div className='card shadow-xl rounded space-y-3 p-8'>
                    <span className='font-bold text-2xl'>10</span>
                    <p className='text-gray-400'>Total Friend</p>
                </div>
            </div>
        </div>
    );
};

export default CardCount;