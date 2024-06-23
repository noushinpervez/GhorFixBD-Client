import { Helmet } from "react-helmet-async";
import Title from "../../../components/Title"

const ServiceToDo = () => {
    return (
        <>
            <Helmet>
                <title>GhorFix | Dashboard - Service To-Do</title>
            </Helmet>

            <section className="container my-16 mx-auto px-2 md:px-4">
                <Title title="Service To-Do" />
              
            </section>
        </>
    );
};

export default ServiceToDo;