import React from 'react'
import './album.css'

import { graphql } from 'gatsby'
import Album from './album'


class GallerySidebar extends React.Component {
  render() {

    var years=[]
    return (
      <div >

        <h3>Jump to Year:</h3>
        <ul>
        {this.props.data.edges
          .map(({ node: album }) => {
            var subtitle = ""
            var year = album.fields.year;
            if(!years.includes(year)){
              years.push(year)
              return(
                <li>
                  <a href={"#"+year}>{year}</a>
                </li>
              )
            }

          })}
        </ul>


      </div>
    )
  }
}

export default GallerySidebar





