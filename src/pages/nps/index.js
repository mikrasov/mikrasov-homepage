import React from 'react'
import Layout from '../../components/layout'
import { graphql, StaticQuery } from 'gatsby'
import NpsMap from '../../components/nps/nps-map'

import {StackedArea} from 'britecharts-react'

const NpsIndexPage = ({ children }) => (
  <StaticQuery
    query={graphql`
    {
      profileImage: file(relativePath: { eq: "profile/profile-travel.png" }) {
        childImageSharp {
          fluid(maxWidth: 225) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}

    render={data => (

      <Layout  noSidebar={true}>
        <h1>National Parks Project</h1>


        <p>
        The United States national park system contains some of the most iconic places in the world. Millions of people (from the USA and other nations) visit them every year. When looking at raw growth rates, national parks and monuments appear to be doing well with an all time high visitation rate, and a steady growth since the funding of the national park system.

        </p>

        <NpsMap width={"100px"} height={"600px"} />



        <StackedArea
          data={stackedAreaData.with2Sources()}
          width={600}
          height={400}
        />
      </Layout>

      )}
  />
)

export default NpsIndexPage

