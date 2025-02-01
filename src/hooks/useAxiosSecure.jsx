import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {

    const { logOut,setLoading } = useAuth()
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('request stoped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`
        return config
    }, (error) => {
        return Promise.reject(error)
    }
    )



    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, async(error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const status = error.response.status
        console.log('statuse error in the enterceptor', status);
        if (status === 401 || status === 403) {
            await logOut()
            setLoading(false)
            navigate('/login')
        }
        return Promise.reject(error);
    });



    return axiosSecure
};

export default useAxiosSecure;