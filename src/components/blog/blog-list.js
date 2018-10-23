import React from "react"
import {Link, graphql } from "gatsby"
import Layout from "../layout"
import BlogPreview from "./blogPreview"


export default class BlogList extends React.Component {

  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()


    const sidebar = (<p className="mb-9">
      Welcome! Thank's for taking interest in me. I am currently finishing a PhD in Computer Science at UC Santa
      Barbara. My research focuses on wireless aerial networks for environmental and disaster applications. In addition
      to my academic and professional work, I am a photographer, hiker, and adventurer. While you are here I would be
      honored if you checked out some of my work.
    </p>)

    return (
      <Layout sideContent={sidebar} sideImage={this.props.data.profileImage} active={"news"}>

        <h1> Recent News </h1>
        <div className="blog-posts">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return(
                <BlogPreview post={post} />
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
          excerpt(pruneLength: 215)
          id
          fields {
            slug
             date(formatString: "MMM DD, YYYY")
          }
          frontmatter {
            title
            album
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
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
    profileImage: file(relativePath: { eq: "profile/profile-news.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 225) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;


