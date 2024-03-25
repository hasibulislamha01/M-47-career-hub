
const Banner = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="border border-red-400 h-full flex flex-col gap-8">
                <h1 className="text-6xl">One Step Closer To Your Dream Job</h1>
                <p>
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className='btn bg-[#7E90FE]'>Get Started</button>
            </div>

            <div className="border border-red-400">
                <img src="images/banner-image.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;