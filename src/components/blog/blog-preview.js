import React from 'react'
import Img from 'gatsby-image'

import { Link as GatsbyLink } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Link = ({ children, to, ...other }) => {

  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <OutboundLink href={to} {...other} target="_blank">
      {children}
    </OutboundLink>
  )
}

class BlogPreview extends React.Component {
  render() {
    const post = this.props.post
    const link = post.fields.slug
    const cls = post.fields.style

    if(post.excerpt !== undefined) return (
        <Link to={link} >
          <div className={cls + " row blog-preview"}>

            <div className="blog-featured-image col-3 col-md-3 ">
              <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid}/>
            </div>

            <div className="col-9 col-md-9">
              <div className="d-flex">
                <div className="blog-title mr-auto">{post.frontmatter.title}</div>

                <div className="blog-date">{post.fields.date}</div>
              </div>
              <div className="blog-content">{post.excerpt}</div>
            </div>

          </div>
        </Link>
      )

    else return (
      <Link to={link} >
        <div className={cls + " row blog-preview"} >


            <div className="d-flex">
              <div className="blog-title mr-auto">{post.frontmatter.title}</div>

              <div className="blog-date">{post.fields.date}</div>
            </div>

        </div>
      </Link>

    )
  }
}

export default BlogPreview