import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ResumeJob from './resumeJob';
import styles from '../styles/ResumeSection.module.scss';
import utils from '../styles/utils.module.scss';

const ResumeSection = function({resumeSection}){
    return (
        <div className={styles.resumeSection}>
            <span className={utils.dashedHeader}>
              <h2>{resumeSection.sectionName}</h2>
            </span>
            {resumeSection.sectionContent ? 

            // eslint-disable-next-line react/prop-types
                documentToReactComponents(resumeSection.sectionContent.json) : ""}
            {
            // eslint-disable-next-line react/prop-types
            resumeSection.jobsCollection.items.map(job => <ResumeJob key={job.companyName} job={job}/>)}
        </div>
    )
}

ResumeSection.propTypes = {
    resumeSection: PropTypes.objectOf(PropTypes.shape({})).isRequired
}

export default ResumeSection;