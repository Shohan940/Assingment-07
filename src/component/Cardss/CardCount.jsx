import React from 'react';

const CardCount = () => {
    return (
        <div className='max-w-300 mx-auto'>
            <div className='grid grid-cols-2 justify-items-center-safe lg:grid-cols-4 gap-5 text-center  '>
                <div className='card rounded space-y-3 p-8 max-w-50 shadow'>
                    <span className='font-bold text-2xl'>12</span>
                    <p className='text-gray-400'>Total Friend</p>
                </div>
                <div className='card rounded space-y-3 p-8 max-w-50 shadow'>
                    <span className='font-bold text-2xl'>3</span>
                    <p className='text-gray-400'>On Track</p>
                </div>
                <div className='card rounded space-y-3 p-8 max-w-50 shadow'>
                    <span className='font-bold text-2xl'>6</span>
                    <p className='text-gray-400'>Need Attension</p>
                </div>
                <div className='card rounded space-y-3 p-8 max-w-50 shadow'>
                    <span className='font-bold text-2xl'>10</span>
                    <p className='text-gray-400'>Total Friend</p>
                </div>
            </div>
        </div>
    );
};

export default CardCount;