import PropTypes from "prop-types";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Toast from "../../components/Toast";
import FormInput from "../../components/FormInput";

const BookingModal = ({ service, isOpen, onClose }) => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [serviceDate, setServiceDate] = useState("");
    const [specialInstructions, setSpecialInstructions] = useState("");

    const handlePurchase = async (e) => {
        e.preventDefault();
        
        if (!serviceDate || !specialInstructions) {
            Toast.fire({
                icon: "error",
                title: "Please fill out all required fields"
            });
            return;
        }

        const bookingData = {
            serviceId: service._id,
            serviceName: service.serviceName,
            serviceImage: service.imgURL,
            providerEmail: service.providerEmail,
            providerName: service.providerName,
            price: service.price,
            userEmail: user.email,
            userName: user.displayName,
            serviceDate,
            specialInstructions,
            serviceStatus: "pending",
        };

        try {
            await axiosPublic.post("/book-service", bookingData);
            Toast.fire({
                icon: "success",
                title: "Service booked successfully"
            });
            onClose();
        } catch (error) {
            Toast.fire({
                icon: "error",
                title: "Failed to book service"
            });
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Book Service</h2>

                {/* Service Name */ }
                <FormInput
                    label="Service Name"
                    value={ service.serviceName }
                    name="serviceName"
                    disabled
                    placeholder="Service Name"
                />

                {/* Service Price */ }
                <FormInput
                    label="Service Price"
                    value={ service.price }
                    name="price"
                    disabled
                    placeholder="Service Price"
                />

                {/* Provider Name */ }
                <FormInput
                    label="Provider Name"
                    value={ service.providerName }
                    name="providerName"
                    disabled
                    placeholder="Provider Name"
                />

                {/* Special Instructions */ }
                <FormInput
                    label="Special Instructions"
                    value={ specialInstructions }
                    onChange={ (e) => setSpecialInstructions(e.target.value) }
                    name="specialInstructions"
                    type="textarea"
                    required // required is true by default
                    placeholder="Address, area, customized service plan"
                />

                {/* Service Taking Date */ }
                <FormInput
                    label="Service Taking Date"
                    value={ serviceDate }
                    onChange={ (e) => setServiceDate(e.target.value) }
                    name="serviceDate"
                    type="date"
                    required // required is true by default
                    placeholder="Select a date"
                />

                {/* Purchase Button */ }
                <button
                    onClick={ handlePurchase }
                    className="w-full bg-primary-900 text-white font-bold py-2 px-4 rounded mt-4"
                >
                    Purchase
                </button>

                {/* Cancel Button */ }
                <button
                    onClick={ onClose }
                    className="mt-2 w-full bg-gray-600 text-white font-bold py-2 px-4 rounded"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

BookingModal.propTypes = {
    service: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default BookingModal;