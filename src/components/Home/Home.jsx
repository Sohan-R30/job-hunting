import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Home = () => {
    return (
        <>
        <div className='w-full bg-color'>
            <Header></Header>
            <Banner></Banner>
        </div>
        <CategoryList></CategoryList>
        <FeaturedJob></FeaturedJob>
        </>
    );
};
// bg-color
export default Home;