import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const { user, loading: authLoading } = useAuth();
    const location = useLocation();

    if (authLoading) {
        return <Loading />;
    }

    if (!user) {
        return <Navigate to="/login" state={ location?.pathname || "/" }></Navigate>;
    }

    return <>{ children }</>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;