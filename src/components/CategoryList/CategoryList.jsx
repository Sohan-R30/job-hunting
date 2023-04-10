import React, { useEffect, useState } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';

const CategoryList = () => {
    const [category, setCategory] = useState();

    useEffect(() => {
       fetch('categoryData.json')
        .then(res => res.json())
        .then(data => setCategory(data))
      },[]);
    return (
        <div className='mt-32 max-w-7xl mx-auto'>
            <div className='text-center'>
                <h3 className='text-textPrimary font-extrabold text-5xl pb-4'>Job Category List</h3>
                <p className='text-textSecondary'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-6 mt-8'>
                {
                   category && category.map(singleCategory => <SingleCategory singleCategory={singleCategory} key={singleCategory._id}></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default CategoryList;
