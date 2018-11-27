import React from 'react'
import './album.css'

import Album from './album'

var years=[]

export default (props) => (
  <div>
    {props.data.edges
      .map(({ node: album }) => {
        let subtitle = ""
        let year = album.fields.year;
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