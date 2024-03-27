import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from '../styles/Project.module.scss';
import utils from '../styles/utils.module.scss';

const Project = function({imageUrl, imageAltText, projectName, websiteUrl, technologies, description}) {
  return (
      <div className={styles.projectCard}>
          <img
            src={imageUrl}
            alt={imageAltText}
          />
          <div className={styles.projectInfo}>
          <span className={utils.magicalUnderline}>
            <a href={websiteUrl}><h3>{projectName}</h3></a>
          </span>
            <h4>Technologies Used:</h4>
            <ul className={styles.technologies}>
                {technologies.map(technology => (<li key={technology.technologyName}>{technology.technologyName}</li>))}
            </ul>
            {documentToReactComponents(description.json)}
          </div>
        </div>
  );
}

Project.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageAltText: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    websiteUrl: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    description: PropTypes.objectOf(PropTypes.shape({})).isRequired
}

export default Project;