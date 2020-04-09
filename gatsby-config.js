module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: `ahpwryn6`,
        dataset: `production`,
        overlayDrafts: true,
        watchMode: true,
        token: 'sksYIQfHE0mOqkoA1drlnFCipkYsYL9BfTEq5UL9lggAcDQkIagv2qCuXpuplbm2CRGS7YAdXVVdr3s1nQfCImsKEbghUK8DjKzKXVFTmJdWEsekFwr3em0evf6MaREwtJzcbJvqAQnUuTagPpC5YtTUyDq2eoFR9PKiQyG5UagAaIPeKxSr'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
