import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Title from "../../../components/Title";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Toast from "../../../components/Toast";

const ManageService = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axiosPublic.get(`/services/${user.email}`);
                setServices(response.data);
                console.log(response.data);
            } catch (error) {
                Toast.fire({
                    icon: "error",
                    title: "Failed to fetch services"
                });
            }
        };

        fetchServices();
    }, [user.email, axiosPublic]);

    const handleEdit = (serviceId) => {
        console.log("Edit service", serviceId);
    };

    const handleDelete = async (serviceId) => {
        try {
            await axiosPublic.delete(`/services/${serviceId}`);
            setServices(services.filter(service => service._id !== serviceId));
            Toast.fire({
                icon: "success",
                title: "Service deleted successfully"
            });
        } catch (error) {
            Toast.fire({
                icon: "error",
                title: "Failed to delete service"
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>GhorFix | Dashboard - Manage Services</title>
            </Helmet>

            <section className="container my-16 mx-auto px-2 md:px-4">
                <Title title="Manage Services" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    { services.map(service => (
                        <div key={ service._id } className="border p-4 rounded-3xl border-primary-200">
                            <img src={ service.serviceImage } alt={ service.serviceName } className="w-full h-40 object-cover rounded-2xl" />
                            <h3 className="text-xl font-bold mt-2">{ service.serviceName }</h3>
                            <p className="text-secondary-700 font-semibold text-lg">{ service.price }</p>
                            <p className="mt-2 text-gray-500 text-sm italic">Service Taking Date: { service.serviceDate }</p>
                            <p className="text-gray-500 text-sm italic line-clamp-1 text-ellipsis">Special Instructions: { service.specialInstructions }</p>
                            <div className="mt-4 flex justify-end gap-2">
                                <button
                                    onClick={ () => handleEdit(service._id) }
                                    className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none focus:border-none"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={ () => handleDelete(service._id) }
                                    className="bg-red-500 text-white px-4 py-2 rounded-full focus:outline-none focus:border-none"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )) }
                </div>
            </section>
        </>
    );
};

export default ManageService;