import SectionTitle from "../../../components/SectionTitle/SectionTitle";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="mt-20 mb-20 w-10/12 mx-auto">
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <FaQuoteLeft className="w-1/2 mx-auto mb-4" size={60}></FaQuoteLeft>
            <Swiper slidesPerView={1} navigation={true} modules={[Navigation]} className="mySwiper px-20">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center px-24 text-center space-y-4">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="text-xl">{review.details}</p>
                            <h1 className="font-semibold text-[#CD9004] text-2xl">{review.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;