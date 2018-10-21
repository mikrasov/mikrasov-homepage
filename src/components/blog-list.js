import React from "react"
import {Link,graphql } from "gatsby"
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from "../components/layout"
import Img from 'gatsby-image'

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
                <div className="row blog-preview blog-album" key={post.id}>
                  <div className="blog-featured-image col-4 ">
                    <a href={post.frontmatter.album} target="_blank">
                      <Img  fluid={post.frontmatter.featuredImage.childImageSharp.fluid}  />
                    </a>
                  </div>
                  <div className="blog-content col-8">
                    <p className="date">{post.fields.date}</p>
                    <h1>
                      <a href={post.frontmatter.album} target="_blank">{post.frontmatter.title}</a>

                    </h1>

                    <p>{post.excerpt} </p>
                  </div>
                </div>

              ) : (
                <div className="row blog-preview blog-post" key={post.id}>
                  <div className="blog-featured-image col-4 ">
                    <Link to={post.fields.slug}>
                      <Img  fluid={post.frontmatter.featuredImage.childImageSharp.fluid}  />
                    </Link>
                  </div>

                  <div className="blog-content col-8">
                    <div className="date">{post.fields.date}</div>
                    <h1>
                      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                    </h1>
                    <p>{post.excerpt} </p>
                  </div>
                </div>
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
                fluid(maxWidth: 250) {
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


