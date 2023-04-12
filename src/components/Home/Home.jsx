import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <header className='w-full bg-color'>
                <Header></Header>
                <Banner></Banner>
            </header>
            <main>
                <CategoryList></CategoryList>
                <FeaturedJob></FeaturedJob>
            </main>
            <footer className='mt-32 w-full bg-primaryColor 2xl:px-72'>
                <Footer></Footer>
            </footer>
        </>
    );
};
export default Home;