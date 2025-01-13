

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-3/12 mx-auto text-center my-10">
            <p className="text-yellow-500 pb-3">{subHeading}</p>
            <div className="border"></div>
            <h3 className="lg:text-3xl text-xl uppercase py-3">{heading}</h3>
            <div className="border"></div>
        </div>
    );
};

export default SectionTitle;