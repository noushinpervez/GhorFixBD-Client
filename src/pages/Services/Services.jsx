import { Helmet } from "react-helmet-async";
import useServicesData from "../../hooks/useServicesData";
import Loading from "../../components/Loading";
import ServicesCard from "../../layout/Card/ServicesCard";
import Title from "../../components/Title";

const Services = () => {
    const { data, loading, error } = useServicesData();

    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        return <div className="text-red-400 text-2xl font-semibold min-h-[49vh] flex items-center justify-center">Error: { error }</div>;
    }

    return (
        <>
            <Helmet>
                <title>GhorFix | Services</title>
            </Helmet>

            <section className="container my-16 mx-auto px-2 md:px-4">
                <Title title="All Services" />

                {/* Services cards */ }
                <div className="grid grid-cols-1 gap-4 md:px-3 lg:px-6 mb-6">
                    {
                        data.map(service => (
                            <ServicesCard key={ service._id } service={ service } />
                        ))
                    }
                </div>
            </section>
        </>
    );
};

export default Services;