import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";
import loader from '../assets/others/loader3.gif'

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <img src={loader} alt="" />
        </div>
    }

    if (user) {
        return children
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivetRoute;