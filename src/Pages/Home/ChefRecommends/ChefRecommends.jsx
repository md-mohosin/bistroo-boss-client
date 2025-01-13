import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import cardImage from '../../../assets/home/slide1.jpg'


const ChefRecommends = () => {
    return (
        <div className="w-10/12 mx-auto mt-20 mb-20">
            <SectionTitle
                subHeading={'----Should Try----'}
                heading={'CHEF RECOMMENDs'}
            ></SectionTitle>
            <div className="lg:flex items-center justify-between gap-4">
                <div>
                    <div className="max-w-80 bg-gray-100">

                        <img
                            className="w-full h-60"
                            src={cardImage}
                        />

                        <div className="card-body">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-center ">
                                <button className="btn bg-white text-[#C3972E] shadow-2xl border-2 border-b-[#C3972E] hover:bg-[#1F2937]">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-80 bg-gray-100">

                        <img
                            className="w-full h-60"
                            src={cardImage}
                        />

                        <div className="card-body">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-center ">
                                <button className="btn bg-white text-[#C3972E] shadow-2xl border-2 border-b-[#C3972E] hover:bg-[#1F2937]">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-80 bg-gray-100">

                        <img
                            className="w-full h-60"
                            src={cardImage}
                        />

                        <div className="card-body">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-center ">
                                <button className="btn bg-white text-[#C3972E] shadow-2xl border-2 border-b-[#C3972E] hover:bg-[#1F2937]">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-80 bg-gray-100">

                        <img
                            className="w-full h-60"
                            src={cardImage}
                        />

                        <div className="card-body">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions justify-center ">
                                <button className="btn bg-white text-[#C3972E] shadow-2xl border-2 border-b-[#C3972E] hover:bg-[#1F2937]">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;