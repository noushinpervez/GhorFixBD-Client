import Loading from "../../components/Loading";
import Card from "../../layout/Card/Card";
import { Link } from "react-router-dom";
import useServicesData from "../../hooks/useServicesData";
import Title from "../../components/Title";

const PopularServices = () => {
    const { data, loading, error } = useServicesData();

    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        return <div>Error: { error }</div>;
    }

    return (
        <section className="container my-16 mx-auto px-2 md:px-4">
            <Title title="Popular Services"></Title>

            {/* Top Services cards */ }
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:px-3 lg:px-6 mb-6">
                {
                    data.slice(0, 6).map(service => (
                        <Card key={ service._id } service={ service } />
                    ))
                }
            </div>

            {/* All service button */ }
            <div className="flex justify-center w-full">
                <Link to="/services" className="relative inline-block px-4 py-2 font-medium group rounded-full">
                    <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-secondary-600 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-full"></span>
                    <span className="absolute inset-0 w-full h-full bg-secondary-50 border-2 border-secondary-600 group-hover:bg-secondary-600 rounded-full"></span>
                    <span className="relative group-hover:text-text-50 uppercase">All Services</span>
                </Link>
            </div>
        </section>
    );
};

export default PopularServices;