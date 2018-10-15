import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './bootstrap.min.css'
import './layout.css'
import './specialized.css'

import {Nav, Navbar} from 'react-bootstrap'
import Sidebar from './sidebar'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}



    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />

        </Helmet>
        <Navbar  bg="dark" expand="md" style={{backgroundColor: "#134699"}}>
          <Navbar.Brand href="/">Michael Nekrasov</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto">
              <Nav.Link href="/">News</Nav.Link>
              <Nav.Link href="/skills">Skills</Nav.Link>
              <Nav.Link href="/cv">CV</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <div
          className={'container'}
        >
          <div className={'row'}>
            <div id='content' className={'col-8'}>{children}</div>
            <div className={'col-4 d-none d-md-block'}><Sidebar/></div>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
