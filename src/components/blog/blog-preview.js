import React from 'react'
import Img from 'gatsby-image'

import { Link as GatsbyLink } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

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


class BlogPreview extends React.Component {
  render() {
    const post = this.props.post
    const cls = post.fields.style
    console.log(post.fields.tags)
    if(post.excerpt) return (
        <Link post={post} >
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
              <div className="d-flex blog-marker-row">
              {post.fields.tags.map(tag=><div className={"blog-marker "+tag}>{tag}</div>)}
              </div>
            </div>
          </div>
        </Link>
      )

    else return (
      <Link post={post} >
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
