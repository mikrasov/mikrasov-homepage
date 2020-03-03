import React from 'react'
import Img from 'gatsby-image'

export default (props) => (
  <div className="">

    <div className="">
      {props.logo?(<div className="float-left mr-1 d-none d-md-block" style={{width:35}}><Img fluid={props.logo}/></div>):''}
      <div className="">
        <h3  className="mb-0 " style={{margin:0}}>{props.name}</h3>
        <p className="text-emphasis mb-1 mt-0">{props.subtitle}</p>
      </div>
    </div>
    <div  className="ml-3 mt-0 mb-0">
      {props.children}
    </div>
  </div>
)


