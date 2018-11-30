import React from 'react'
import { graphql, StaticQuery } from 'gatsby'


export default class Layout extends React.Component {

  render(){

    return(
      <>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </>
    )

  }
}



export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`
