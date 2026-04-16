import React, { useContext, useState } from 'react';
import { InteractionContext } from '../../Context/InteractionContext';
import call from '../../assets/call.png'
import text from '../../assets/text.png'
import video from '../../assets/video.png'

const TimeLine = () => {
    const [filter, setFilter] = useState('');

    const { interactions } = useContext(InteractionContext);
    
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
    const filterInteractions = filter
        ? interactions.filter(item => item.type === filter)
        : interactions;

    return (
        <div className="max-w-300 mx-auto">
            <h2 className="text-2xl mb-5">Timeline</h2>
            <fieldset className="fieldset">
                <select onChange={(e) => setFilter(e.target.value)} className="select">
                    <option value="">All</option>
                    <option>call</option>
                    <option>text</option>
                    <option>video</option>
                </select>
            </fieldset>
            {
                filterInteractions.map(item => (
                    <div key={item.id} className="card p-3 shadow mb-3">
                        <div className='flex items-center gap-3 '>
                            <img src={getIcon(item.type)} className="w-6 h-6" />
                            <div>
                                <p><b className='text-[#244D3F]'>{item.type}</b> with {item.name}</p>
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