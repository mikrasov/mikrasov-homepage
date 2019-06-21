import React from "react"
import {Link, graphql, withPrefix} from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { DiscussionEmbed } from "disqus-react";
import Layout from '../layout'
import "./blog.css"

import Metadata from "../metadata"
import Img from 'gatsby-image'
import Reminder from './reminder'

export default function Template(props) {

  const disqusShortname = props.data.site.siteMetadata.disqusShortname

  const post = props.data.markdownRemark
  const { fields, frontmatter, html, tableOfContents} = post

  const nextPage = props.pageContext.next
  const prevPage = props.pageContext.previous
  const album = frontmatter.album
  const paper = frontmatter.paper

  const sidebar = (<div className="mb-9">
    <h3>Navigation</h3>

    <div
      className="blog-toc"
      dangerouslySetInnerHTML={{ __html: tableOfContents }}
    />
    <ul>
      { nextPage &&  (<li>Newer: <Link to={nextPage.fields.slug} rel="first"> {nextPage.frontmatter.title}</Link></li>) }
      { prevPage && (<li>Older: <Link to={prevPage.fields.slug} rel="prev">{prevPage.frontmatter.title}</Link></li>) }
      { album && (<li><OutboundLink href={album} target="_blank">Go to Album</OutboundLink></li>) }
      { paper && (<li><a href={withPrefix("papers/"+paper)} target="_blank">Go to Paper</a></li>) }
    </ul>
  </div>)


  const disqusConfig = {
    identifier: post.fields.slug.replace(/\//g,""),
    title: post.frontmatter.title,
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
      <div className="blog-content">
        <p className="blog-date">{fields.date}</p>

        <h1 className="row">
          <div className="col-10">{frontmatter.title}<Reminder icon post={post} /></div>
          <div className="col-1">{ prevPage && (<Link to={prevPage.fields.slug} rel="prev">←</Link>) }</div>
          <div className="col-1">{ nextPage && (<Link to={nextPage.fields.slug} rel="next">→</Link>) }</div>
        </h1>

        {fields.external && (<div className="img-left">
          <Img className="gallery-image" sizes={frontmatter.featuredImage.childImageSharp.sizes}/>
        </div>)}
        <div
          className="blog-text"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div style={{clear:"both"}} />
        <Reminder post={post} />

        { !fields.external && (<DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />)}
      </div>
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
      tableOfContents
      fields {
        slug
        external
        date(formatString: "MMMM DD, YYYY")
      }     
      frontmatter {
        title
        album
        paper
        citation
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
