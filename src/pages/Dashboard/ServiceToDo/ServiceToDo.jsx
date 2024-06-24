import { Helmet } from "react-helmet-async";
import Title from "../../../components/Title";
import Toast from "../../../components/Toast";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ServiceToDo = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [bookedServices, setBookedServices] = useState([]);

    useEffect(() => {
        fetchBookedServices();
    }, []);

    const fetchBookedServices = async () => {
        try {
            const response = await axiosPublic.get(`/booked-services/provider/${user.email}`);
            setBookedServices(response.data);
        } catch (error) {
            Toast.fire({
                icon: "error",
                title: `Failed to fetch booked services: ${error.message}`
            });
        }
    };

    const handleUpdateStatus = async (serviceId, newStatus) => {
        try {
            await axiosPublic.put(`/booked-services/${serviceId}/update-status`, { status: newStatus });
            Toast.fire({
                icon: "success",
                title: "Service status updated successfully"
            });

            setBookedServices(prevServices =>
                prevServices.map(service =>
                    service._id === serviceId ? { ...service, status: newStatus } : service
                )
            );
        } catch (error) {
            Toast.fire({
                icon: "error",
                title: "Failed to update service status"
            });
        }
    };

    const handleStatusChange = async (event, serviceId) => {
        const newStatus = event.target.value;
        await handleUpdateStatus(serviceId, newStatus);
    };

    return (
        <>
            <Helmet>
                <title>GhorFix | Dashboard - Service To-Do</title>
            </Helmet>

            <section className="container my-16 mx-auto px-2 md:px-4">
                <Title title="Service To-Do" />
                { bookedServices.length === 0 ? (
                    <div className="text-red-400 text-2xl font-semibold min-h-[20vh] flex items-center justify-center">
                        No booked services found for you.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        { bookedServices.map(service => (
                            <div key={ service._id } className="border p-4 rounded-3xl border-primary-200">
                                <h3 className="text-xl font-bold mt-2">{ service.serviceName }</h3>
                                <p className="text-sm mt-1 text-gray-500 text-ellipsis line-clamp-1">
                                    Description: { service.description }
                                </p>
                                <p className="text-secondary-700 font-semibold text-lg mt-2">Price: { service.price }</p>
                                <p className="mt-2 text-gray-500 text-sm flex gap-1 text-ellipsis line-clamp-1 items-center">
                                    <span className="material-symbols-outlined">where_to_vote</span>
                                    Service Area: { service.serviceArea }
                                </p>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-500">Service Status</label>
                                    <select
                                        value={ service.status }
                                        onChange={ (event) => handleStatusChange(event, service._id) }
                                        className="mt-1 block w-full border border-gray-500 rounded shadow focus:border-0 focus:outline-0 focus:ring focus:ring-secondary-700 p-2 bg-secondary-50 text-sm"
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="working">Working</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                            </div>
                        )) }
                    </div>
                ) }
            </section>
        </>
    );
};

export default ServiceToDo;