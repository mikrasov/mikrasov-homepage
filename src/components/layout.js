import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import {Nav, Navbar} from 'react-bootstrap'
import Img from 'gatsby-image'
import Metadata from './metadata'

import './bootstrap.min.css'
import './layout.css'
import './sidebar.css'
import './specialized.css'

import twitterLogo from '../images/icons/twitter.png'
import linkedinLogo from '../images/icons/in.png'
import gitLogo from '../images/icons/git.png'


export default (props) => (
  <StaticQuery
    query={graphql` {
      sideImage: file(relativePath: { eq: "profile/profile-news.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 225) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `}

    render={data => ( <>
      <Metadata />

      <Navbar  className="navbar-dark" expand="sm" style={{backgroundColor: "#134699"}}>
        <Navbar.Brand href="/">Michael Nekrasov</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto" >
            <Nav.Link href="/about" className={(props.active==="about")?"active":""}>About</Nav.Link>
            <Nav.Link href="/cv" className={(props.active==="cv")?"active":""}>CV</Nav.Link>
            <Nav.Link href="/" className={(props.active==="news")?"active":""}>News</Nav.Link>
            <Nav.Link href="/travel" className={(props.active==="travel")?"active":""}>Travel</Nav.Link>
            <Nav.Link href="/gallery" className={(props.active==="gallery")?"active":""}>Photography</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    {(props.noSidebar === true) ? (<div className={'container'}><div id='content'>{props.children}</div></div>) : (
      <div className={'container'}>
        <div className={'row no-gutters'}>
          <div id='content' className={'col-md-9'}>{props.children}</div>
          <div className='col-md-3 ' id={"sidebar"}>
            <div className="sidebarProfileBlock">
              <Img className="sidebarProfile"
                   fluid={props.sideImage? props.sideImage.childImageSharp.fluid : data.sideImage.childImageSharp.fluid}/>
            </div>
            <div className="sideLinkBox">
              <a className="sidebarIconA" href="https://github.com/mikrasov" target="_blank"><img src={twitterLogo}/></a><br/>
              <a className="sidebarIconB" href="https://twitter.com/mikrasov" target="_blank"><img src={linkedinLogo}/></a>
              <a className="sidebarIconC" href="https://www.linkedin.com/in/mikrasov" target="_blank"><img src={gitLogo}/></a>
            </div>
            <h1>Michael Nekrasov</h1>
            <h2 style={{ textAlign: 'center' }}>Ph.D Candidate in C.S., Web Designer, Photographer, Traveler.</h2>
            <div className="sidebar-content">{props.sideContent}</div>
          </div>
        </div>
      </div>
      )
    }

      <div id="footer" className="row">
        <div className="col-md-4"> Copyright © 2018 - Michael Nekrasov</div>
        <div className="col-md-8" style={{color:"#DDDDDD"}}>
          If you wish to use any content including photos featured on this website please contact me.
        </div>
      </div>
      </>
      )}
  />
)
