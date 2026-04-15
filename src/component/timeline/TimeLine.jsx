import React, { useContext } from 'react';
import { InteractionContext } from '../../Context/InteractionContext';

import call from '../../assets/call.png'
import text from '../../assets/text.png'
import video from '../../assets/video.png'

const TimeLine = () => {
    const { interactions } = useContext(InteractionContext);
    // const friends = useLoaderData();
    // console.log(friends);
    const getIcon = (type) => {
        switch (type) {
            case 'call':
                return call;
            case 'text':
                return text;
            case 'video':
                return video;
            default:
                return null;
        }
    };


    return (
        <div className="max-w-200 mx-auto">
            <h2 className="text-2xl mb-5">Timeline</h2>

            {
                interactions.map(item => (
                    <div key={item.id} className="card p-3 shadow mb-3">
                        <div className='flex items-center gap-3 '>
                            <img src={getIcon(item.type)} className="w-6 h-6" />
                            <div>
                                <p>{item.type} with {item.name}</p>
                                <p className="text-gray-400 text-sm">
                                    {/* {item.time.toLocaleString()} */}
                                    {item.date}
                                </p>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default TimeLine;