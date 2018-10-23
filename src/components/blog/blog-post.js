import React from "react"
import { graphql } from "gatsby"
import Layout from '../layout'
import "./blog.css"
import SocialCard from "../socialCard"
import Helmet from 'react-helmet'

export default function Template({ data, }) {

  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { fields, frontmatter, html } = markdownRemark

  const sidebar = ""
  return (

    <Layout className="blog-post" sideContent={sidebar} sideImage={data.profileImage} active={"news"}>
      <SocialCard title={frontmatter.title} url={fields.slug} description={markdownRemark.excerpt} featuredImage={frontmatter.featuredImage.childImageSharp.sizes.src} />

      <p className="blog-date">{fields.date}</p>
      <h1>{frontmatter.title}</h1>

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>

  )
}




export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      excerpt(pruneLength: 215)
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
    profileImage: file(relativePath: { eq: "profile/profile-news.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 225) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


