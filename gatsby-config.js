module.exports = {
  siteMetadata: {
    title: 'Mikrasov Design',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mikrasov Design: Michael Nerkasov Homepage',
        short_name: 'Mikrasov Design',
        start_url: '/',
        background_color: '#0277bd',
        theme_color: '#0277bd',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 400 }
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 500,
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
        ]
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    'gatsby-plugin-catch-links',

    'gatsby-plugin-offline',
  ],
}
