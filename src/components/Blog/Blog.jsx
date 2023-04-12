import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <>
        <div className='bg-color relative'>
            <Header></Header>
            <p className='text-center mt-14 font-bold text-3xl'>Blog</p>
            <div>
                 <img src="/resources/images/Vector.png" alt="" />
                 <img className='absolute top-0 right-0' src="/resources/images/Vector-1.png" alt="" />
            </div>
        </div>
            <div className='text-justify border-2 w-3/4 mx-auto m-10 p-10 rounded-lg break-words'>
                <div>
                    <p className='text-2xl font-bold'>1. When should you use context API?</p>
                    <p className='text-secondaryColor pl-4'>context api is used for share data between component.
                        we can share data by using context api from parent 
                        component to nested children components.when we need
                        to pass data by props in 6/7 or more inner nested component
                        then we can use context api for pass data directly to that components
                    </p>
                </div>
                <div className='mt-10'>
                    <p className='text-2xl font-bold'>2. What is a custom hook?</p>
                    <p className='text-secondaryColor pl-4'>
                        custom hook are reuseble functions. custom hooks names are start with use keyword.
                        to create a custom hook, you define a function that uses one or more of the existing
                         react hooks and then export that function.
                    </p>
                </div>
                <div className='mt-10'>
                    <p className='text-2xl font-bold'>3. What is useRef?</p>
                    <p className='text-secondaryColor pl-4'>
                        useRef is a react hook which is a function that returns a mutable ref object . 
                        this ref objectcan be used to keep track of a value across renders without triggering 
                        a re-render.
                    </p>
                </div>
                <div className='mt-10'>
                    <p className='text-2xl font-bold'>4. What is useMemo</p>
                    <p className='text-secondaryColor pl-4'>
                        useMemo is a react hook which is allows you to memoize expensive functions 
                        so that you can avoid calling them on every render.
                    </p>
                </div>
        </div>
        <div className='mt-32 w-full bg-primaryColor 2xl:px-72'>
                <Footer></Footer>
        </div>
        </>
    );
};

export default Blog;