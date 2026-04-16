import React, { use } from 'react';
import CardCount from './CardCount';
import CardDetails from './CardDetails';

const promise = fetch('/Data.json').then(res => res.json())

const Cards = () => {
    const promiseCard = use(promise);
    return (
        <div>
            <CardCount />
            <div className='max-w-300 mx-auto mt-10'>
                <h2 className='text-2xl font-semibold'>Your Friends</h2>
                <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-15'>

                    {
                        promiseCard.map((card, index) => <CardDetails key={index} card={card} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default Cards;