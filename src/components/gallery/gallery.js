import React from 'react'
import './album.css'

import { graphql } from 'gatsby'
import Album from './album'


class Gallery extends React.Component {
  render() {

    var years=[]
    return (
      <div>
        {this.props.data.edges
          .map(({ node: album }) => {
            var subtitle = ""
            var year = album.fields.year;
            if(!years.includes(year)){
              years.push(year)
              subtitle = <h2 id={year}>{year}</h2>
            }
            return (
              <>
                {subtitle}
                <Album id={year} album={album} />
              </>
            )
          })}
      </div>
    )
  }
}

export default Gallery





