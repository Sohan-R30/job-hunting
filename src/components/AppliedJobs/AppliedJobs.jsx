import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import { getJobData } from '../StoreData/StoreData';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';
import Footer from '../Footer/Footer';

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
    
    const handleRemoteJobs = () => {
        const allRemoteJobs = AppliedJobs.filter(singleData => singleData.remoteOrOnsite === 'Remote');
        setAppliedJobData(allRemoteJobs);

    }
    const handleOnsiteJobs = () => {
        const allOnsiteJobs = AppliedJobs.filter(singleData => singleData.remoteOrOnsite === 'Onsite');
        setAppliedJobData(allOnsiteJobs);
    }

    useEffect(() => {
            setAppliedJobData(AppliedJobs);
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
            <div className='max-w-7xl mx-auto mt-56 relative'>
                <div className="absolute right-5 -top-28 dropdown dropdown-left dropdown-hover mb-24">
                    <label tabIndex={0} className="btn primary-btn w-40 m-1 border-none">Filter By</label>
                    <ul tabIndex={0} className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-48">
                        <li onClick={handleRemoteJobs}><button >Show Remote Jobs</button></li>
                        <li onClick={handleOnsiteJobs}><button >Show Onsite Jobs</button></li>
                    </ul>
                </div>
                {
                    appliedJobData.length === 0 ? <p className='text-center text-4xl text-red-500 font-bold'>Data Not Fount</p> : ''
                }
                {
                    appliedJobData.map(apd => <ShowAppliedJobs appliedJobData={apd} key={apd.id}></ShowAppliedJobs>)
                }
            </div>
            <div className='mt-32 w-full bg-primaryColor 2xl:px-72'>
                <Footer></Footer>
            </div>
        </>
    )
}
export default AppliedJobs;