import React from 'react'
import Img from 'gatsby-image'

export default (props) => (
  <div className="row">
    <div className="col-md-3 col-lg-4 order-1 order-md-2 text-emphasis">
      {props.date}
      {props.attachment?(<div className="d-none d-md-block section-attachment ">{props.attachment}</div>):''}
    </div>
    <div className="col-md-9 col-lg-8 order-2 order-md-1 mb-3">
      <h5 className="mb-1">{props.name}</h5>
      <p className="mb-1">{props.children} </p>
      {props.attachment?(<div className="d-block d-md-none section-attachment ">{props.attachment}</div>):''}
    </div>
  </div>
)
