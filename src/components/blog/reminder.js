import React from 'react'
import {Link} from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import AlbumIcon from './album.svg'
import "./blog.css"

export default function(props) {

  const post = props.post.frontmatter

  console.log(post)

  if(post.album) {
    if (props.icon) return (
      <OutboundLink href={post.album} target="_blank" className="blog-reminder-icon album">
        <AlbumIcon/>
      </OutboundLink>
    )

    else return (

      <OutboundLink href={post.album} target="_blank">
        <div className="blog-reminder album">
          <AlbumIcon/> Check out the full album of images for this post!
        </div>
      </OutboundLink>
    )
  }

  console.log(post.paper)
  if(post.paper) {
    if (props.icon) return (
      <Link to={"/papers/"+post.paper} target="_blank" className="blog-reminder-icon paper">
        <AlbumIcon/>
      </Link>
    )

    else return (

      <Link to={"/papers/"+post.paper} target="_blank">
        <div className="blog-reminder paper">
          <AlbumIcon/> Read the full paper.
        </div>
      </Link>
    )
  }

  return <></>
}