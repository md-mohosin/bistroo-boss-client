import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { LuSquarePen } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {

    const [menu] = useMenu()

    const axiosSecure = useAxiosSecure()

    const handleDelete = (item) => {
        console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: `You want to delete`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${item.name} is delete`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }


    return (
        <div className="w-11/12 mx-auto  pl-36">
            <SectionTitle subHeading={'---Hurry Up!---'} heading={'MANAGE ALL ITEMS'}></SectionTitle>
            <div>
                <h1>Items : {menu.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054]">
                                <th></th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td><img className="w-12 h-12" src={item.image} alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>

                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button
                                                className="btn bg-[#D1A054]"><LuSquarePen size={20} color="white"></LuSquarePen></button>
                                        </Link>
                                    </td>

                                    <td>
                                        <button
                                            onClick={handleDelete}
                                            className="btn bg-red-500"><MdDelete size={20} color="white"></MdDelete>
                                        </button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;