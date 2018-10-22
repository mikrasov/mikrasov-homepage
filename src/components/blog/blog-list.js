import React from "react"
import {Link,graphql } from "gatsby"
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from "../layout"
import Img from 'gatsby-image'
import BlogPreview from "./blogPreview"


export default class BlogList extends React.Component {



  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()



    return (
      <Layout>

        <div className="blog-posts">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {

              return (post.frontmatter.album !== null)? (

                <BlogPreview className="blog-album" post={post} />
              ) : (
                <BlogPreview className="blog-post" post={post} />

              )
            })}
        </div>

        <div className="row">
          <div className="col">
            {
              !isFirst &&
              <Link to={prevPage} rel="prev">← Newer</Link>
            }
          </div>
          <div className="col" style={{textAlign:"right"}}>
            {
              !isLast &&
              <Link to={nextPage} rel="next">Older →</Link>
            }
          </div>
        </div>



      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 240)
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
                fluid(maxWidth: 250, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    albumIcon: file(relativePath: { eq: "icons/album.png" }) {
      childImageSharp {
        fixed(width: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    postIcon: file(relativePath: { eq: "icons/news.png" }) {
      childImageSharp {
        fixed(width: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;


