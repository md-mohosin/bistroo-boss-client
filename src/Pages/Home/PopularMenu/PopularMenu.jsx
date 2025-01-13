
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <div className="w-10/12 mx-auto mb-8">
            <section>
                <SectionTitle
                    subHeading={'---Popular Menu---'}
                    heading={'From Our Menu'}
                ></SectionTitle>
            </section>
            <div className="grid grid-cols-2 gap-4">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;