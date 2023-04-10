import React from 'react';

const SingleCategory = ({singleCategory}) => {
    const {category_logo,category_name,jobs_availabe} = singleCategory;
    return (
        <div className=' w-80 h-60 bg-color py-10 pl-10'>
            <div className='rounded-lg mb-4'>
                <img className='p-4 rounded-lg icon-bg' src={category_logo} alt={category_name} />
            </div>
            <h4 className='pb-2 text-xl font-extrabold text-textPrimary'>{category_name}</h4>
            <p className='text-textSecondary'>{jobs_availabe} Jobs Available</p>
        </div>
    );
};

export default SingleCategory;