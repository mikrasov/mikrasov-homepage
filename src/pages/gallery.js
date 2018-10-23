import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import Album from '../components/album'


const GalleryPage = ({ children }) => (
  <StaticQuery
    query={graphql`
    {
    allMarkdownRemark(sort: { order: DESC, fields: [fields___date] }, filter:{frontmatter:{album:{ne:null}}} ) {
      edges {
        node {
          id
          fields {
            slug
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

      profileImage: file(relativePath: { eq: "profile/profile-photo.png" }) {
        childImageSharp {
          fluid(maxWidth: 225) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `}

    render={data => (

      <Layout sideImage={data.profileImage}  active={"gallery"}>
      <h1>Recent Albums</h1>
      <div >
        {data.allMarkdownRemark.edges
          .map(({ node: album }) => {
            return <Album album={album} />
          })}
      </div>
    </Layout>
      )}
  />
)

export default GalleryPage

