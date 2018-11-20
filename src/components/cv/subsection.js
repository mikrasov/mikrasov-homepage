import React from 'react'

export default (props) => (
  <div className="mb-4">
    <h2 className="mb-3 text-gray">{props.name}</h2>
    <div className="ml-3">
      {props.children}
    </div>
  </div>
)