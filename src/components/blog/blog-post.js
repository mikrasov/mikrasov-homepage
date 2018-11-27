import React from "react"
import {Link, graphql } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { DiscussionEmbed } from "disqus-react";
import Layout from '../layout'
import "./blog.css"
import AlbumIcon from './album.svg'
import Metadata from "../metadata"

export default function Template(props) {

  const disqusShortname = props.data.site.siteMetadata.disqusShortname

  const post = props.data.markdownRemark
  const { fields, frontmatter, html } = post

  const nextPage = props.pageContext.next
  const prevPage = props.pageContext.previous

  const sidebar = (<div className="mb-9">
  </div>)


  let albumReminder = ""
  let albumReminderIcon = ""

  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title,
  };

  if(frontmatter.album != null){
    albumReminderIcon = (
      <OutboundLink href={frontmatter.album} target="_blank" className="album-reminder-icon">
        <AlbumIcon />
      </OutboundLink>
    )
    albumReminder = (
      <OutboundLink href={frontmatter.album} target="_blank">
        <div className="album-reminder">
          <AlbumIcon /> Check out the full album of images for this post!
        </div>
      </OutboundLink>
    )
  }

  return (
    <Layout sideContent={sidebar} active={"news"}>
      <Metadata
        pageTitle={frontmatter.title}
        pageUrl={fields.slug}
        pageKeywords={frontmatter.keywords}
        description={post.excerpt}
        featuredImage={frontmatter.featuredImage.childImageSharp.sizes.src}
      />
      <p className="blog-date">{fields.date}</p>

      <h1 className="row">
        <div className="col-10">{frontmatter.title}{albumReminderIcon}</div>
        <div className="col-1">{ prevPage && (<Link to={prevPage.fields.slug} rel="prev">←</Link>) }</div>
          <div className="col-1">{ nextPage && (<Link to={nextPage.fields.slug} rel="next">→</Link>) }</div>

      </h1>


      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {albumReminder}

      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </Layout>

  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
        disqusShortname
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $path } }) {
      id
      html
      excerpt(pruneLength: 215)
      fields {
        slug
        date(formatString: "MMMM DD, YYYY")
      }     
      frontmatter {
        title
        album
        nextPage
        prevPage
        keywords
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
