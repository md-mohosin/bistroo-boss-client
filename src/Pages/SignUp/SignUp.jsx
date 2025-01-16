import { Link } from 'react-router-dom';
import bgImg from '../../assets/others/authentication.png'
import authentication from '../../assets/others/authentication2.png'
import { FaArrowLeft } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';


const SignUp = () => {

    const { createUser, updetUser } = useContext(AuthContext)


    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password, data.photoURL)

            .then(result => {
                const loggdUser = result.user
                console.log(loggdUser);
                updetUser(data.name, data.photoURL)
            })

    }


    return (
        <div style={{ backgroundImage: `url(${bgImg})` }} className='min-h-screen flex justify-center items-center'>
            <Helmet><title>Bistro Boss || Sign Up</title></Helmet>
            <div className='w-11/12  mx-auto shadow-2xl py-4 flex justify-center items-center '>
                <div className="lg:flex justify-around w-full flex-row-reverse">
                    <div>
                        <h1 className='flex items-center gap-1 font-semibold'><FaArrowLeft></FaArrowLeft> <Link to='/'>Back to Home</Link></h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <img className='w-[500px]' src={authentication} alt="" />

                    </div>
                    <div className="p-4 w-full max-w-sm ">
                        <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* NAME */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Type here" className="input input-bordered" name='name' />
                                {errors.name && <span className='text-red-600 font-semibold'>This field is required</span>}
                            </div>


                            {/* PHOTO URL*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.name && <span className='text-red-600 font-semibold'>This field is required</span>}
                            </div>


                            {/* EMAIL */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Type here" className="input input-bordered" name='email' />
                                {errors.email && <span className='text-red-600 font-semibold'>This field is required</span>}
                            </div>


                            {/* PASSWORD */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, pattern: /^[A-Za-z]+$/i, minLength: 6, maxLength: 20 },)} placeholder="Type here" className="input input-bordered" name='password' />
                            
                                {errors.password && <span className='text-red-600 font-semibold'>This field is required</span>}
                            </div>


                            {/* BUTTON */}
                            <div className="form-control mt-6">
                                <input className='btn btn-primary bg-[#DBB884]' type="submit" name="" id="" value={'Sign Up'} />
                            </div>
                        </form>
                        <h1 className='text-[#ea9f2f] font-semibold'>Already have an account? <Link to={'/login'}>Go to login</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;