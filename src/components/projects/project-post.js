import React from "react"
import { Link, graphql, withPrefix, Link as GatsbyLink } from 'gatsby'
import Layout from '../layout'
import "../blog/blog.css"

import Metadata from "../metadata"
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'



export default function Template(props) {



  const profileImage = props.data.profileImage
  const project = props.data.project

  const related = props.data.related.edges

  const { fields, frontmatter, html, tableOfContents} = project

  const nextPage = props.pageContext.next
  const prevPage = props.pageContext.previous


  const Link = ({ children, post, ...other }) => {

    // Use Gatsby Link for internal links, and <a> for others
    if (post.fields.external) {
      return (
        <OutboundLink href={post.fields.external} {...other} target="_blank">
          {children}
        </OutboundLink>
      )
    }
    return (
      <GatsbyLink to={post.fields.slug} {...other}>
        {children}
      </GatsbyLink>
    )
  }


  const sidebar = (<div className="mb-9">
    <h3>Navigation</h3>

    <div
      className="blog-toc"
      dangerouslySetInnerHTML={{ __html: tableOfContents }}
    />
    <ul>

    </ul>
  </div>)



  return (
    <Layout  sideImage={profileImage} sideContent={sidebar} active={"projects"}>
      <Metadata
        pageTitle={frontmatter.title}
        pageUrl={fields.slug}
        pageKeywords={frontmatter.keywords}
        description={frontmatter.summary}
        featuredImage={frontmatter.featuredImage.childImageSharp.sizes.src}
      />
      <div className="blog-content">
        <p className="blog-date">{frontmatter.range}</p>
        <h1>{frontmatter.title}</h1>

        {fields.external && (<div className="img-left">
          <Img className="gallery-image" sizes={frontmatter.featuredImage.childImageSharp.sizes}/>
        </div>)}
        <div
          className="blog-text"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <h2 className="related-posts">Related Posts</h2>
        <ul>
        {related.map( ({node:post}) => (
          <li><Link post={post}>{post.frontmatter.title}</Link></li>
        ))}
        </ul>
      </div>
    </Layout>

  )
}

export const pageQuery = graphql`
  query($path: String!, $proj: String!) {
     profileImage: file(relativePath: { eq: "profile/profile-projects.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 225) {
            ...GatsbyImageSharpFluid
          }
        }
    }
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    project: markdownRemark(fields: { slug: { eq: $path } }) {
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
        id
        range
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
    related:allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: {fields:{draft:{eq:false}}, frontmatter:{project: {eq:  $proj }}}
    ) {
      edges {
        node {
          id
          fields {            
            external
            tags
            slug
            date(formatString: "MMM DD, YYYY")
          }
          frontmatter {
            title
            category
            paper
            citation
          }
        }
      }
    }
  }
`
