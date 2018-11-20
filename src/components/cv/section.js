import React from 'react'

export default (props) => (
  <div className="mb-4">
    <h1 className="">{props.name}</h1>
    <div className="ml-3">
      {props.children}
    </div>
  </div>
)