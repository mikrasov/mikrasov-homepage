import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'

export default function Template({ data, }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark


  return (
    <Layout className="blog-post-container">
      <div className="blog-post">
        <p className="date">{frontmatter.date}</p>
        <h1>{frontmatter.title}</h1>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        
      }
    }
  }
`
