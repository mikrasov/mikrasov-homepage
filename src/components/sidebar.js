import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import twitterLogo from "../images/icons/twitter.png"
import linkedinLogo from "../images/icons/in.png"
import gitLogo from "../images/icons/git.png"

const SideBar = (props) => (

  <StaticQuery
    query={graphql`
      query iconImageQuery {
       profileImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}



    render={data => (


        <div id={"sidebar"}>
          <Img className={"rounded mx-auto d-block"} fluid={data.profileImage.childImageSharp.fluid}  style={{maxHeight:"250px",maxWidth:"250px"}} />

          <h3 style={{textAlign : 'center'}}>Michael Nekrasov</h3>
          <h4 style={{textAlign : 'center'}}>Ph.D Student in C.S., Web Designer, Photographer, Traveler.</h4>


          <p className="mb-9">
            Welcome! Thank's for taking interest in me. I am currently finishing a PhD in Computer Science at UC Santa
            Barbara. My research focuses on wireless aerial networks for environmental and disaster applications. In addition
            to my academic and professional work, I am a photographer, hiker, and adventurer. While you are here I would be
            honored if you checked out some of my work.
          </p>

          <div className="text-right">
          <a href="https://github.com/mikrasov" target="_blank" className="mr-2"><img src={twitterLogo} style={{width:"25px"}}/></a>
          <a href="https://twitter.com/mikrasov" target="_blank" className="mr-2"><img src={linkedinLogo}  style={{width:"25px"}}/></a>
          <a href="https://www.linkedin.com/in/mikrasov" target="_blank" className="mr-2"><img src={gitLogo}  style={{width:"25px"}}/></a>
          </div>
        </div>


    )}
  />
)


export default SideBar
