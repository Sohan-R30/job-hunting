import React, { useEffect, useState } from 'react';
import SingleFeaturedJob from '../SingleFeaturedJob/SingleFeaturedJob';
import { useLoaderData } from 'react-router-dom';

const FeaturedJob = () => {
    const [featuredJob, setFeaturedJob] = useState([]);

    const jobDataLoad = useLoaderData();
    let slicedJobOrFullJobs = [];

    useEffect(() => {
        slicedJobOrFullJobs = jobDataLoad.slice(0,4)
        setFeaturedJob(slicedJobOrFullJobs)
    },[])

    const handleLoadAllJobs = () => {
        slicedJobOrFullJobs = [...jobDataLoad];
        setFeaturedJob(slicedJobOrFullJobs)
    }

    return (
        <div className='mt-32 max-w-7xl mx-auto'>
            <div className='text-center'>
                <h3 className='text-primaryColor font-extrabold text-5xl pb-4 break-all'>Featured Jobs</h3>
                <p className='text-secondaryColor'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='max-w-5xl mx-auto xl:max-w-6xl grid grid-cols-1 lg:grid-cols-2   justify-items-center justify-center items-center gap-6 mt-8'>
                    {
                       featuredJob && featuredJob.map(singleFeaturedJob => <SingleFeaturedJob singleFeaturedJob={singleFeaturedJob} key={singleFeaturedJob.id}></SingleFeaturedJob>)
                    }
            </div>
            {
                featuredJob.length === jobDataLoad.length ? "" : 
                <div className='text-center mt-10' >
                    <button onClick={handleLoadAllJobs}  className='primary-btn w-44 :'>See All Jobs</button>
                </div>
            }
        </div>
    );
};

export default FeaturedJob;