import PropTypes from 'prop-types'

const Job = ({ job }) => {
    console.log(job)
    const { logo, category_name, availability } = job;
    return (

        <div className="card card-compact w-auto shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>

    );
};

Job.propTypes = {
    job: PropTypes.object
}
export default Job;