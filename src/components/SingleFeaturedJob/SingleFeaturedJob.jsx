import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const SingleFeaturedJob = ({singleFeaturedJob}) => {
    const {companyLogo,id,companyName,fulltimeOrPartTime,jobTitle,salary,remoteOrOnsite,location} =singleFeaturedJob;

    return (
        <div className=' w-9/12 sm:w-2/4 lg:max-w-2xl lg:min-w-full  h-full border border-borderColor py-10 pl-10 rounded-lg flex flex-col text-start'>
            <img className='max-w-xs max-h-28 min-h-[120px]' src={companyLogo} alt={companyName} />
            <h2 className='font-extrabold text-2xl text-textPrimary mt-8'>{jobTitle}</h2>
            <p className='text-xl text-textSecondary mt-4'>{companyName}</p>
            <div className='flex gap-4 mt-4 flex-wrap'>
                <button className='border-2 py-2 px-5 border-[#7E90FE] rounded-md'>{remoteOrOnsite}</button>
                <button className='border-2 py-2 px-5 border-[#7E90FE] rounded-md'>{fulltimeOrPartTime}</button>
            </div>
            <div className='text-xl text-textSecondary flex gap-5 my-4 flex-wrap break-words'>
                <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>{location}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='border rounded-full w-6 h-6 flex justify-center items-center'><FontAwesomeIcon icon={faDollarSign} /></p>
                    <p>{salary}</p>
                </div>
            </div>
            <Link to={`/${id}`}>
                <button className='primary-btn mt-auto w-2/3 '>View Details</button>
            </Link>
        </div>
    );
};

export default SingleFeaturedJob;