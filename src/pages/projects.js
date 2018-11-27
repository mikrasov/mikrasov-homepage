import React from 'react'
import { graphql, StaticQuery, withPrefix } from 'gatsby'
import WorldMap from "../components/map/world-map"
import UsaMap from "../components/map/usa-map"
import Layout from '../components/layout'


const sidebar = <div/>

const MapPage = ({ children }) => (
  <StaticQuery
    query={graphql`
    {
      profileImage: file(relativePath: { eq: "profile/profile-skill.png" }) {
        childImageSharp {
          fluid(maxWidth: 225) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `}


  render={data => (
    <Layout sideImage={data.profileImage} sideContent={sidebar} active={"projects"}>

    </Layout>
  )}
/>
)

export default MapPage
