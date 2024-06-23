import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BookingModal from "./BookingModal";

const SingleServiceDetails = () => {
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchServiceDetails = async () => {
            try {
                const response = await axiosPublic.get(`/services/${id}`);
                setService(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchServiceDetails();
    }, [id, axiosPublic]);

    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        return <div className="text-red-400 text-2xl font-semibold min-h-[49vh] flex items-center justify-center">Error: { error }</div>;
    }

    return (
        <>
            <Helmet>
                <title>GhorFix | Single Service Details</title>
            </Helmet>

            <div className="container my-8 lg:my-16 mx-auto px-2 md:px-4">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:w-1/4 md:h-auto px-4">
                        <div className="mb-4 flex justify-center">
                            <img className="md:w-full md:h-full h-56 object-cover object-center rounded-3xl" src={ service.imgURL } alt={ `${service.serviceName} logo` } />
                        </div>
                        <div className="mb-4 w-full px-2">
                            <button onClick={ () => setIsModalOpen(true) } className="mt-2 bg-primary-900 text-text-50 font-medium px-4 py-2 rounded-full flex items-center w-full justify-center">
                                Book Now
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-text-900 mb-2">{ service.serviceName }</h2>
                        <p className="text-gray-600 mb-4 flex items-center gap-2"><span className="material-symbols-outlined">
                            pin_drop
                        </span>{ service.serviceArea }</p>
                        <div>
                            <span className="font-bold text-gray-700">Service Description:</span>
                            <p className="text-gray-600 text-sm mt-2">{ service.description }</p>
                        </div>
                        <div className="mt-4 text-sm flex items-center gap-1">
                            <span className="font-bold text-gray-700 mr-2">Service Provided by </span>
                            <img className="w-4 h-4 rounded-full" src={ service.providerImage} />
                            <span className="text-gray-600">{ service.providerName }</span>
                        </div>
                    </div>
                </div>
            </div>
            <BookingModal service={ service } isOpen={ isModalOpen } onClose={ () => setIsModalOpen(false) } />
        </>
    );
};

export default SingleServiceDetails;