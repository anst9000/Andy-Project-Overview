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
	<div
		className="project-background"
		style={{
			width: '80%',
			maxWidth: '1000px',
			margin: '0 auto',
			padding: '0.5rem 1rem' }}>
    <h1 className="project-header">Some of Anders "Acke" Strömberg's Projects</h1>
		<p style={{ fontSize: '1rem' }}>
			Last update: 19th september 2020
		</p>
		<p>
			The main focus for all of these projects are the techniques behind to create them.
			What I find most interesting is learning and mastering new techniques. Trying to
      understand how everything fits together and how to best use all parts available.
      I have a always loved the feeling you get when you have created something and it works.
      And as a next step building and deploying sites, both locally and on the cloud, and
      seeing the results online, a working creation made by me. It is really satisfactory.
			All of the projects listed below are written by me, <strong>Anders Strömberg</strong>.
      I have learnt from reading books, following tutorials online and reading blogs.
      Afterwards trying out everything on my own and getting my head around it.
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
			<strong><a href="https://github.com/anst9000/Andy-Project-Overview-Gatsby">anst9000/Andy-Project-Overview-Gatsby</a></strong>
			<br />
			<strong><a href="https://github.com/anst9000/Andy-Project-Overview-Sanity">anst9000/Andy-Project-Overview-Sanity</a></strong>
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
			<strong><a href="https://wonderful-goldstine-d8181a.netlify.app">https://wonderful-goldstine-d8181a.netlify.app</a></strong>
		</p>
		<p>
			Now the custom domain name is
		</p>
		<p>
			<strong><a href="https://ackeprojects.xyz/">https://ackeprojects.xyz/</a></strong>
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
            <p style={{ marginTop: '1rem' }}>{(project.description).substring(0, 100)}...</p>
            <p><Link to={project.slug.current}>See project details</Link></p>
          </li>
        ))}
        </div>
      </ul>
  </Layout>
);

export default IndexPage;
