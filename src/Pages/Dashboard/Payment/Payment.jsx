import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


const stripePromis = loadStripe(import.meta.env.VITE_stripe_PYEMENT_GETWAY_PK)
const Payment = () => {
    return (
        <div className="w-11/12 pl-36">
            <SectionTitle heading={'pyment'}></SectionTitle>
            <div>
                <Elements stripe={stripePromis}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;