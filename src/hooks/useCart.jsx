import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {

    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    //    TAN STACK QUERY

    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async () => {
            const res = axiosSecure.get(`/carts?email=${user.email}`)
            return (await res).data
        }
    })
    return [cart,refetch]
};

export default useCart;