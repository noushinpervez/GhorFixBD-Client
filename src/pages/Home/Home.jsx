import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularServices from "./PopularServices";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>GhorFix | Home</title>
            </Helmet>

            <Banner></Banner>
            <PopularServices></PopularServices>
        </>
    );
};

export default Home;