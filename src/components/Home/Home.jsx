import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <div className='w-full bg-color'>
                <Header></Header>
                <Banner></Banner>
            </div>
                <CategoryList></CategoryList>
                <FeaturedJob></FeaturedJob>
            <div className='mt-32 w-full bg-primaryColor 2xl:px-72'>
                <Footer></Footer>
            </div>
        </>
    );
};
export default Home;