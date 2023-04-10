import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className=' max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center  gap-5 items-center pt-12'>
                <Link to="/">
                    <h2 className='font-bold text-3xl leading-10 text-textPrimary'>Job Hunting</h2>
                </Link> 
                <div className='text-textSecondary grid grid-cols-3 gap-5 justify-items-center items-center break-keep'>
                    <NavLink to="statistics" className={({isActive}) => isActive ? 'active-link' : ''}>Statistics</NavLink>
                    <NavLink to="applied-jobs" className={({isActive}) => isActive ? 'active-link' : ''}>Applied Jobs</NavLink>
                    <NavLink to="blog" className={({isActive}) => isActive ? 'active-link' : ''}>Blog</NavLink>
                </div>
                <button className='primary-btn text-xl'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;

    