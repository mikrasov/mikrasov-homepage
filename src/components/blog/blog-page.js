import React from "react"
import {Link, graphql } from "gatsby"
import Layout from "../layout"
import BlogPreview from "./blog-preview"
import "./blog.css"

export default class BlogPage extends React.Component {

  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    const firstPage = "/"
    const lastPage = numPages.toString()

    const fromLabel = isFirst? "Newest":posts[0].node.fields.date
    const toLabel = isLast?"End":posts[posts.length - 1].node.fields.date


    const sidebar = (<div className="mb-9">
      <h3>Navigation</h3>
      <ul>
        { isFirst? (<li>At Newest</li>):  (<li><Link to={firstPage} rel="first"> Newest</Link></li>) }
        { isFirst? (<li>No Newer</li>):   (<li><Link to={prevPage} rel="prev">Newer</Link></li>) }
        { isLast?  (<li>At Oldest</li>):  (<li><Link to={nextPage} rel="next">Older</Link></li>) }
        { isLast?  (<li>None Older</li>): (<li><Link to={lastPage} rel="last">Oldest</Link></li>) }
      </ul>
    </div>)

    return (
      <Layout sideContent={sidebar} active={"news"}>

        <div className="row mb-3 align-items-end">
          <div className="col"> <h1 className="m-0"> News </h1> </div>
          <div className="col date-range" >
            { !isFirst && <Link to={prevPage} rel="prev">← </Link> }
            {fromLabel} - {toLabel}
            { !isLast && <Link to={nextPage} rel="next"> →</Link> }
            </div>
        </div>
        <div className="blog-posts">
          {posts.map( ({node}) => <BlogPreview post={node}  key={node.id} /> ) }
        </div>

        <div className="row">
          <div className="col">
            { !isFirst && <Link to={prevPage} rel="prev">← Newer</Link> }
          </div>
          <div className="col" style={{textAlign:"right"}}>
            { !isLast &&  <Link to={nextPage} rel="next">Older →</Link> }
          </div>
        </div>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: {fields:{draft:{eq:false},  tags: {ne: "project"}}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 215)
          id
          fields {
            external
            draft
            tags
            slug
            date(formatString: "MMM DD, YYYY")
          }
          frontmatter {
            title
            album
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
