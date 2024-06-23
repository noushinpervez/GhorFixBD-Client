import { Helmet } from "react-helmet-async";
import Title from "../../../components/Title";

const ManageService = () => {
    return (
        <>
            <Helmet>
                <title>GhorFix | Dashboard - Manage Services</title>
            </Helmet>

            <section className="container my-16 mx-auto px-2 md:px-4">
                <Title title="Manage Services" />

            </section>
        </>
    );
};

export default ManageService;