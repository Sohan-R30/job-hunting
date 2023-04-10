import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='max-w-screen-xl mx-auto flex  justify-between items-center mt-12'>
            <Link to="/">
                <h2 className='font-bold text-3xl leading-10 text-textPrimary'>Job Hunting</h2>
            </Link>
            <div className='text-textSecondary flex gap-10'>
                <NavLink to="statistics" className={({isActive}) => isActive ? 'active-link' : ''}>Statistics</NavLink>
                <NavLink to="applied-jobs" className={({isActive}) => isActive ? 'active-link' : ''}>Applied Jobs</NavLink>
                <NavLink to="blog" className={({isActive}) => isActive ? 'active-link' : ''}>Blog</NavLink>
            </div>
            <button className='primary-btn text-xl'>Star Applying</button>
        </div>
    );
};

export default Header;

    