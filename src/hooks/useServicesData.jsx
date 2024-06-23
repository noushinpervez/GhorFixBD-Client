import { useState, useEffect } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useServiceData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axiosPublic.get("/services");
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [axiosPublic]);

    return { data, loading, error };
};

export default useServiceData;