import React from 'react'

export default (props) => (
  <div className="mb-2 ">
    <h1 className="">{props.name}</h1>
    <div className="ml-3 mb-4">
      {props.children}
    </div>
  </div>
)
