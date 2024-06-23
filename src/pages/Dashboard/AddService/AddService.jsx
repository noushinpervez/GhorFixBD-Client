import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Title from "../../../components/Title";
import AddServiceForm from "./AddServiceForm";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Toast from "../../../components/Toast";
import Loading from "../../../components/Loading";

const AddService = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceData = {
            ...formData,
            providerEmail: user.email,
            providerImage: user.photoURL,
            providerName: user.displayName,
        };

        setLoading(true);
        try {
            await axiosPublic.post("/add-service", serviceData);

            Toast.fire({
                icon: "success",
                title: "Service added successfully"
            });

            setFormData({
                imgURL: "",
                serviceName: "",
                price: "",
                serviceArea: "",
                description: "",
            });
        } catch (error) {
            Toast.fire({
                icon: "error",
                title: "Failed to add service"
            });
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        <Loading />;
    }
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