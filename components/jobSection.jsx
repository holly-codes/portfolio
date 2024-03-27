import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/JobSection.module.scss';
import ResumeJob from './resumeJob';

const JobSection = function({jobs}) {
    return(
        <div className={styles.jobsContainer}>
            {jobs.map(job => <ResumeJob key={job.jobName} job={job}/>)}
        </div>
    );
}

JobSection.propTypes = {
    jobs: PropTypes.objectOf(PropTypes.shape({})).isRequired
}

export default JobSection;