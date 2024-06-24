import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Title from "../../../components/Title";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Toast from "../../../components/Toast";
import Swal from "sweetalert2";
import ServiceEditModal from "./ServiceEditModal";
import Loading from "../../../components/Loading";

const ManageService = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [services, setServices] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axiosPublic.get(`/services/provider/${user.email}`);
            setServices(response.data);
            setLoading(true);
        } catch (error) {
            Toast.fire({
                icon: "error",
                title: `Failed to fetch services ${error}`
            });
        }
        setLoading(false);
    };

    const handleEdit = (serviceId) => {
        const service = services.find(service => service._id === serviceId);
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const handleDelete = async (serviceId) => {
        const result = await Swal.fire({
            title: `Are you sure you want to delete this service?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "var(--secondary-600)",
            confirmButtonText: "Yes, delete service!",
            background: "var(--accent-100)",
            color: "var(--text-primary)",
        });

        if (result.isConfirmed) {
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
        }
    };

    const updateService = (updatedService) => {
        const updatedServices = services.map(service =>
            service._id === updatedService._id ? updatedService : service
        );
        setServices(updatedServices);
    };

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <>
            <Helmet>
                <title>GhorFix | Dashboard - Manage Services</title>
            </Helmet>

            <section className="container my-16 mx-auto px-2 md:px-4">
                <Title title="Manage Services" />

                {
                    services.length === 0 ?
                        <div className="text-red-400 text-2xl font-semibold min-h-[20vh] flex items-center justify-center">No services have been added yet.</div>
                        : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                { services.map(service => (
                                    <div key={ service._id } className="border p-4 rounded-3xl border-primary-200">
                                        <img src={ service.imgURL } alt={ service.serviceName } className="w-full h-40 object-cover rounded-2xl" />
                                        <h3 className="text-xl font-bold mt-2">{ service.serviceName }</h3>
                                        <p className="text-sm mt-1 text-gray-500 text-ellipsis line-clamp-1">{ service.description }</p>
                                        <p className="text-secondary-700 font-semibold text-lg mt-2">{ service.price }</p>
                                        <p className="mt-2 text-gray-500 text-sm flex gap-1 text-ellipsis line-clamp-1 items-center">
                                            <span className="material-symbols-outlined">where_to_vote</span>{ service.serviceArea }
                                        </p>
                                        <div className="mt-4 flex justify-end gap-2">
                                            <button
                                                onClick={ () => handleEdit(service._id) }
                                                className="bg-accent-500 text-white px-4 py-2 rounded-full focus:outline-none focus:border-none"
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
                        )
                }
                <ServiceEditModal service={ selectedService } isOpen={ isModalOpen } onClose={ () => {
                    setIsModalOpen(false);
                    setSelectedService(null);
                    fetchServices();
                } }
                    updateService={ updateService }/>
            </section>
        </>
    );
};

export default ManageService;