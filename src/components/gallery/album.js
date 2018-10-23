import React from 'react'
import Img from 'gatsby-image'
import './album.css'

class Album extends React.Component {
  render() {

    var album = this.props.album;
    return (
      <div className="gallery-album" >
        <a href={album.frontmatter.album} target="_blank">
          <Img className="gallery-image" fixed={album.frontmatter.featuredImage.childImageSharp.fixed}  />
          <p className="gallery-name">{album.frontmatter.title}</p>
          <p className="gallery-date">{album.fields.date}</p>
        </a>
      </div>
    )
  }
}

export default Album
