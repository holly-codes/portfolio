/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import CodePenEmbed from '../components/codePenEmbed';
import ProjectsSection from '../components/projectsSection';
import styles from '../styles/Projects.module.scss';
import utils from '../styles/utils.module.scss';

export async function getStaticProps(){
  const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
    {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        query: `
        {
          projectsSectionCollection(limit: 2) {
            items {
              sectionName
              projectsCollection(limit: 10) {
                items {
                  ... on Project {
                    projectName
                    imageUrl
                    gitHubUrl
                    imageAltText
                    description {
                      json
                    }
                    websiteUrl
                    technologiesUsedCollection {
                      items {
                        ... on Technology {
                          technologyName
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        `
      })
    }
  );

  const {data} = await response.json();
  return{
    props:{
      projectSections: data.projectsSectionCollection.items
    }
  }
};

const Projects = function({projectSections}) {
  return (
    <Layout pageName="Projects" showFooter>
        <div className={styles.content}>
          <h1>Projects</h1>
          <span className={utils.dashedHeader}>
            <h2>Recent CodePens</h2>
          </span>
          <div className={styles.codePenContainer}>
            <CodePenEmbed penId="PoKMpRW" penName="Manila Folder Link List" embedHeight={650} numColumns={3}/>
            <CodePenEmbed penId="gvbxXq" penName="100 Days of CSS Banner" embedHeight={400}/>
          </div>
          {projectSections.map(section => (<ProjectsSection key={section.sectionName} projectsSection={section}/>))}
        </div>
      </Layout>
  );
}

Projects.propTypes = {
  projectSections: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Projects;
