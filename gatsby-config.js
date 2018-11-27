const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://mikrasov.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;



module.exports = {
  siteMetadata: {
    title: 'Mikrasov Design',
    twitterUsername: 'mikrasov',
    disqusShortname: "mikrasov-design",
    siteUrl
  },
  plugins: [
    'gatsby-plugin-react-helmet',


    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mikrasov Design: Michael Nekrasov\'s Homepage',
        short_name: 'Mikrasov Design',
        start_url: '/',
        background_color: '#0277bd',
        theme_color: '#0277bd',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-430466-1",
        head: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/news/`,
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
            options: {
              linkImagesToOriginal: false,
              withWebp: true
            }
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
    'gatsby-plugin-react-svg',
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`, //KEEP LAST!
  ],
}
