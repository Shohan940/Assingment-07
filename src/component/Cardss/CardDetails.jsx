
import { Link } from 'react-router';
import { toast } from 'react-toastify';




const CardDetails = ({ card }) => {
    
    return (
        <div>
            <Link to={`/moredetails/${card.id}`} onClick={() => toast.success(`View profile ${card.name}`)} className={"card p-5 shadow text-center space-y-3"}>
                <div className="flex justify-center">
                    <img className='rounded-full w-30 h-30' src={card.picture} alt="" />
                </div>
                <h2 className='font-semibold text-xl'>{card.name}</h2>
                <p className='text-gray-500'>{card.days_since_contact}d ago</p>
                <div className="flex justify-center gap-2 ">
                    {
                        card.tags.map((tag, index) => <button key={index} className="rounded-full bg-green-300 gap-7 p-1">{tag}</button>)
                    }
                </div>

                <div>
                    <span className={` text-white rounded-full p-1 ${card.status == 'On-Track' ? 'bg-[#244D3F]': card.status=='Overdue'?'bg-red-500': 'bg-yellow-500'}`}>{card.status}</span>
                </div>
            </Link >
        </div>
    );
};

export default CardDetails;