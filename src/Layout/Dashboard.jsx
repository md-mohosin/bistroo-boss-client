import { NavLink, Outlet } from "react-router-dom";
import '../Layout/Dashboard.css'
import { FaCalendarAlt, FaHome, FaShoppingCart } from "react-icons/fa";
import { MdAddBusiness, MdOutlineContactPhone, MdPayment, MdRateReview } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className='w-2/12 space-y-3 border p-4 border-blue-600 bg-[#D1A054] min-h-screen fixed top-0 left-0'>
                <div>
                    <h1 className="text-xl font-bold">BISTO BOSS</h1>
                    <h1 className="w-full">RESTAURANT</h1>
                </div>
                <ul className="text-black space-y-3 pt-10 font-semibold">

                    {/* USER HOME */}
                    <li><NavLink className={'flex items-center gap-1'} to='/dashboard/userHome'>
                        <FaHome></FaHome>
                        USER HOME
                    </NavLink></li>

                    {/* RESERVATION */}
                    <li><NavLink className={'flex items-center gap-1'} to='/dashboard/reservation'>
                        <FaCalendarAlt></FaCalendarAlt>
                        RESERVATION
                    </NavLink></li>

                    {/* PAYMENT HISTORY*/}
                    <li><NavLink className={'flex items-center gap-1'} to='/dashboard/paymentHistory'>
                        <MdPayment></MdPayment>
                        PAYEMNT HISTORY
                    </NavLink></li>


                    {/* MY CART */}
                    <li><NavLink className={'flex items-center gap-1'} to='/dashboard/cart'>
                        <FaShoppingCart></FaShoppingCart>
                        MY CART
                    </NavLink></li>


                    {/* ADD REVIEW */}
                    <li><NavLink className={'flex items-center gap-1'} to='/dashboard/addReview'>
                        <MdRateReview></MdRateReview>
                        ADD REVIEW
                    </NavLink></li>


                     {/* MY BOOKING*/}
                     <li><NavLink className={'flex items-center gap-1'} to='/dashboard/myBooking'>
                        <MdAddBusiness></MdAddBusiness>
                        MY BOOKING
                    </NavLink></li>




                    {/* WHITE BOARDER */}
                    <div className="py-4">
                        <div className="border border-white"></div>
                    </div>




                    {/* HOME */}
                    <li><NavLink className={'flex items-center gap-1'} to='/'>
                        <FaHome></FaHome>
                        HOME
                    </NavLink></li>


                    {/* MENU */}
                    <li><NavLink className={'flex items-center gap-1'} to='/'>
                        <IoMdMenu></IoMdMenu>
                        MENU
                    </NavLink></li>


                    {/* SHOP */}
                    <li><NavLink className={'flex items-center gap-1'} to='/'>
                    <GiShoppingBag></GiShoppingBag>
                        SHOP
                    </NavLink></li>


                    {/* CONTACT */}
                    <li><NavLink className={'flex items-center gap-1'} to='/'>
                        <MdOutlineContactPhone></MdOutlineContactPhone>
                        CONTACT
                    </NavLink></li>



                </ul>
            </div>
            <div className="flex-1 pl-36">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;