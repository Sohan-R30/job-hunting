
const addToDb = id => {
    let jobData = getJobData();
    const quantity = jobData[id];
    if (!quantity) {
        jobData[id] = 1;
    }
    localStorage.setItem('job-data', JSON.stringify(jobData));
}

const removeFromDb = id => {
    const jobData = getJobData();
    if (id in jobData) {
        delete jobData[id];
        localStorage.setItem('job-data', JSON.stringify(jobData));
    }
}

const getJobData = () => {
    let jobData = {};

    const storedData = localStorage.getItem('job-data');
    if (storedData) {
        jobData = JSON.parse(storedData);
    }
    return jobData;
}

const deleteJobData = () => {
    localStorage.removeItem('job-data');
}

export {
    addToDb,
    removeFromDb,
    getJobData,
    deleteJobData
}