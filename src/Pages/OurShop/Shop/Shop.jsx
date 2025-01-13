import Cover from "../../Shared/Cover/Cover";
import shopImage from '../../../assets/shop/banner2.jpg'
import { Helmet } from "react-helmet-async";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";


const Shop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTebIndex] = useState(initialIndex)

    const [menu] = useMenu()
    
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div className="mb-20">
            <Helmet> <title>Bistroo Boss || Our Shop</title></Helmet>
            <Cover img={shopImage} title={'our shop'}></Cover>



            <div className="mt-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => { setTebIndex(index) }}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>


                    {/* SALAD */}
                    <TabPanel>
                        <OrderTab item={salad}></OrderTab>
                    </TabPanel>


                    {/* PIZZA */}
                    <TabPanel>
                        <OrderTab item={pizza}></OrderTab>
                    </TabPanel>


                    {/* SOUPS */}
                    <TabPanel>
                        <OrderTab item={soup}></OrderTab>
                    </TabPanel>


                    {/* DESSERTS */}
                    <TabPanel>
                        <OrderTab item={dessert}></OrderTab>
                    </TabPanel>


                    {/* DRINKS */}
                    <TabPanel>
                        <OrderTab item={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Shop;