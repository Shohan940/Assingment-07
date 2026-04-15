import React from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import call from '../../assets/call.png';
import text from '../../assets/text.png';
import video from '../../assets/video.png';

const MoreDetails = () => {
    const { id } = useParams();
    // console.log(params)
    const cads = useLoaderData();
    const expect = cads.find((exat) => exat.id == id)
    // console.log(expect);
    return (
        <div className='max-w-300 mx-auto'>
            <div className='flex justify-center'>
                <div className="card p-15 shadow text-center space-y-3">
                    <div className="flex justify-center">
                        <img className='rounded-full w-40 h-40' src={expect.picture} alt="" />
                    </div>
                    <h2 className='font-bold text-3xl'>{expect.name}</h2>
                    <div className="flex justify-center gap-2 ">
                        {
                            expect.tags.map((tag, index) => <button key={index} className="rounded-full bg-green-400 gap-7 p-1">{tag}</button>)
                        }
                    </div>
                    <div>
                        <button className="bg-red-400 rounded-full p-1">{expect.status}</button>
                        <p className='font-bold text-gray-500'>{expect.bio}</p>
                        <p className='font-bold text-gray-500'>{expect.email}</p>
                        <p></p>
                    </div>
                    <button className='btn '>Snooze 2 Weeks</button>
                    <button className='btn '>Archive</button>
                    <button className='btn'>Delete</button>
                </div>
                <div className='space-y-20 p-10'>
                    <div className='flex gap-4 text-center font-bold'>
                        <div className='card p-4 shadow'>
                            <span className='text-3xl'>{expect.days_since_contact}</span>
                            <p className='text-gray-400'>Days Since Contact</p>
                        </div>
                        <div className='card p-4 shadow'>
                            <span className='text-3xl'>{expect.goal}</span>
                            <p className='text-gray-400'>Goal (Days)</p>
                        </div>
                        <div className='card p-4 shadow'>
                            <span className='text-3xl'>{expect.next_due_date}</span>
                            <p className='text-gray-400'>Next Due</p>
                        </div>
                    </div>
                    <div className='card p-10 shadow'>
                        <div className='flex justify-between'>
                            <div>
                                <h2 className='text-xl'>Relationship Goal</h2>
                                <p className='text-gray-400'>Contact every (30 days)</p>
                            </div>

                            <button className='btn'>Edit </button>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl'>Quick Check-In </h2>
                        <div className='flex justify-between'>
                            <button className='btn text-2xl shadow mt-3 p-8 bg-gray-100'><img src={call} alt="" /> </button>
                            <button className='btn text-2xl shadow mt-3 p-8 bg-gray-100'><img src={text} alt="" /> </button>
                            <button className='btn text-2xl shadow mt-3 p-8 bg-gray-100'><img src={video} alt="" /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreDetails;