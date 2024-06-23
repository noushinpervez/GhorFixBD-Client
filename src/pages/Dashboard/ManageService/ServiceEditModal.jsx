import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Toast from "../../../components/Toast";
import FormInput from "../../../components/FormInput";

const ServiceEditModal = ({ service, isOpen, onClose }) => {
    const axiosPublic = useAxiosPublic();
    const [updatedService, setUpdatedService] = useState({ ...service });

    useEffect(() => {
        setUpdatedService({ ...service });
    }, [service]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedService(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdateService = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosPublic.put(`/update-service/${service._id}`, updatedService);
            if (response.data.modifiedCount > 0) {
                Toast.fire({
                    icon: "success",
                    title: "Service updated successfully"
                });
                onClose();
            }
        } catch (error) {
            Toast.fire({
                icon: "error",
                title: "Failed to update service"
            });
        }
    };

    return (
        <>
            { isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Edit Service</h2>
                        <form onSubmit={ handleUpdateService }>
                            <FormInput
                                label="Service Name"
                                value={ updatedService.serviceName }
                                onChange={ handleInputChange }
                                name="serviceName"
                                required
                            />
                            <FormInput
                                label="Description"
                                value={ updatedService.description }
                                onChange={ handleInputChange }
                                name="description"
                                type="textarea"
                                required
                            />
                            <FormInput
                                label="Price"
                                value={ updatedService.price }
                                onChange={ handleInputChange }
                                name="price"
                                required
                            />
                            <FormInput
                                label="Service Area"
                                value={ updatedService.serviceArea }
                                onChange={ handleInputChange }
                                name="serviceArea"
                                required
                            />
                            <button type="submit" className="w-full bg-primary-900 text-white font-bold py-2 px-4 rounded mt-4">Save Changes</button>
                            <button type="button" onClick={ onClose } className="mt-2 w-full bg-gray-600 text-white font-bold py-2 px-4 rounded">Cancel</button>
                        </form>
                    </div>
                </div>
            ) }
        </>
    );
};

ServiceEditModal.propTypes = {
    service: PropTypes.object,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default ServiceEditModal;