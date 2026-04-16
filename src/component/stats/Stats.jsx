import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InteractionContext } from '../../Context/InteractionContext';

const Stats = () => {
    const { interactions } = useContext(InteractionContext);
    const callCount = interactions.filter(call=>call.type=='call').length;
    const textCount = interactions.filter(text=>text.type=='text').length;
    const videoCount = interactions.filter(video=>video.type=='video').length;
    // console.log(callCount);

    const data = [
        { name: 'call', value:callCount, fill: '#AC7F5E' },
        { name: 'text', value: textCount, fill: '#7E35E1' },
        { name: 'video', value: videoCount, fill: '#244D3F' },

    ];
    return (
        <div className='max-w-300 mx-auto'>
            <h1 className='text-2xl font-bold text-[#244D3F]'>Friendship Analytics</h1>
            <div className='flex justify-center shadow-xl m-6 p-6'>
                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Stats;