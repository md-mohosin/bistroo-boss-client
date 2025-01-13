
const Cover = ({img, title}) => {
    return (
        <div>
            <div
                className="hero bg-cover bg-center h-[650px]"
                style={{
                    backgroundImage: `url("${img}")`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="w-full bg-black bg-opacity-35 px-44 py-20">
                        <h1 className="mb-5 uppercase text-5xl font-bold">{title}</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;