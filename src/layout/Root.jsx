import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

const Root = () => {
    return (
        <>
            <ScrollRestoration />
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;