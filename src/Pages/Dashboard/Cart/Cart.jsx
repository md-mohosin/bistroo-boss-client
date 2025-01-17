import { RiDeleteBin2Fill } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Cart = () => {

    const [cart, refetch] = useCart()

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

    const axiosSecure = useAxiosSecure()

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this item",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })

            }
        });
    }


    return (
        <div className="bg-[#F6F6F6]">
            <div>
                <SectionTitle
                    subHeading={'---My cart---'} heading={'wann add more?'}></SectionTitle>
                <div className="pb-10">
                    <div className="w-10/12 mx-auto bg-white p-4">
                        <div className="flex justify-between items-center">
                            <h1 className="uppercase font-bold">total orders : {cart.length}</h1>
                            <h1 className="uppercase font-bold">total price :${totalPrice}</h1>
                            <button className="btn bg-[#D1A054]">PAY</button>
                        </div>

                        {/* TABLE */}
                        <div className="mt-4">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr className="bg-[#D1A054] text-white">
                                            <th></th>
                                            <th className="uppercase">item image</th>
                                            <th className="uppercase">item name</th>
                                            <th className="uppercase">price</th>
                                            <th className="uppercase">action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map((item, index) => <tr key={item._id}>
                                                <th>
                                                    <h1>{index + 1}</h1>
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className=" h-12 w-12">
                                                                <img
                                                                    className="rounded-lg"
                                                                    src={item.image} />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </td>
                                                <td>
                                                    {item.name}
                                                </td>
                                                <td>{item.price}</td>
                                                <th>
                                                    <button
                                                        onClick={() => handleDelete(item._id)}
                                                        className="btn bg-red-500"><RiDeleteBin2Fill color="white" size={20}></RiDeleteBin2Fill>
                                                    </button>
                                                </th>
                                            </tr>
                                            )
                                        }

                                    </tbody>

                                </table>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default Cart;