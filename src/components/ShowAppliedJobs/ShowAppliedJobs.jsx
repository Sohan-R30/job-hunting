import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ShowAppliedJobs = ({appliedJobData}) => {
    console.log(appliedJobData);
    const {companyLogo,id,companyName,fulltimeOrPartTime,remoteOrOnsite,salary,location,jobTitle} = appliedJobData;
    return (
        <div className='max-w-xs md:max-w-7xl mx-auto md:flex items-center gap-8 my-6 border border-borderColor p-7 rounded-lg'>
            <img className='w-52 bg-[#F4F4F4] py-20 px-12 rounded-lg' src={companyLogo} alt={companyName} />
            <div className=' flex-grow'>
                <h2 className='font-bold text-2xl text-textPrimary mt-4'>{jobTitle}</h2>
                <p className='text-xl text-textSecondary mt-2'>{companyName}</p>
                <div className='flex gap-4 mt-2 flex-wrap'>
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
            </div>
            <Link to={`/${id}`}>
                <button className='primary-btn w-40'>View Details</button>
            </Link>
        </div>
    );
};

export default ShowAppliedJobs;