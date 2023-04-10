import React, { useEffect, useState } from 'react';
import SingleFeaturedJob from '../SingleFeaturedJob/SingleFeaturedJob';

const FeaturedJob = () => {
    const [featuredJob, setFeaturedJob] = useState();

    useEffect(() => {
        fetch("jobData.json")
            .then(res => res.json())
            .then(data => setFeaturedJob(data))
    },[])

    return (
        <div className='mt-32 max-w-7xl mx-auto'>
            <div className='text-center'>
                <h3 className='text-textPrimary font-extrabold text-5xl pb-4'>Job Category List</h3>
                <p className='text-textSecondary'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  justify-items-center justify-center items-center gap-6 mt-8'>
                    {
                        featuredJob && featuredJob.map(singleFeaturedJob => <SingleFeaturedJob singleFeaturedJob={singleFeaturedJob} key={singleFeaturedJob.id}></SingleFeaturedJob>)
                    }
            </div>
        </div>
    );
};

export default FeaturedJob;