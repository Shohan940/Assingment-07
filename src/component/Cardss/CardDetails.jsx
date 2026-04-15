
import { Link } from 'react-router';




const CardDetails = ({ card }) => {
    // const params = useParams();

    // const cards = useLoaderData();
    // console.log(params);
    // console.log(card);
    return (
        <div>
            <Link to={`/moredetails/${card.id}`} className="card p-5 shadow text-center space-y-3">
                <div className="flex justify-center">
                    <img className='rounded-full w-30 h-30' src={card.picture} alt="" />
                </div>
                <h2>{card.name}</h2>
                <div className="flex justify-center gap-2 ">
                    {
                        card.tags.map((tag, index) => <button key={index} className="rounded-full bg-green-400 gap-7 p-1">{tag}</button>)
                    }
                </div>

                <div>
                    <span className="bg-red-400 rounded-full p-1">{card.status}</span>
                </div>
            </Link >
        </div>
    );
};

export default CardDetails;