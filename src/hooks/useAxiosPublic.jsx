import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://home-repair-services-server.vercel.app",
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;