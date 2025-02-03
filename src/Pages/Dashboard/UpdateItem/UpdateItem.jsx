import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const UpdateItem = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const item = useLoaderData()

    const {name,price,category,_id} = item

    const { register, handleSubmit, reset ,formState: { errors }, } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        })

        if (res.data.success) {
                    const menuItem = {
                        name: data.name,
                        category: data.category,
                        price: parseFloat(data.price),
                        recipe: data.recipe,
                        image: res.data.data.display_url
                    }
                    const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
                    if (menuRes.data.modifiedCount>0) {
                        reset()
                        Swal.fire({
                            title: `${data.name} is update successfully`,
                            showClass: {
                                popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                            },
                            hideClass: {
                                popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                            }
                        });
                    }
                    console.log(menuRes.data);
                }

    }

    return (
        <div className="w-11/12 mx-auto pl-36">
            <SectionTitle heading={'update item'}></SectionTitle>
            <div className="w-11/12 bg-base-200">
                <div>
                    <div className=" w-full px-8 py-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Recipe name*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={name}
                                    placeholder="Recipe name*"
                                    className="input input-bordered"
                                    {...register('name', { required: true })}
                                    required />
                            </div>
                            <div className="flex gap-2">

                                <div className="form-control w-full">
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-bold">Category*</span>
                                        </div>
                                        <select
                                        defaultValue={category}
                                            name="category"
                                            {...register('category')} className="select select-bordered">
                                            <option disabled selected>Category</option>
                                            <option>salad</option>
                                            <option>pizza</option>
                                            <option>dessert</option>
                                            <option>soup</option>
                                            <option>drink</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Price*</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={price}
                                        placeholder="Price*"
                                        {...register('price')}
                                        className="input input-bordered"
                                        name="price" required />
                                </div>
                            </div>
                            <div className="mt-4">
                                <textarea
                                    {...register('recipe')}
                                    placeholder="Recipe Details"
                                    className="textarea  textarea-lg w-full"></textarea>
                            </div>
                            <div>
                                <input
                                    {...register('image')}
                                    type="file"
                                    className="file-input file-input-ghost w-full max-w-xs" />
                            </div>
                            <div className="flex justify-center mt-6">
                                <button className="btn bg-[#D1A054] rounded-none">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;