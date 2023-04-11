import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import { getJobData } from '../StoreData/StoreData';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';

const AppliedJobs = () => {
    const [appliedJobData, setAppliedJobData] = useState([]);

    const allJobData = useLoaderData();
    const AppliedJobs = [];

    const IdFromLocalDb = getJobData();
    const IdArr = []
    
    for (const id in IdFromLocalDb) {
        IdArr.push(id)
    }
    for (const id of IdArr) {
        const singleAppliedJob = allJobData.find(singleData => singleData.id === id)
        AppliedJobs.push(singleAppliedJob);
    }

    useEffect(() => {
            setAppliedJobData(AppliedJobs)
    },[])

    return (
        <>
            
            <div className='bg-color relative'>
                <Header></Header>
                <p className='text-center mt-14 font-bold text-3xl'>Applied Jobs</p>
                <div>
                    <img src="/resources/images/Vector.png" alt="" />
                    <img className='absolute top-0 right-0' src="/resources/images/Vector-1.png" alt="" />
                </div>
            </div>
            <div className='max-w-7xl mx-auto mt-56'>
                {
                    appliedJobData.map(apd => <ShowAppliedJobs appliedJobData={apd} key={apd.id}></ShowAppliedJobs>)
                }
            </div>
        </>
    );
};

export default AppliedJobs;