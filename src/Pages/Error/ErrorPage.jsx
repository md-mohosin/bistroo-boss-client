import { Link } from 'react-router-dom';
import errorImage from '../../assets/404.gif'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div>
                <img className='w-[400px] h-[400px]' src={errorImage} alt="" />
                <Link to={-1}>
                    <button className='btn'>Back to home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;