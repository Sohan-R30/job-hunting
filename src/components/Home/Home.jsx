import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import CategoryList from '../CategoryList/CategoryList';

const Home = () => {
    return (
        <div className='w-full bg-color'>
            <Header></Header>
            <Banner></Banner>
            <CategoryList></CategoryList>
        </div>
    );
};
// bg-color
export default Home;