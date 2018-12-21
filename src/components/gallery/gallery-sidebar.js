import React from 'react'
import './album.css'

export default function(props)  {
  let years=[]
  return(
    <div >
      <h3>Jump to Year:</h3>
      <ul>
      {
        props.data.edges
        .map(({ node: album }) => {
          let subtitle = ""
          let year = album.fields.year;
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
