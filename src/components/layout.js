import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery } from 'gatsby'

import './bootstrap.min.css'
import './layout.css'
import './specialized.css'

import {Nav, Navbar} from 'react-bootstrap'

import Img from 'gatsby-image'
import twitterLogo from '../images/icons/twitter.png'
import linkedinLogo from '../images/icons/in.png'
import gitLogo from '../images/icons/git.png'




class Layout extends React.Component {
  render() {
  console.log(this.props)

    return (


      <>
        <Helmet
          title={"Mikrasov Design"}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Navbar  className="navbar-dark" expand="sm" fixed="top" style={{backgroundColor: "#134699"}}>
          <Navbar.Brand href="/">Michael Nekrasov</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto" >
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
              {
                (this.props.sideImage !== undefined) &&
                <Img className={"rounded mx-auto d-block mb-2"} fluid={this.props.sideImage.childImageSharp.fluid}  style={{maxHeight:"225px",maxWidth:"225px"}} />
              }

              <h3 style={{textAlign : 'center'}}>Michael Nekrasov</h3>
              <h4 style={{textAlign : 'center'}}>Ph.D Student in C.S., Web Designer, Photographer, Traveler.</h4>

              {this.props.sideContent}



              <div className="text-right">
                <a href="https://github.com/mikrasov" target="_blank" className="mr-2"><img src={twitterLogo} style={{width:"25px"}}/></a>
                <a href="https://twitter.com/mikrasov" target="_blank" className="mr-2"><img src={linkedinLogo}  style={{width:"25px"}}/></a>
                <a href="https://www.linkedin.com/in/mikrasov" target="_blank" className="mr-2"><img src={gitLogo}  style={{width:"25px"}}/></a>
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
