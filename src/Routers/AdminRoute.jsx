import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import LoadingSpiner from "../Pages/Shared/LoadingSpiner/LoadingSpiner";


const AdminRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()


    if (user && isAdmin) {
        return children
    }

    
    if (loading || isAdminLoading) {
        return <LoadingSpiner></LoadingSpiner>
    }

    return (
        <Navigate to='/' state={{ from: location }}></Navigate>
    );
};

export default AdminRoute;