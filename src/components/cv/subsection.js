import React from 'react'




class Subsection extends React.Component {
  render() {

    return (
      <div className="">
        <h2 className="">{this.props.name}</h2>
        <div style={{paddingLeft: '1em'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default Subsection


