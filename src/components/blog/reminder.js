import React from 'react'
import {withPrefix} from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import AlbumIcon from './album.svg'
import PdfIcon from '../../images/icons/pdf.svg'
import "./blog.css"

export default function(props) {

  const post = props.post.frontmatter

  let reminders =[]

  if(post.paper) {
    if (props.icon) reminders.push(
      <a href={withPrefix("papers/"+post.paper)} target="_blank" className="blog-reminder-icon paper">
        <PdfIcon />
      </a>
    )

    else reminders.push(

      <a href={withPrefix("papers/"+post.paper)} target="_blank">
        <div className="blog-reminder paper">
          <PdfIcon/> Read the full paper.
        </div>
      </a>
    )
  }

  if(post.album) {
    if (props.icon) reminders.push(
      <OutboundLink href={post.album} target="_blank" className="blog-reminder-icon album">
        <AlbumIcon/>
      </OutboundLink>
    )

    else reminders.push(

      <OutboundLink href={post.album} target="_blank">
        <div className="blog-reminder album">
          <AlbumIcon/> Check out the full album of images for this post!
        </div>
      </OutboundLink>
    )
  }


  return reminders
}
