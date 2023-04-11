import Chart from '../Chart/Chart';
import Header from '../Header/Header';
import React from 'react';


const Statistics = () => {
    // const [assignmentData, setAssignmentData] = useState([]);
    // useEffect(() => {
    //     fetch('assignments.json')
    //         .then(res => res.json())
    //         .then(data => setAssignmentData(data))
    //    },[]);
    return (
        <div className='bg-color relative'>
            <Header></Header>
            <p className='text-center mt-14 font-bold text-3xl'>Statistics</p>
            <div>
                 <img src="/resources/images/Vector.png" alt="" />
                 <img className='absolute top-0 right-0' src="/resources/images/Vector-1.png" alt="" />
            </div>
            <Chart></Chart>
        </div>
    );
};

export default Statistics;