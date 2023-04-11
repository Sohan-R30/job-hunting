import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faDollarSign, faCalendarAlt, faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { addToDb } from '../StoreData/StoreData';

const JobDetails = () => {
    const [singleJobData, setSingleJobData] = useState({});

    const jobData = useLoaderData();
    const singleId = useParams();
    useEffect(() => {
        const singleData = jobData.find(singleData => singleData.id === singleId.id);
        setSingleJobData(singleData)
    },[singleJobData])
    const handleStoreData = (id) => {
        addToDb(id)
    }
    return (
        <>
            <div className='bg-color relative'>
                <Header></Header>
                <p className='text-center mt-14 font-bold text-3xl'>Job Details</p>
                <div>
                    <img src="/resources/images/Vector.png" alt="" />
                    <img className='absolute top-0 right-0' src="/resources/images/Vector-1.png" alt="" />
                </div>
            </div>
            <div className=' max-w-7xl mx-auto p-10 m-20 grid grid-cols-1 gap-20 md:grid-cols-2 rounded-lg'>
                   <div className=''>
                        <p className='pb-6 leading-8'><strong>Job Description</strong>: <span className='text-textSecondary'>{singleJobData.jobDescription}</span></p>
                        <p className='pb-6 leading-8'><strong>Job Responsibility</strong>: <span className='text-textSecondary'>{singleJobData.jobResponsibility}</span></p>
                        <p className='pb-6 leading-8'><strong>Educational Requirements</strong>:</p>
                        <p className='pb-6 leading-8'><span className='text-textSecondary'>{singleJobData.educationalRequirements}</span></p>
                        <p className='pb-6 leading-8'><strong>Experiences</strong>:</p>
                        <p className='pb-6 leading-8'><span className='text-textSecondary'>{singleJobData.experiences}</span></p>
                        
                   </div>
                   <div>
                        <div className=' p-8 bg-color text-xl'>
                            <h4 className='border-b pb-6 font-bold'>Job Details</h4>
                            <div className='flex items-center gap-2'>
                                <span className='text-[#7E90FE]'><FontAwesomeIcon icon={faDollarSign} /></span>
                                <p className='py-4'><strong>Salary</strong> : <span className='text-textSecondary'>{singleJobData.salary} (per month)</span></p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='text-[#7E90FE]'><FontAwesomeIcon icon={faCalendarAlt} /></span>
                                <p className=''><strong>Job Title</strong> : <span className='text-textSecondary'>{singleJobData.jobTitle}</span></p>
                            </div>
                            <h4 className='border-b pt-8 pb-6 font-bold'>Contact Information</h4>
                            <div className='flex items-center gap-2'>
                                <span className='text-[#7E90FE]'><FontAwesomeIcon icon={faPhone} /></span>
                                <p className='pt-6 pb-4'><strong>phone</strong> : <span className='text-textSecondary'>{singleJobData.contactInformation?.phone}</span></p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='text-[#7E90FE]'><FontAwesomeIcon icon={faEnvelope} /></span>
                                <p><strong>Email</strong> : <span className='text-textSecondary'>{singleJobData.contactInformation?.email}</span></p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='text-[#7E90FE]'><FontAwesomeIcon icon={faLocationDot} /></span>
                                <p className='py-4'><strong>Address</strong> : <span className='text-textSecondary'>{singleJobData.contactInformation?.address}</span></p>
                            </div>
                        </div>
                        <button onClick={() => handleStoreData(singleId.id)} className='text-center primary-btn flex items-center justify-center text-xl font-bold w-full my-6'>Apply Now</button>
                   </div>
            </div>
        </>
    );
};

export default JobDetails;