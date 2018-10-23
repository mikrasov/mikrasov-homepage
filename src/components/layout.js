import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery } from 'gatsby'

import './bootstrap.min.css'
import './layout.css'
import './sidebar.css'
import './specialized.css'

import {Nav, Navbar} from 'react-bootstrap'

import Img from 'gatsby-image'
import twitterLogo from '../images/icons/twitter.png'
import linkedinLogo from '../images/icons/in.png'
import gitLogo from '../images/icons/git.png'


class Layout extends React.Component {
  render() {
    return (
      <>
        <Helmet
          title={"Mikrasov Design"}
          meta={[
            { name: 'description', content: 'The homepage of Michael Nekrasov. I am currently finishing a PhD in ' +
                'Computer Science at UC Santa Barbara. My research focuses on wireless aerial networks for environmental ' +
                'and disaster applications. In addition to my academic and professional work, I am a photographer, hiker, ' +
                'and adventurer. ' },
            { name: 'keywords', content: 'Michael Nekrasov, computer science, photography, wireless networks, ' +
                'sensor networks, aerial networks, UAV, UAS, drone, programing, web design, environment, disaster, ' +
                'travel, hiking' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Navbar  className="navbar-dark" expand="sm" fixed="top" style={{backgroundColor: "#134699"}}>
          <Navbar.Brand href="/">Michael Nekrasov</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto" >
              <Nav.Link href="/about" className={(this.props.active==="about")?"active":""}>About</Nav.Link>
              <Nav.Link href="/" className={(this.props.active==="news")?"active":""}>News</Nav.Link>
              <Nav.Link href="/skills" className={(this.props.active==="skills")?"active":""}>Skills</Nav.Link>
              <Nav.Link href="/cv" className={(this.props.active==="cv")?"active":""}>CV</Nav.Link>
              <Nav.Link href="/gallery" className={(this.props.active==="gallery")?"active":""}>Photography</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <div className={'container mt-5'}>
          <div className={'row no-gutters'}>
            <div id='content' className={'col-md-9'}>{this.props.children}</div>
            <div className='col-md-3 ' id={"sidebar"}>
              <div className="sidebarProfileBlock">
                {
                  (this.props.sideImage !== undefined) &&
                  <Img className="sidebarProfile" fluid={this.props.sideImage.childImageSharp.fluid}  />
                }

              </div>
              <div className="sideLinkBox">
                <a className="sidebarIconA" href="https://github.com/mikrasov" target="_blank" ><img src={twitterLogo} /></a><br/>
                <a className="sidebarIconB" href="https://twitter.com/mikrasov" target="_blank"><img src={linkedinLogo}  /></a>
                <a className="sidebarIconC" href="https://www.linkedin.com/in/mikrasov" target="_blank"><img src={gitLogo} /></a>
              </div>

              <h1  >Michael Nekrasov</h1>
              <h2 style={{textAlign : 'center'}}>Ph.D Candidate in C.S., Web Designer, Photographer, Traveler.</h2>

              <div className="sidebar-content">
                {this.props.sideContent}
              </div>
            </div>

          </div>
        </div>

      </>
    )
  }
}


export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
