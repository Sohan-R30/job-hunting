import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-full bg-color'>
            {/* <Banner></Banner> */}
            {/* <Banner></Banner> */}
            <Header></Header>
            <Banner></Banner>
        </div>
    );
};
// bg-color
export default Home;