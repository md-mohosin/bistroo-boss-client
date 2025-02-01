import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpiner from "../Pages/Shared/LoadingSpiner/LoadingSpiner";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()


    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <LoadingSpiner></LoadingSpiner>
        </div>
    }

    if (user) {
        return children
    }
    return (
        <Navigate to='/login' state={{from:location}}></Navigate>
    );
};

export default PrivetRoute;