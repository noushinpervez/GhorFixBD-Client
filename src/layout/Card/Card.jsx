import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ service }) => {
    const { _id, imgURL, serviceName, description, providerName, providerImage, price } = service;

    return (
        <div className="w-full flex flex-col md:flex-row gap-3 p-5 rounded-3xl border-b-4 border-secondary-700 bg-gradient-to-tl from-background-50 to-accent-200 shadow-lg justify-center md:items-center">
            {/* Service Image */ }
            <img className="h-48 object-cover rounded-2xl" src={ imgURL } alt={ serviceName } />

            <div className="flex flex-col gap-2 w-5/6">
                {/* Service Name */ }
                <h3 className="font-bold text-xl">{ serviceName }</h3>

                {/* Service Description */ }
                <p className="text-slate-600 text-ellipsis line-clamp-3 lg:line-clamp-2 lg:text-justify">
                    { description.length > 100 ? `${description.substring(0, 100)}...` : description }
                </p>

                {/* Service Price */ }
                <span className="text-secondary-700 font-semibold mt-2">{ price }</span>

                {/* View Detail Button */ }
                <Link to={ `/services/${_id}` }>
                    <button className="mt-2 bg-primary-900 text-text-50 font-medium px-4 py-2 rounded-full flex items-center">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </Link>

                {/* Service Provider Image & Name */ }
                <div className="flex items-center gap-3 justify-end -mt-3">
                    <img className="w-6 h-6 rounded-full object-cover" src={ providerImage } alt={ providerName } />
                    <span className="text-slate-600 text-xs">{ providerName }</span>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    service: PropTypes.object.isRequired,
};

export default Card;