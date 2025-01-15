import Cover from "../../Shared/Cover/Cover";
import banner from '../../../assets/contact/banner.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Contact = () => {
    return (
        <div>
            <Cover title={'contact us'} img={banner}></Cover>
            <SectionTitle subHeading={'---Visit us---'} heading={'our location'}></SectionTitle>
        </div>
    );
};

export default Contact;