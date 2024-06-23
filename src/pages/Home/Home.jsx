import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>GhorFix | Home</title>
            </Helmet>

            <Banner></Banner>
        </>
    );
};

export default Home;