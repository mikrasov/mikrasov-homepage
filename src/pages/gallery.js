import React from 'react'
import { Link, graphql } from "gatsby"

import Img from 'gatsby-image'
import Layout from '../components/layout'
import Album from '../components/album'
export default function GalleryPage({ data }) {
  const { edges: albums } = data.allMarkdownRemark;
  
  return (
    <Layout>
      <h1>Recent Albums</h1>
      <div >
        {albums
          .map(({ node: album }) => {
            return <Album album={album} />
          })}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query GalleryQuery {
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
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    
  }
`;

