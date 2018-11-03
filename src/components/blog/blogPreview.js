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


    var preMarker = "";
    var cls, link, marker;

    if(post.frontmatter.album != null && post.fields.type !== "album"){
      preMarker = (<div  className={"marker-album"}>Album</div> );
    }


    if(post.fields.type === "album"){
      cls = "blog-album";
      link = post.frontmatter.album;
      marker = (<div className={"marker-album"}>Album</div>);
    }
    else if(post.fields.type === "post"){
      cls = "blog-post";
      link = post.fields.slug;
      marker = (<div className={"marker-post"}>Post</div>);
    }
    else{
      cls = "blog-tutorial";
      link = post.fields.slug;
      marker = (<div className={"marker-tutorial"}>Tutorial</div>);
    }



    return (<Link to={link}>
      <div className={cls+" row blog-preview"} key={post.id}>

        <div className="blog-featured-image col-3 col-md-3 ">
          <Img  fluid={post.frontmatter.featuredImage.childImageSharp.fluid}  />
        </div>

        <div className="col-9 col-md-9">
          <div className="d-flex">
            <div className="blog-title mr-auto">{post.frontmatter.title}</div>
            {preMarker}
            {marker}
            <div className="blog-date">{post.fields.date}</div>
          </div>
          <div className="blog-content">{post.excerpt}</div>
        </div>

      </div></Link>
    )
  }
}

export default BlogPreview
