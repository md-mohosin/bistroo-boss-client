import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Service from "../Service/Service";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistroo Boss || Home</title>
            </Helmet>
                <Banner></Banner>
                <Category></Category>
                <Service></Service>
                <PopularMenu></PopularMenu>
                <ChefRecommends></ChefRecommends>
                <Featured></Featured>
                <Testimonials></Testimonials>
        </div>
    );
};

export default Home;