import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faDollarSign } from '@fortawesome/free-solid-svg-icons';

const SingleFeaturedJob = ({singleFeaturedJob}) => {
    console.log("🚀 ~ file: SingleFeaturedJob.jsx:4 ~ SingleFeaturedJob ~ singleFeaturedJob:", singleFeaturedJob)
    const {companyLogo,companyName,fulltimeOrPartTime,id,jobTitle,salary,remoteOrOnsite,location} =singleFeaturedJob;
    return (
        <div className='max-w-2xl min-w-full  h-full border border-borderColor py-10 pl-10 rounded-lg flex flex-col'>
            <img className='max-w-xs max-h-28 min-h-[120px]' src={companyLogo} alt={companyName} />
            <h2 className='font-extrabold text-2xl text-textPrimary mt-8'>{jobTitle}</h2>
            <p className='text-xl text-textSecondary mt-4'>{companyName}</p>
            <div className='flex gap-4 mt-4'>
                <button className='border-2 py-2 px-5 border-[#7E90FE] rounded-md'>{remoteOrOnsite}</button>
                <button className='border-2 py-2 px-5 border-[#7E90FE] rounded-md'>{fulltimeOrPartTime}</button>
            </div>
            <div className='text-xl text-textSecondary flex gap-5 my-4'>
                <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>{location}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='border rounded-full w-6 h-6 flex justify-center items-center'><FontAwesomeIcon icon={faDollarSign} /></p>
                    <p>{salary}</p>
                </div>
            </div>
            <button className='primary-btn w-40 mt-auto'>View Details</button>
        </div>
    );
};

export default SingleFeaturedJob;