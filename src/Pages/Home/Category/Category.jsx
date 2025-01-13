import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import silde1 from '../../../assets/home/slide1.jpg'
import silde2 from '../../../assets/home/slide2.jpg'
import silde3 from '../../../assets/home/slide3.jpg'
import silde4 from '../../../assets/home/slide4.jpg'
import silde5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle 
            subHeading={'---From 11:00am to 10:00pm---'}
            heading={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={silde1} />
                    <h1 className='uppercase text-2xl'>Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={silde2} />
                    <h1 className='uppercase text-2xl'>soupes</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={silde3} />
                    <h1 className='uppercase text-2xl'>pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={silde4} />
                    <h1 className='uppercase text-2xl'>deserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={silde5} />
                    <h1 className='uppercase text-2xl'>salads</h1>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;