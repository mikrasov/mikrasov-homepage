import React from 'react'
import { Link } from 'gatsby'
import ProfileImage from './profileimage'



const SideBar = ({ siteTitle }) => (
  <div id={"sidebar"}>
    <ProfileImage />

    <h3 style={{textAlign : 'center'}}>Michael Nekrasov</h3>
    <h4 style={{textAlign : 'center'}}>Ph.D Student in C.S., Web Designer, Photographer, Traveler.</h4>
    <p className="mb-9">
      Welcome! Thank's for taking interest in me. I am currently finishing a PhD in Computer Science at UC Santa
      Barbara. My research focuses on wireless aerial networks for environmental and disaster applications. In addition
      to my academic and professional work, I am a photographer, hiker, and adventurer. While you are here I would be
      honored if you checked out some of my work.
    </p>
  </div>
)

export default SideBar
