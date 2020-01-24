import React from 'react'
import Img from 'gatsby-image'

import { Link as GatsbyLink } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import "../blog/blog.css"
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


class ProjectPreview extends React.Component {
  render() {
    const project = this.props.project
      return (
        <Link post={project} >
          <div className="project row blog-preview">

            <div className="blog-featured-image col-3 col-md-3 ">
              <Img fluid={project.frontmatter.featuredImage.childImageSharp.fluid}/>
            </div>

          <div className="col-9 col-md-9">
            <div className="d-flex">
              <div className="blog-title mr-auto">{project.frontmatter.title}</div>

              <div className="blog-date">{project.frontmatter.range}</div>
            </div>

            <div className="blog-content">{project.frontmatter.summary}</div>

          </div>
         </div>
        </Link>
      )
  }
}

export default ProjectPreview
