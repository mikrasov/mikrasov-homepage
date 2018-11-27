import React from 'react'
import './album.css'

let years=[]

export default (props) => (
  <div >
    <h3>Jump to Year:</h3>
    <ul>
    {props.data.edges
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