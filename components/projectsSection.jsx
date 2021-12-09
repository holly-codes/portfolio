import React from 'react';
import PropTypes from 'prop-types';
import Project from './project';
import utils from '../styles/utils.module.scss';
import styles from '../styles/ProjectsSection.module.scss';

const ProjectsSection = function({projectsSection}) {
    return (
        <>
        <span className={utils.dashedHeader}>
            <h2>{projectsSection.sectionName}</h2>
          </span>
          <div className={styles.projectsContainer}>
            {projectsSection.projectsCollection.items.map(project => 
                (<Project key={project.projectName} 
                         imageUrl={project.imageUrl} 
                         imageAltText={project.imageAltText} 
                         projectName={project.projectName} 
                         websiteUrl={project.websiteUrl} 
                         technologies={project.technologiesUsedCollection.items} 
                         description={project.description}/>))}
        </div>
        </>
    )
}

ProjectsSection.propTypes = {
    projectsSection: PropTypes.objectOf(PropTypes.object).isRequired
}

export default ProjectsSection;