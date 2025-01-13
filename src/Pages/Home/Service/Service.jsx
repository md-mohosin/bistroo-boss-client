import serviceImage from '../../../assets/home/chef-service.jpg'

const Service = () => {
    return (
        <div className='my-20 w-auto h-auto'>

            <div style={{backgroundImage:`url(${serviceImage})`}} className='w-10/12 h-[500px] flex justify-center items-center bg-cover mx-auto'>

            <div className='bg-white w-5/6 mx-auto text-center p-20'>
                <h1 className='text-3xl pb-2'>Bistro Boss</h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>

            </div>
        </div>
    );
};

export default Service;