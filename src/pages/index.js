import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          description
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          link
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="projects-header">My Projects</h1>
	<div className="background">
		<p>This particular site is written in Gatsby and GraphQL. It is run by from a headless CMS that lies on SanityIO. The project is divided into two separate ones also on GitHub. It is deployed on Netlify.com and connected to my GitHub account.</p>
	</div>
      <ul
        style={{
          listStyle: 'none',
        }}
      >
      <div className="container">
        {data.allSanityProject.edges.map(({ node: project }) => (
          <li className="project-list"
            key={project.slug.current}
          >
            <h2 style={{ fontSize: '24px' }}>
              <Link to={project.slug.current}>
                {(project.title).length >= 25 ? (project.title).substring(0, 25) + `...` : project.title}
              </Link>
            </h2>
            <Image style={{ border: '2px solid black', marginBottom: '1rem' }} fluid={project.image.asset.fluid} alt={project.title} />
            <p style={{ marginTop: '1rem' }}>{(project.description).substring(0, 75)}...</p>
            <p><Link to={project.slug.current}>See project details</Link></p>
          </li>
        ))}
        </div>
      </ul>
  </Layout>
);

export default IndexPage;