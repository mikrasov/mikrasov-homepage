import React from 'react'
import { StaticQuery, graphql } from 'gatsby'


import Img from 'gatsby-image'


const ProfileImage = ({ children }) => (
  <StaticQuery
    query={graphql`
      query profileImageQuery {
         imageOne: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}



    render={data => (
      <div>
        <Img fluid={data.imageOne.childImageSharp.fluid} />
      </div>
    )}
  />
)


export default ProfileImage
