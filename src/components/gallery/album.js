import React from 'react'
import {Link } from "gatsby"

import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Img from 'gatsby-image'
import './album.css'
import PostIcon from '../blog/news.svg'


export default function(props) {
  const album = props.album;
  let icon = "";

  if (album.fields.tags[0] === "post" || album.fields.tags[0] === "paper") {
    icon = (<Link to={album.fields.slug} className={"icon"}><PostIcon height="15px" width="15px"/></Link>)
  }

    return (
      <div className="gallery-album">
        <div>
          <OutboundLink href={album.frontmatter.album} target="_blank">
            <Img className="gallery-image" fixed={album.frontmatter.featuredImage.childImageSharp.fixed}/>
          </OutboundLink>
          <p className="gallery-name">
            <OutboundLink href={album.frontmatter.album} target="_blank">{album.frontmatter.title}</OutboundLink>{icon}
          </p>
          <p className="gallery-date">{album.fields.date} </p>

        </div>
      </div>
    )

}
