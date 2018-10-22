import React from 'react'
import Img from 'gatsby-image'

import { Link as GatsbyLink } from "gatsby"

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
    <a href={to} {...other} target="_blank">
      {children}
    </a>
  )
}

class BlogPreview extends React.Component {
  render() {
    const post = this.props.post;


    var cls, link;
    if(post.frontmatter.album !== null){
      cls = "blog-album";
      link = post.frontmatter.album;
    }
    else{
      cls = "blog-post";
      link = "./"+post.fields.slug;
    }



    return (
      <div className={cls+" row blog-preview"} key={post.id}>
        <div className="blog-featured-image col-4 ">
          <Link to={link}>
            <Img  fluid={post.frontmatter.featuredImage.childImageSharp.fluid}  />
          </Link>
        </div>
        <div className="blog-content col-8">
          <div className="date">{post.fields.date}</div>
          <h1>
            <Link to={link}>{post.frontmatter.title}</Link>
          </h1>
          <p>{post.excerpt}</p>
        </div>
      </div>
    )
  }
}

export default BlogPreview
