import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='w-full h-[900px] bg-color '>
            <div className='flex gap-10 h-full justify-around items-center flex-wrap max-w-screen-xl mx-auto relative'>
                <div className='w-2/4 md:w-2/5'>
                    <h2 className='text-3xl md:text-7xl font-extrabold pb-6'>
                        One Step <br /> Closer To Your <br /><span className='active-link'>Dream Job</span>
                    </h2>
                    <p className='text-textSecondary w-40 md:w-80 lg:w-96'>
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all  your job application from start to finish.
                    </p>
                    <button className='primary-btn mt-5 text-xl'>Get Started</button>
                </div>
                <div className=''>
                    <img className='absolute right-0 bottom-0  max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-7xl' src="/resources/images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>
        </div>  
    );
};

export default Banner;