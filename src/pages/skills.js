import React from 'react'
import Layout from '../components/layout'
import Section from '../components/cv/section.js'
import Subsection from '../components/cv/subsection.js'
import '../components/specialized.css'
import { graphql, Link, StaticQuery } from 'gatsby'


function slugify(text)
{
  var cls = text[0].toString().toLowerCase()
    .replace(/\+/g,'p')
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text

  return "skill-"+cls
}

var skills = {
  "Programing": [
      ["Java", 100],
      ["Python", 80],
      ["PHP", 50],
      ["C", 50],
      ["C++", 30],
      ["Assembly (SPARC)", 30],
  ],
  "Web": [
    ["HTML", 100],
    ["CCS", 80],
    ["Javascript", 100],
    ["JQuery", 100],
    ["Bootstrap", 80],
    ["D3", 80],
    ["React", 30],
    ["Gatsby", 30],

  ],
  "Technologies": [
    ["Android Development", 100],
    ["Cloud Computing (AWS)", 100],
    ["Django", 100],
    ["NodeJs", 100],
    ["SQL", 100],
    ["XML", 100],
    ["JSON", 100],
    ["NumPy", 100],
    ["Pandas", 100],
    ["OpenCV", 100],
    ["TCP/IP Stack", 100],
    ["802.11", 100],
    ["DataTurbine", 100],

  ],
  "Development Environment": [
    ["Linux", 100],
    ["Windows", 100],
    ["OS X", 100],
    ["JetBrains IDEs", 100],
    ["Android Studio", 100],
    ["Eclipse", 100],
    ["Git", 100],
   ],
  "Software": [
    ["LaTeX", 100],
    ["Lightroom", 100],
    ["Photoshop", 100],
    ["Microsoft Office", 100],
  ],
  "Other": [
    ["Sensor Networks", 100],
    ["Photography", 100],
    ["UAS (Multi-copter) FAA Certified Pilot - Part 107", 100],
    ["Russian Language", 100],
    ["Outdoorsman", 100],
    ["PADI Scuba Certified", 100],
  ]
}



var classes = {
  "Undergraduate":[
    "Artificial Intelligence",
    "Programming Languages",
    "Assembly",
    "Compilers",
    "Computer Design",
    "Computer Architecture",
    "Operating Systems",
    "Computer Security",
    "Networks",
    "Data Structures",
    "Software Engineering",
    "Cognitive Science",
    "Computability & Intractability",
    "Mathematical Reasoning",
    "Advanced Calculus",
    "Advanced Linear Algebra",
    "Graph Theory",
    "Statistics",
    "Combinatorics",
    "Number Theory",
    "Physics (Electromagnetics, Optics, Mechanical, Thermodynamics)",
    "Analog Design",
    "Circuits and Systems",
  ],
  "Graduate":[
    "Computational Geometry"
  ]
}

const sidebar = <div>
  <h3>Jump to:</h3>
  <ul>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#classes">Formal Training</a></li>

  </ul>
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

        <Section name="Skills" id="skills">
          <a id="skills" />
          {
            Object.keys(skills).map((key, index) => (
              <Subsection name={key}>
                <ul className="list-inline list-icons">
                  {skills[key].map((s) => (
                    <li key={s[0]} className="list-inline-item">
                      <div className={slugify(s)}/>
                      <div className="skill-label">{s[0]}</div>
                    </li>
                  ))
                  }
                </ul>
              </Subsection>
            ))
          }
        </Section>

        <Section name="Formal Training">
          <a id="classes" />
          {
            Object.keys(classes).map((key, index) => (
              <Subsection name={key}>
                <ul className="list-inline">
                  {classes[key].map((c) => (
                    <li key={c} className="list-inline-item ">
                      <div className="skill-label">{c}</div>
                    </li>
                  ))
                  }
                </ul>
              </Subsection>
            ))
          }
        </Section>

      </Layout>
    )}
  />
)

export default SkillsPage

