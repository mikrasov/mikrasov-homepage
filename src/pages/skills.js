import React from 'react'
import Layout from '../components/layout'
import Section from '../components/cv/section.js'
import Subsection from '../components/cv/subsection.js'
import '../components/specialized.css'
import { graphql, StaticQuery } from 'gatsby'
import "../components/cv/skill.css"



const sidebar = <div>
  <h3>Jump to:</h3>

</div>


const SkillsPage = ({ children }) => (
  <StaticQuery
    query={graphql`
    {
      profileImage: file(relativePath: { eq: "profile/profile-skill.png" }) {
        childImageSharp {
          fluid(maxWidth: 225) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}

    render={data => (
      <Layout sideImage={data.profileImage} sideContent={sidebar} active={"skills"}>



      </Layout>
    )}
  />
)

export default SkillsPage

