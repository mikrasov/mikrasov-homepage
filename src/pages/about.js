import React from 'react'
import Layout from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const sidebar =<div>


  <h3>Contact Me </h3>
    <a href={"mailto:mikrasov@gmail.com"}>mikrasov@gmail.com</a><br/><br/>

  <h3>Current Occupation:</h3>
  <p>
  Ph.D Student at UC Santa Barbara
  </p>

  <h3>Next Step:</h3>
  <p>
  Looking for a career position starting in <strong>August 2019</strong>.
  </p>




</div>;

const AboutPage = ({ children }) => (
  <StaticQuery
    query={graphql`
    {
      profileImage: file(relativePath: { eq: "paww35rofile/profile-about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 225) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
       droneImage: file(relativePath: { eq: "drone-flight.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      sunflowerImage: file(relativePath: { eq: "sunflowers.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      zambiaImage: file(relativePath: { eq: "zambia.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }

    }
  `}

    render={data => (

      <Layout sideImage={data.profileImage} sideContent={sidebar} active={"about"}>
        <h1>About</h1>

        <Img className="boundedPic float-left" fixed={data.droneImage.childImageSharp.fixed} />

        <p>
          I am currently finishing a PhD in Computer Science at UC Santa Barbara.
          My research focuses on wireless aerial networks for environmental and disaster applications.
          My dissertation looks at using 802.11 (WiFi) to locate and communicate with survivors after a natural disaster from a aerial platform.
          As part of my work I develop new algorithms for low energy computation suitable for deployment on a multi-copter that has limited
          power and weight, and which may not be able to offload computationally expensive work in a disaster due to lack of a functional internet backhaul.
          I build prototype systems and evaluate their performance through physical field experimentation, and analysis of large
          network traces.
        </p>

        <Img className="boundedPic" fluid={data.zambiaImage.childImageSharp.fluid} style={{textAlign:"center"}} />

        <p>
          My work focuses on cutting edge research in Computer Science that is applied to social issues facing us today.
          Topics of interest include disaster response and recovery, understanding climate change and habitat disruption,
          freedom of speech, and ethical use of technology.
        </p>
        <Img className="boundedPic float-right" fixed={data.sunflowerImage.childImageSharp.fixed} />

        <p>
          My skills include application and systems engineering, strong understanding of wireless networks, as well as
          a long history of web development. I excel in interdisciplinary work and most of my past projects have
          partner with marine biologists, environmental scientists as well as social science.
        </p>
        <p>
          In addition to my academic and professional work, I am a photographer, hiker, and adventurer.
          My partner Sherri Conklin (a soon to be Ph.D in Philosophy) and I try to explore as much as we can
          frequently going on journeys both local and international. My photos have been featured in exhibitions,
          news papers, and many academic publications.
        </p>

      </Layout>

      )}
  />
)

export default AboutPage

