module.exports = {
  siteMetadata: {
    title: 'Imagine Dragons',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `a7c41jx39mti`,
        accessToken: '4202ca93b55eda18133d5e83f93afec01c795919d7b34530c2f113ad69bcbdaf',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Imagine Dragons',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 225
      }
    }
  ],
  pathPrefix: "/imagine-dragons",
}
