import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Title from "../../../components/Title";
import AddServiceForm from "./AddServiceForm";
import useAuth from "../../../hooks/useAuth";

const AddService = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        imgURL: "",
        serviceName: "",
        price: "",
        serviceArea: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceData = {
            ...formData,
            providerEmail: user.email,
            providerImage: user.photoURL,
            providerName: user.displayName,
        };
        
        console.log("Service Data:", serviceData);
      
        setFormData({
            imgURL: "",
            serviceName: "",
            price: "",
            serviceArea: "",
            description: "",
        });
    };

    return (
        <>
            <Helmet>
                <title>GhorFix | Dashboard - Add Service</title>
            </Helmet>

            <section className="container my-16 mx-auto px-2 md:px-4">
                <Title title="Add Service" />
                <AddServiceForm
                    onSubmit={ handleSubmit }
                    { ...formData }
                    onChange={ handleChange }
                />
            </section>
        </>
    );
};

export default AddService;