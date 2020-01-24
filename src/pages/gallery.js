import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Gallery from '../components/gallery/gallery'
import GallerySidebar from '../components/gallery/gallery-sidebar'


const GalleryPage = ({ children }) => (
  <StaticQuery
    query={graphql`
    {
      profileImage: file(relativePath: { eq: "profile/profile-photo.png" }) {
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
            tags
            slug
            year
            date(formatString: "MMM DD, YYYY")
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
      <Layout sideImage={data.profileImage} sideContent={<GallerySidebar data={data.allMarkdownRemark}/>} active={"gallery"}>
        <h1>Recent Albums</h1>
        <Gallery data={data.allMarkdownRemark}/>
      </Layout>
    )}
  />
)

export default GalleryPage

