import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

import bgImg from '../../assets/others/authentication.png'
import authentication from '../../assets/others/authentication2.png'
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import SocialLogin from '../../components/socialLogin/SocialLogin';

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || ('/')


    const { loginUser } = useContext(AuthContext)

    const [disable, setDisable] = useState(true)

    const captchaRef = useRef(null)

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            setDisable
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password);


        loginUser(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div style={{ backgroundImage: `url(${bgImg})` }} className='min-h-screen flex justify-center items-center'>
            <Helmet><title>Bisto Boss || Loign</title></Helmet>
            <div className='w-11/12  mx-auto shadow-2xl py-4 flex justify-center items-center'>
                <div className="lg:flex justify-around w-full">
                    <div>
                        <h1 className='flex items-center gap-1 font-semibold'><FaArrowLeft></FaArrowLeft> <Link to='/'>Back to Home</Link></h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <img className='w-[500px]' src={authentication} alt="" />

                    </div>
                    <div className="p-4 w-full max-w-sm ">
                        <h1 className='text-3xl font-bold text-center'>Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Type here" className="input input-bordered" required name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Type here" className="input input-bordered" required name='password' />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate></LoadCanvasTemplate>
                                </label>
                                <input type="text" ref={captchaRef} placeholder="Type captcha" className="input input-bordered" required name='captcha' />
                                <button onChange={handleValidateCaptcha} className='btn btn-outline btn-xs'>Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disable} className='btn btn-primary bg-[#DBB884]' type="submit" name="" id="" value={'login'} />
                            </div>


                            <h1 className='text-center'>Or sign in with</h1>
                            <div className='flex justify-center'>
                                <SocialLogin></SocialLogin>
                            </div>


                        </form>
                        <h1 className='text-[#ea9f2f] font-semibold'>New here? <Link to={'/signUp'}>Create a New Account</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;