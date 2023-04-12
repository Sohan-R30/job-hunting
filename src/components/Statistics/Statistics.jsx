import Chart from '../Chart/Chart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import React from 'react';


const Statistics = () => {
    return (
        <>
        <header className='bg-color relative'>
            <Header></Header>
            <p className='text-center mt-14 font-bold text-3xl'>Statistics</p>
            <div>
                <img src="/resources/images/Vector.png" alt="" />
                <img className='absolute top-0 right-0' src="/resources/images/Vector-1.png" alt="" />
            </div>
        </header>
        <main>
            <section>
                <Chart></Chart>
            </section>
        </main>
        <footer className='mt-32 w-full bg-primaryColor 2xl:px-72'>
            <Footer></Footer>
        </footer>
        </>
    );
};

export default Statistics;