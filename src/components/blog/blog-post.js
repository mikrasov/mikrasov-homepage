import React from "react"
import {Link, graphql } from "gatsby"
import Layout from '../layout'
import "./blog.css"
import SocialCard from "../socialCard"
import AlbumIcon from './album.svg'

export default function Template({ data, }) {

  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { fields, frontmatter, html } = markdownRemark

  const sidebar = ""

  var albumReminder = "";
  var albumReminderIcon = "";

  console.log(AlbumIcon)
  if(frontmatter.album != null){
    albumReminderIcon = (
      <a href={frontmatter.album} target="_blank" className="album-reminder-icon">
        <AlbumIcon />
      </a>
    )
    albumReminder = (
      <a href={frontmatter.album} target="_blank">
        <div className="album-reminder">
          <AlbumIcon /> Check out the full album of images for this post!
        </div>
      </a>
    )
  }

  return (

    <Layout sideContent={sidebar} sideImage={data.profileImage} active={"news"}>
      <SocialCard title={frontmatter.title} url={fields.slug} description={markdownRemark.excerpt} featuredImage={frontmatter.featuredImage.childImageSharp.sizes.src} />


      <p className="blog-date">{fields.date}</p>
      <h1>{frontmatter.title}{albumReminderIcon}</h1>



      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {albumReminder}
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
        album
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
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
