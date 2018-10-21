import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import "./blog.css"

export default function Template({ data, }) {
  console.log(data)
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { fields,frontmatter, html } = markdownRemark

  return (
    <Layout className="blog-post-container">
      <div className="blog-post">
        <p className="date">{fields.date}</p>
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
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      fields {
        slug
        date(formatString: "MMMM DD, YYYY")
      }     
      frontmatter {
        
        title
        featuredImage {
            childImageSharp{
                sizes(maxWidth: 630) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
      }
    }
  }
`



