import React from 'react'
import Layout from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'



const AboutPage = ({ children }) => (
  <StaticQuery
    query={graphql`
    {
      profileImage: file(relativePath: { eq: "profile/profile-about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 225) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      allMarkdownRemark(sort: { order: DESC, fields: [fields___date] }, filter:{frontmatter:{album:{ne:null}}} ) {
      edges {
        node {
          id
          fields {
            slug
            year
            date(formatString: "MMMM DD, YYYY")
          }
          frontmatter {
            title
            album
            featuredImage {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    }
  `}

    render={data => (

      <Layout sideImage={data.profileImage}  active={"about"}>
        <h1>About</h1>
        <p>Welcome. Thank's for taking interest in me!</p>
        <p>
        I am currently finishing a PhD in Computer Science at UC Santa
        Barbara. My research focuses on wireless aerial networks for environmental and disaster applications. In addition
        to my academic and professional work, I am a photographer, hiker, and adventurer. While you are here I would be
        honored if you checked out some of my work.</p>
      </Layout>

      )}
  />
)

export default AboutPage

