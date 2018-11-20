import React from 'react'

export default (props) => (
  <div className="">
    <h3 className="" style={{margin:0}}>{props.name}</h3>
    <p className="text-emphasis">{props.subtitle}</p>
    <div  className="ml-3">
      {props.children}
    </div>
  </div>
)


