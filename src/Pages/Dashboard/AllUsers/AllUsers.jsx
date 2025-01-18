import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        },

    })



    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch()
                    })
            }
        });

    }




    const handleMakeAdmin = (id) => {
        console.log(id);
        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Update",
                        text: `${users.name} is admin now!`,
                        icon: "success"
                    });
                }
            })
    }




    return (
        <div className="pl-32">
            <SectionTitle subHeading={'---Hoy many---'} heading={'manage users'}></SectionTitle>
            <div className="w-11/12 mx-auto">
                <h1 className="uppercase font-bold">Total Users : {users.length}</h1>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table mt-4">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#D1A054]">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    users.map((item, index) => <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>

                                        <td>
                                            {
                                                item.role === 'admin'
                                                    ?
                                                    'Admin'
                                                    :
                                                    <button
                                                        onClick={() => handleMakeAdmin(item._id)}
                                                        className="btn bg-[#D1A054]">
                                                        <FaUsers size={20}></FaUsers>
                                                    </button>
                                            }
                                        </td>


                                        <td>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="btn bg-red-500">
                                                <RiDeleteBin2Fill color="white"
                                                    size={20}>
                                                </RiDeleteBin2Fill>
                                            </button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;