import React from 'react';
import PropTypes from 'prop-types';
import JobContentSection from './jobContentSection'
import styles from '../styles/ResumeJob.module.scss';

const ResumeJob = function({job}) {
    return (
        <div className={styles.jobCard}>
            <h3 className={styles.companyName}>{job.companyName}</h3>
            <p>
                <strong className={styles.jobTitle}>
                {job.jobTitle}
                </strong>
                <em className={styles.datesOfEmployment}>
                {job.timeSpan}
                </em>
            </p>
            {
            // eslint-disable-next-line react/prop-types
            job.contentSectionsCollection.items.map(section => <JobContentSection key={section.sectionName} section={section}/>)}
        </div>
    )
}

ResumeJob.propTypes = {
    job: PropTypes.objectOf(PropTypes.shape({})).isRequired
}

export default ResumeJob;