import React from 'react'




class Subsection extends React.Component {
  render() {

    return (
      <div className="mb-4">
        <h2 className="mb-3 text-gray">{this.props.name}</h2>
        <div  className="ml-3">
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default Subsection


