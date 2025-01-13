import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slider1 from '../../../assets/home/01.jpg'
import slider2 from '../../../assets/home/02.jpg'
import slider3 from '../../../assets/home/03.png'
import slider4 from '../../../assets/home/04.jpg'
import slider5 from '../../../assets/home/05.png'
import slider6 from '../../../assets/home/06.png'

const Banner = () => {
    return (
        <div>
            <Carousel autoPlay={true} interval={2000} infiniteLoop={true}>
                <div>
                    <img className="w-[100%] max-h-[500px]" src={slider1} />
                </div>
                <div>
                    <img className="w-[100%] max-h-[500px]" src={slider2} />
                </div>
                <div>
                    <img className="w-[100%] max-h-[500px]" src={slider3} />
                </div>
                <div>
                    <img className="w-[100%] max-h-[500px]" src={slider4} />
                </div>
                <div>
                    <img className="w-[100%] max-h-[500px]" src={slider5} />
                </div>
                <div>
                    <img className="w-[100%] max-h-[500px]" src={slider6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;