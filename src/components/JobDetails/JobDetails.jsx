import React from 'react';

const JobDetails = () => {
    return (
        <div className='bg-color relative'>
            <Header></Header>
            <p className='text-center mt-14 font-bold text-3xl'>Job Details</p>
            <div>
                 <img src="/resources/images/Vector.png" alt="" />
                 <img className='absolute top-0 right-0' src="/resources/images/Vector-1.png" alt="" />
            </div>
        </div>
    );
};

export default JobDetails;