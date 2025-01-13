import ShopCategory from "../ShopCategory/ShopCategory";


const OrderTab = ({item}) => {
    return (
        <div>
            <div className="grid lg:grid-cols-4 w-11/12 mx-auto gap-8">
                {
                    item.map(item => <ShopCategory key={item._id} item={item}></ShopCategory>)
                }
            </div>
        </div>
    );
};

export default OrderTab;