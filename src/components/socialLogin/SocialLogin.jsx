import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {

    const { googleLogin } = useAuth()

    const axiosPublic = useAxiosPublic()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);

                const usersData = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                }
                axiosPublic.post('/users', usersData)
                    .then(res => {
                        console.log(res.data)
                    })
            })
    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className="border border-black p-2 rounded-full"><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;