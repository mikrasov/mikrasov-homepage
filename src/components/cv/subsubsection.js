import React from 'react'

class Subsubsection extends React.Component {
  render() {

    return (
      <div className="">
        <h3 className="" style={{margin:0}}>{this.props.name}</h3>
        <p className="text-primary">{this.props.subtitle}</p>
        <div style={{paddingLeft: '1em'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Subsubsection


