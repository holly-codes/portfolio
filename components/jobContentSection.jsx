import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const JobContentSection = function ({section}) {
    return(
        <>
            <h4>{section.sectionTitle}</h4>
            {documentToReactComponents(section.sectionContent.json)}
        </>
    )
}

JobContentSection.propTypes = {
    section: PropTypes.objectOf(PropTypes.object).isRequired
}

export default JobContentSection;