import React from 'react'
import {withPrefix} from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import AlbumIcon from './album.svg'
import PdfIcon from '../../images/icons/pdf.svg'
import "./blog.css"

export default function(props) {

  const post = props.post.frontmatter

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

  if(post.paper) {
    if (props.icon) return (
      <a href={withPrefix("papers/"+post.paper)} target="_blank" className="blog-reminder-icon paper">
        <PdfIcon />
      </a>
    )

    else return (

      <a href={withPrefix("papers/"+post.paper)} target="_blank">
        <div className="blog-reminder paper">
          <PdfIcon/> Read the full paper.
        </div>
      </a>
    )
  }

  return <></>
}
