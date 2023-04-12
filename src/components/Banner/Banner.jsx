import React from 'react';

const Banner = () => {
    return (
        <div className='min-h-[900px]  relative  max-w-screen-xl mx-auto '>
            <div className='grid grid-cols-1 sm:grid-cols-2  justify-items-center items-center lg:gap-10 '>
                <div className='mx-20 md:mx-0 sm:px-0 mt-10 md:absolute md:bottom-1/3 md:left-20'>
                    <h2 className='text-2xl md:text-7xl font-extrabold pb-6'>
                        One Step <br /> Closer To Your <br /><span className='active-link'>Dream Job</span>
                    </h2>
                    <p className='text-secondaryColor break-words'>
                        Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />  your job application from start to finish.
                    </p>
                    <button className='primary-btn w-40 mt-5 text-xl'>Get Started</button>
                </div>
                <div className='absolute bottom-0 right-0'>
                    <img className='' src="/resources/images/P3OLGJ1-copy-1.png" alt="" />
                </div>
            </div>
        </div>  
    );
};

export default Banner;