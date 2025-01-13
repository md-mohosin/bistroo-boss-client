import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items,category}) => {
    return (
        <div className="w-10/12 mx-auto">
            <div className="grid grid-cols-2 gap-4">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/ourShop/${category}`}>
                    <button className="btn btn-outline border-0 border-b-4 border-black text-black">ORDER YOUR FAVOURTE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;