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
    <h1 className="project-header">Some of Anders "Acke" Strömberg's Projects</h1>
	<div
		className="project-background"
		style={{
			width: '80%',
			maxWidth: '1000px',
			margin: '0 auto',
			padding: '0.5rem 1rem' }}>
		<p style={{ fontSize: '1rem' }}>
			Last update: 12th august 2020
		</p>
		<p>
			The main focus for all of these projects are the techniques used to create them.
			A lot can be said regarding the look and appearance. In fact I have some quite
			strong opinions of the 'look-and-feel' for Internet sites.
			But I do also, which is more important for me, have a strong interrest for the
			different techniques used to create, build and deploy sites, both locally and on the cloud.
			All of the projects listed below are written by me, <strong>Anders Strömberg</strong>. I have learnt from following tutorials
			and reading blogs and afterwards trying it out on my own.
			Under project details for every project there are information about the creation of the project,
			the techniques that has been used and some useful links to GitHub or other Internet pages.
		</p>
		<p>
			This particular site is written in Gatsby and GraphQL.
			It is run by from a headless CMS that lies on SanityIO.
			The project is divided into two separate ones which are both on GitHub.
		</p>

		<hr />

		<p>
			<strong><Link to="https://github.com/anst9000/Andy-Project-Overview-Gatsby">anst9000/Andy-Project-Overview-Gatsby</Link></strong>
			<br />
			<strong><Link to="https://github.com/anst9000/Andy-Project-Overview-Sanity">anst9000/Andy-Project-Overview-Sanity</Link></strong>
			<br />
		</p>

		<hr />

		<p>
			It is deployed on Netlify.com and connected to my GitHub account.
			So whenever I push something to this project on GitHub there is a trigger
			which deploys to the Internet site.
			The link to this site on Netlify is
		</p>
		<p>
			<strong><Link to="https://wonderful-goldstine-d8181a.netlify.app">https://wonderful-goldstine-d8181a.netlify.app</Link></strong>
		</p>
		<p>
			I will get a separate domain name from Namecheap.com where I have the rest of my domains and connect to this site.
			Hopefully this week. We'll see!
		</p>

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