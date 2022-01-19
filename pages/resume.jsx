import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import styles from '../styles/Resume.module.scss';
import ResumeSection from '../components/resumeSection';


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
          resumeSectionCollection(limit: 10) {
            items {
              jobsCollection(limit: 10) {
                items {
                  ... on Job {
                    companyName
                    jobTitle
                    contentSectionsCollection(limit: 10) {
                      items {
                        ... on JobContentSection {
                          sectionName
                          sectionTitle
                          sectionContent {
                            json
                          }
                        }
                      }
                    }
                  }
                }
              }
              sectionName
              sectionContent {
                json
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
      resumeSections: data.resumeSectionCollection.items
    }
  }
};

const Resume = function({resumeSections}) {
  return (
    <Layout pageName="Resume" showFooter>
        <div className={styles.resumeContent}>
          <div className={styles.headerContent}>
            <h1>Resume</h1>
            <a href="https://holly-codes.com/Holly-Burinda-Resume.pdf" className={styles.downloadButton} download="Holly Burinda Resume">Download a PDF copy of my resume!</a>
          </div>
          
          {resumeSections.map(section => (<ResumeSection key={section.sectionName} resumeSection={section}/>))}
        </div>
      </Layout>
  );
}

Resume.propTypes = {
  resumeSections: PropTypes.objectOf(PropTypes.object).isRequired
}

export default Resume;
