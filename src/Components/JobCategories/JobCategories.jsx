import { useEffect, useState } from "react";
import Job from "./Job";
const JobCategories = () => {

    const [jobs, setJobs] = useState([]);

    

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    console.log(jobs)

    return (
        <div className="text-center">
            <h1 className="text-5xl">Job Category List : {jobs.length}</h1>
            <p>
                Explore thousands of job opportunities with all the information you need. Its your futur
            </p>
            <div className="grid grid-cols-4 gap-4">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default JobCategories;