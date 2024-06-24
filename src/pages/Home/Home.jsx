import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularServices from "./PopularServices";
import HowItWorks from "./HowItWorks";
import Feedback from "./Feedback";
import Statistics from "./Statistics";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>GhorFix | Home</title>
            </Helmet>

            <Banner></Banner>
            <Statistics></Statistics>
            <PopularServices></PopularServices>
            <HowItWorks></HowItWorks>
            <Feedback></Feedback>
        </>
    );
};

export default Home;