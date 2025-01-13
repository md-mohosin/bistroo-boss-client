import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

import bgImg from '../../assets/others/authentication.png'
import authentication from '../../assets/others/authentication2.png'
import { useEffect } from 'react';

const Login = () => {

    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password);
    }

    return (
        <div style={{ backgroundImage: `url(${bgImg})` }} className='min-h-screen flex justify-center items-center'>
            <div className='w-11/12  mx-auto shadow-2xl py-4 flex justify-center items-center'>
                <div className="lg:flex justify-around w-full">
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
                                <input type="text"  placeholder="Type captcha" className="input input-bordered" required name='captcha' />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary bg-[#DBB884]' type="submit" name="" id="" value={'login'} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;