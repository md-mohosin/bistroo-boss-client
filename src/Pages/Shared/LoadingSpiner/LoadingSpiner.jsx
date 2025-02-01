import { Vortex } from "react-loader-spinner";

const LoadingSpiner = () => {
    return (
        <div
            className={'flex flex-col justify-center items-center min-h-screen'} >
            <Vortex
                visible={true}
                height="100"
                width="100"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    );
};

export default LoadingSpiner;