import React from 'react'

export default (props) => (
  <div className="row">
    <div className="col-md-3 col-lg-4 order-1 order-md-2 text-emphasis">{props.date}</div>
    <div className="col-md-9 col-lg-8 order-2 order-md-1">
      <h5 className="mb-0">{props.name}</h5>
      <p>{props.children} </p>
    </div>
  </div>
)
