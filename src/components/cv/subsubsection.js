import React from 'react'

class Subsubsection extends React.Component {
  render() {

    return (
      <div className="">
        <h3 className="" style={{margin:0}}>{this.props.name}</h3>
        <p className="text-emphasis">{this.props.subtitle}</p>
        <div  className="ml-3">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Subsubsection


