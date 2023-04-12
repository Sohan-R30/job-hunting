import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className=' max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center  gap-5 items-center pt-12'>
                <Link to="/">
                    <h2 className='font-bold text-3xl leading-10 text-primaryColor'>Job Hunting</h2>
                </Link> 
                <div className='text-secondaryColor grid grid-cols-4 gap-2 justify-items-center items-center break-words'>
                    <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
                    <NavLink to="/statistics" className={({isActive}) => isActive ? 'active-link' : ''}>Statistics</NavLink>
                    <NavLink to="/applied-jobs" className={({isActive}) => isActive ? 'active-link' : ''}>Applied Jobs</NavLink>
                    <NavLink to="/blog" className={({isActive}) => isActive ? 'active-link' : ''}>Blog</NavLink>
                </div>
                <button className='primary-btn w-40 sm:w-52 text-xl'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;

    