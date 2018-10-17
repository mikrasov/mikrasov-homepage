import React from 'react'

class Section extends React.Component {
  render() {

    return (
      <div className="mb-4">

        <h1 className="">{this.props.name}</h1>
        <div className="ml-3">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Section
