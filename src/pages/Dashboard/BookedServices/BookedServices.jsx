import { Helmet } from "react-helmet-async";
import Title from "../../../components/Title";

const BookedServices = () => {
    return (
        <>
            <Helmet>
                <title>GhorFix | Dashboard - Booked Services</title>
            </Helmet>

            <section className="container my-16 mx-auto px-2 md:px-4">
                <Title title="Booked Services" />

            </section>
        </>
    );
};

export default BookedServices;