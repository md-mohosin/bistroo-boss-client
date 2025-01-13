

const MenuItem = ({ item }) => {
    const { name, recipe, image,price } = item
    return (
        <div className="flex items-center gap-4 mb-4">
            <img className="w-28 h-28 rounded rounded-tr-full rounded-bl-full rounded-br-full" src={image} alt="" />
            <div>
                <h3>{name}--------</h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;