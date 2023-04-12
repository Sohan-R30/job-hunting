import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <>
        <header className='bg-color relative'>
            <Header></Header>
            <p className='text-center mt-14 font-bold text-3xl'>Blog</p>
            <div>
                 <img src="/resources/images/Vector.png" alt="" />
                 <img className='absolute top-0 right-0' src="/resources/images/Vector-1.png" alt="" />
            </div>
        </header>
        <div className='text-justify border-2 w-3/4 mx-auto m-10 p-10 rounded-lg'>
                <div>
                    <p className='text-2xl font-bold'>1. When should you use context API?</p>
                </div>
                <div className='mt-10'>
                    <p className='text-2xl font-bold'>2. What is a custom hook?</p>
                </div>
                <div className='mt-10'>
                    <p className='text-2xl font-bold'>3. What is useRef?</p>
                </div>
                <div className='mt-10'>
                    <p className='text-2xl font-bold'>4. What is useMemo</p>
                </div>
                
        </div>
        <footer className='mt-32 w-full bg-primaryColor 2xl:px-72'>
                <Footer></Footer>
        </footer>
        </>
    );
};

export default Blog;