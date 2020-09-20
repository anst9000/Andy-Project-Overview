import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout';

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      description
      link
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default ({ data }) => (
  <Layout>
    <div className="project-details"
        style={{
        maxWidth: '75%',
        margin: '0 auto 1rem auto'
      }}

    >
    <h1
      style={{
        paddingTop: '2rem',
        textAlign: 'center'
      }}
    >{data.sanityProject.title}</h1>

    <Image
      fluid={data.sanityProject.image.asset.fluid}
      alt={data.sanityProject.title}
      style={{
        width: '75%',
        height: '75%',
        display: 'block',
        margin: '0 auto',
        border: '1px solid black',
      }}
    />
    <p style={{ marginTop: '1rem', textAlign: 'center'}}><a href={data.sanityProject.link} style={{ fontWeight:'700' }}>{data.sanityProject.link}</a></p>

    <p>{data.sanityProject.description}</p>
    <Link to="/"
    style={{
      margin: '1rem 0',
      fontSize: '10px',
      backgroundColor: '#663399',
      color: 'white',
      padding: '0.8em 1em',
      textDecoration: 'none',
      textTransform: 'uppercase'
    }}
    >Back to home</Link>
    </div>
  </Layout>
);