import { Helmet } from "react-helmet-async";
import useServicesData from "../../hooks/useServicesData";
import Loading from "../../components/Loading";
import ServicesCard from "../../layout/Card/ServicesCard";
import Title from "../../components/Title";
import { useEffect, useState } from "react";

const Services = () => {
    const { data, loading, error } = useServicesData();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setSearchTerm("");
    }, [data]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <div className="text-red-400 text-2xl font-semibold min-h-[49vh] flex items-center justify-center">
                Error: { error }
            </div>
        );
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.trim().toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const filteredServices = data.filter((service) =>
        service.serviceName.toLowerCase().includes(searchTerm)
    );

    return (
        <>
            <Helmet>
                <title>GhorFix | Services</title>
            </Helmet>

            <section className="container my-16 mx-auto px-2 md:px-4">
                <Title title="All Services" />

                {/* Search */ }
                <form
                    onSubmit={ handleSubmit }
                    className="mb-10 mx-auto max-w-xl py-4 px-6 rounded-full bg-primary-100 focus-within:border flex focus-within:border-primary-300 gap-2"
                ><span className="material-symbols-outlined">
                        search
                    </span>
                    <input
                        type="text"
                        placeholder="Search by Service Name"
                        className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
                        name="topic"
                        value={ searchTerm }
                        onChange={ handleSearchChange }
                    />
                </form>

                <div className="md:px-3 my-6 flex lg:px-6">
                    <h1 className="text-2xl">Total Services: { data.length }</h1>
                </div>

                { filteredServices.length === 0 ? (
                    <div className="text-red-400 text-2xl font-semibold flex items-center justify-center">
                        No services found.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4 md:px-3 lg:px-6 mb-6">
                        { filteredServices.map((service) => (
                            <ServicesCard
                                key={ service._id }
                                service={ service }
                            />
                        )) }
                    </div>
                ) }
            </section>
        </>
    );
};

export default Services;