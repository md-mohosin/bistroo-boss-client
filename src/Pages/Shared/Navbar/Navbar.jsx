import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navOptions = <>
        <div className="flex gap-3 font-semibold text-white">
            <NavLink to={'/'}><a>HOME</a></NavLink>
            <NavLink to={'/'}><a>CONTACT US</a></NavLink>
            <NavLink to={'/'}><a>DASHBOARD</a></NavLink>
            <NavLink to={'/menu'}><a>OUR MENU</a></NavLink>
            <NavLink to={'/ourShop/salad'}><a>OUR SHOP</a></NavLink>
            <NavLink to={'/login'}><a className="flex items-center gap-1">SIGN IN<FaRegUser></FaRegUser></a></NavLink>
        </div>
    </>

    return (
        <div className="fixed z-10 bg-opacity-30 bg-black mr-0 w-full px-8">
            <div className="flex justify-between items-center w-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="text-white top-0">
                        <h1 className="text-2xl font-agudisplay">BISTRO BOSS</h1>
                        <h1>R E S T A U R A N T</h1>
                    </div>
                </div>
                <div className="">
                    <div className=" hidden lg:flex">
                        {navOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;