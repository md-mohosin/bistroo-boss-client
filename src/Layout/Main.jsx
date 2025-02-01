import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import useAuth from "../hooks/useAuth";
import LoadingSpiner from "../Pages/Shared/LoadingSpiner/LoadingSpiner";

const Main = () => {
    const { loading } = useAuth()
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    if (loading) {
        return <LoadingSpiner></LoadingSpiner>
    }
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;