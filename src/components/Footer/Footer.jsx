import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <div className='flex flex-wrap text-justify justify-around py-20 leading-8 '>
                <div className='sm:w-80'>
                    <h2 className='font-bold text-3xl leading-10 text-white py-5'>Job Hunting</h2>
                    <p className='text-secondaryColor'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='flex gap-8 pt-5'>
                        <div className='text-[#337FFF] bg-white w-10 h-10 rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className='text-[#33CCFF] bg-white w-10 h-10 rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className='text-[#5B4FE9] bg-white w-10 h-10 rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>    
                    </div>
                </div>
                <div>
                    <p className='font-bold text-xl text-white py-5'>Company</p>
                    <p className='text-secondaryColor'>About Us</p>
                    <p className='text-secondaryColor'>Work</p>
                    <p className='text-secondaryColor'>Latest News</p>
                    <p className='text-secondaryColor'>Careers</p>
                </div>
                <div>
                    <p className='font-bold text-xl text-white py-5'>Product</p>
                    <p className='text-secondaryColor'>Prototype</p>
                    <p className='text-secondaryColor'>Plans & Pricing</p>
                    <p className='text-secondaryColor'>Customers</p>
                    <p className='text-secondaryColor'>Integrations</p>
                </div>
                <div>
                    <p className='font-bold text-xl text-white py-5'>Support</p>
                    <p className='text-secondaryColor'>Help Desk</p>
                    <p className='text-secondaryColor'>Sales</p>
                    <p className='text-secondaryColor'>Become a Partner</p>
                    <p className='text-secondaryColor'>Developers</p>
                </div>
                <div>
                    <p className='font-bold text-xl text-white py-5'>Contact</p>
                    <p className='text-secondaryColor'>524 Broadway , NYC</p>
                    <p className='text-secondaryColor'>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <div className='text-secondaryColor flex flex-wrap text-justify justify-start  px-14 pb-10'>
                <p className='flex-grow'>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </>
    );
};

export default Footer;