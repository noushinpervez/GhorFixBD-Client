import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularServices from "./PopularServices";
import HowItWorks from "./HowItWorks";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>GhorFix | Home</title>
            </Helmet>

            <Banner></Banner>
            <PopularServices></PopularServices>
            <HowItWorks></HowItWorks>
        </>
    );
};

export default Home;