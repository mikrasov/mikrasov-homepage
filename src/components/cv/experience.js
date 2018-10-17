import React from 'react'
import Subsubsection from './subsubsection'

class Experience extends React.Component {
  render() {

    return (
      <div className="row">
        <div className="col-md-3 col-lg-4 order-1 order-md-2 text-emphasis">{this.props.date}</div>
        <div className="col-md-9 col-lg-8 order-2 order-md-1">
          <h5 className="mb-0">{this.props.name}</h5>
          <p>{this.props.children} </p>
        </div>
      </div>
    )
  }
}

export default Experience
