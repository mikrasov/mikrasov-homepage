import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  try {
    return require(`${path}`);
  } catch (err) {
    return null;
  }

  return (
    <Layout className="blog-post-container">
      <div className="blog-post">
        <p class="date">{frontmatter.date}</p>
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
