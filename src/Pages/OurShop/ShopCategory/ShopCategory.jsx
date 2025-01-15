import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import { Bounce, toast,} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ShopCategory = ({ item }) => {

    const { _id, name, recipe, image, price } = item

    const { user } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()

    const handleAddToCart = food => {
        if (user && user.email) {
            const cartItem = {
                productId: _id,
                email: user.email,
                name: name,
                image: image,
                price: price
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success('Succes', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add product",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div>
            <div className="max-w-80 bg-gray-100 relative">

                <div>
                    <img
                        className="w-full h-60"
                        src={image}
                    />
                    <p className="bg-black text-white absolute top-0 right-0 p-2">${price}</p>
                </div>

                <div className="card-body">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-center ">
                        <button onClick={() => handleAddToCart(item)} className="btn bg-white text-[#C3972E] shadow-2xl border-2 border-b-[#C3972E] hover:bg-[#1F2937]">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCategory;