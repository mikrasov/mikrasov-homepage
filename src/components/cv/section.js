import React from 'react'

class Section extends React.Component {
  render() {

    return (
      <div className="resume-section d-flex flex-column">

        <h1 className="">{this.props.name}</h1>
        <div style={{paddingLeft: '1em'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Section
