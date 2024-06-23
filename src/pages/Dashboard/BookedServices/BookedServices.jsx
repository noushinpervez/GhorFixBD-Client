import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Title from "../../../components/Title";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Toast from "../../../components/Toast";

const BookedServices = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [bookedServices, setBookedServices] = useState([]);

    useEffect(() => {
        const fetchBookedServices = async () => {
            try {
                const response = await axiosPublic.get(`/booked-services/${user.email}`);
                setBookedServices(response.data);
                console.log(response.data);
            } catch (error) {
                Toast.fire({
                    icon: "error",
                    title: "Failed to fetch Booked services"
                });
            }
        };

        fetchBookedServices();
    }, [user.email, axiosPublic]);

    return (
        <>
            <Helmet>
                <title>GhorFix | Dashboard - Booked Services</title>
            </Helmet>

            <section className="container my-16 mx-auto px-2 md:px-4">
                <Title title="Booked Services" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    { bookedServices.map(bookedService => (
                        <div key={ bookedService._id } className="border p-4 rounded-3xl border-primary-200">
                            <h3 className="text-xl font-bold mt-2">{ bookedService.serviceName }</h3>
                            <p className="text-secondary-700 font-semibold text-lg">{ bookedService.price }</p>
                            <p className="text-gray-500 flex gap-2"><span className="material-symbols-outlined">
                                support_agent
                            </span>{ bookedService.providerName }</p>
                            <p className="mt-2 text-gray-500 text-sm">Service Taking Date: <span className="italic text-text-700">{ bookedService.serviceDate }</span></p>
                            <p className="text-gray-500 text-sm line-clamp-1 text-ellipsis">Instructions: <span className="italic text-text-700">{ bookedService.specialInstructions }</span></p>
                            <p className="text-gray-500 text-sm">Service Status: <span className="italic capitalize text-secondary-600 font-semibold">{ bookedService.serviceStatus }</span></p>
                        </div>
                    )) }
                </div>
            </section>
        </>
    );
};

export default BookedServices;