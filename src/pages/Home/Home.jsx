import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularServices from "./PopularServices";
import HowItWorks from "./HowItWorks";
import Feedback from "./Feedback";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>GhorFix | Home</title>
            </Helmet>

            <Banner></Banner>
            <PopularServices></PopularServices>
            <HowItWorks></HowItWorks>
            <Feedback></Feedback>
        </>
    );
};

export default Home;