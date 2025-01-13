import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuBanner from '../../../assets/menu/banner3.jpg'
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";



const Menu = () => {

    const [menu] = useMenu()
    const offer = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')

    return (
        <div className="mb-20">
            <Helmet>
                <title>Bistroo Boss || Our Menu</title>
            </Helmet>

                <Cover img={menuBanner} title={'our menu'}></Cover>


            {/* OFFERD */}
            <div className=" mt-20 mb-32">
                <div>
                    <SectionTitle subHeading={"---Don't miss---"} heading={"today's offer"}></SectionTitle>
                    <MenuCategory items={offer} category={'offered'} ></MenuCategory>
                </div>
            </div>


            {/* DESSERT */}
            <div className="mb-32">
                <Cover img={dessertImage} title={'desserts'}></Cover>

                <div className="mt-10">
                    <MenuCategory items={desserts} category={'dessert'} ></MenuCategory>
                </div>
            </div>


            {/* PIZZA */}
            <div className="mb-32">
                <Cover img={pizzaImage} title={'pizza'}></Cover>

                <div className="mt-10">
                    <MenuCategory items={pizza} category={'pizza'} ></MenuCategory>
                </div>
            </div>


            {/* SALADS*/}
            <div className="mb-32">
                <Cover img={saladImage} title={'salads'}></Cover>

                <div className="mt-10">
                    <MenuCategory items={salad} category={'salad'}></MenuCategory>
                </div>
            </div>


            {/* SOUPS */}
            <div>
                <Cover img={soupImage} title={'soups'}></Cover>

                <div className="mt-10">
                    <MenuCategory items={soup} category={'soup'}></MenuCategory>
                </div>
            </div>


        </div>
    );
};

export default Menu;