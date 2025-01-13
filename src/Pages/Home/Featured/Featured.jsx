import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'


const Featured = () => {
    return (
        <div style={{ backgroundImage: `url(${featuredImage})` }} className="bg-center bg-cover w-full h-[600px] flex justify-center items-center mb-20 mt-20 bg-fixed">
            <div className="">
                <SectionTitle
                    subHeading={'---Chek it out---'}
                    heading={'featured item'}
                ></SectionTitle>
                <div className="lg:flex justify-center items-center w-8/12 mx-auto gap-4">
                    <div>
                        <img className="w-[900px]" src={featuredImage} alt="" />
                    </div>
                    <div className="text-white">
                        <p>March 20, 2023
                            WHERE CAN I GET SOME?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4 border-white text-black">READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;