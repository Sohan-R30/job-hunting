import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const {error,status,statusText} = useRouteError();
    return (
        <div className='h-screen font-extrabold flex flex-col justify-center items-center'>
            <p className="mb-10 text-center text-7xl text-[#e1ffff51] bg-[url('./resources/images/textBg.jpg')] bg-repeat-x bg-clip-text animate-spin-slow">Opps!! <br /> Something Wrong!</p>
            <p className='text-2xl'><span>{status} - <span>{statusText}</span></span></p>
            <p className='text-textSecondary text-xl my-5'>{error.message}</p>
            <Link to="/">
                <button className='primary-btn w-60'>Go To HomePage</button>
            </Link>
        </div>
    );
};

export default Error;