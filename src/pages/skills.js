import React from 'react'

import Layout from '../components/layout'
import Section from '../components/cv/section.js'
import Subsection from '../components/cv/subsection.js'
import '../components/specialized.css'


const SkillsPage = () => (

  <Layout>

    <Section name = "Skills">
      <Subsection name="Programming">

        <ul className="list-inline list-icons">
          <li className="list-inline-item skill skill-level-expert">
            <div className="skill-icon skill-icon-java"/>
            <div className="skill-label">Java</div>
          </li>

          <li className="list-inline-item skill skill-level-high">
            <div className="skill-icon skill-icon-python"/>
            <div className="skill-label">Python</div>
          </li>
          <li className="list-inline-item skill skill-level-med">
            <div className="skill-icon skill-icon-php"/>
            <div className="skill-label">PHP</div>
          </li>
          <li className="list-inline-item skill skill-level-med">
            <div className="skill-icon skill-icon-c"/>
            <div className="skill-label">C</div>
          </li>
          <li className="list-inline-item skill skill-level-low">
            <div className="skill-icon skill-icon-cpp"/>
            <div className="skill-label">C++</div>
          </li>
          <li className="list-inline-item skill skill-level-low">
            <div className="skill-icon skill-icon-assembly"/>
            <div className="skill-label">Assembly (SPARC)</div>
          </li>
        </ul>
      </Subsection>

      <Subsection name="Web">
      <ul className="list-inline list-icons">
        <li className="list-inline-item skill skill-level-expert">
          <div className="skill-icon skill-icon-html5"/>
          <div className="skill-label">HTML</div>
        </li>
        <li className="list-inline-item skill skill-level-high">
          <div className="skill-icon skill-icon-css3"/>
          <div className="skill-label">CCS</div>
        </li>


        <li className="list-inline-item skill skill-level-expert">
          <div className="skill-icon skill-icon-javascript"/>
          <div className="skill-label">Javascript</div>
        </li>
        <li className="list-inline-item skill skill-level-expert">
          <div className="skill-icon skill-icon-jquery"/>
          <div className="skill-label">JQuery</div>
        </li>
        <li className="list-inline-item skill skill-level-high">
          <div className="skill-icon skill-icon-bootstrap"/>
          <div className="skill-label">Bootstrap</div>
        </li>

        <li className="list-inline-item skill skill-level-med">
          <div className="skill-icon skill-icon-d3js"/>
          <div className="skill-label">D3</div>
        </li>
        <li className="list-inline-item skill skill-level-med">
          <div className="skill-icon skill-icon-apache"/>
          <div className="skill-label">Apache</div>
        </li>
      </ul>
      </Subsection>


      <Subsection name="Technologies">
      <ul className="list-inline list-icons">
        <li className="list-inline-item skill skill-level-high">
          <div className="skill-icon skill-icon-android"/>
          <div className="skill-label">Android Development</div>
        </li>
        <li className="list-inline-item skill skill-level-med">
          <div className="skill-icon skill-icon-aws"/>
          <div className="skill-label">Cloud Computing (AWS)</div>
        </li>
        <li className="list-inline-item skill skill-level-med">
          <div className="skill-icon skill-icon-django"/>
          <div className="skill-label">Django</div>
        </li>
        <li className="list-inline-item skill skill-level-low">
          <div className="skill-icon skill-icon-nodejs"/>
          <div className="skill-label">NodeJs</div>
        </li>
        <li className="list-inline-item skill skill-level-med">
          <div className="skill-icon skill-icon-sql"/>
          <div className="skill-label">SQL</div>
        </li>
        <li className="list-inline-item skill skill-level-med">
          <div className="skill-icon skill-icon-xml"/>
          <div className="skill-label">XML</div>
        </li>
        <li className="list-inline-item skill skill-level-expert">
          <div className="skill-icon skill-icon-json"/>
          <div className="skill-label">JSON</div>
        </li>
        <li className="list-inline-item skill skill-level-med">
          <div className="skill-icon skill-icon-numpy"/>
          <div className="skill-label">NumPy</div>
        </li>
        <li className="list-inline-item skill skill-level-high">
          <div className="skill-icon skill-icon-pandas"/>
          <div className="skill-label">Pandas</div>
        </li>
        <li className="list-inline-item skill skill-level-low">
          <div className="skill-icon skill-icon-opencv"/>
          <div className="skill-label">OpenCV</div>
        </li>
        <li className="list-inline-item skill skill-level-high">
          <div className="skill-icon skill-icon-network"/>
          <div className="skill-label">TCP/IP Stack</div>
        </li>
        <li className="list-inline-item skill skill-level-expert">
          <div className="skill-icon skill-icon-wifi"/>
          <div className="skill-label">802.11</div>
        </li>
        <li className="list-inline-item skill skill-level-high">
          <div className="skill-icon skill-icon-dataturbine"/>
          <div className="skill-label">DataTurbine</div>
        </li>
      </ul>
      </Subsection>


      <Subsection name="Development Environment">
      <ul className="list-inline list-icons">
        <li className="list-inline-item skill skill-level-expert">
          <div className="skill-icon skill-icon-linux"/>
          <div className="skill-label">Linux</div>
        </li>
        <li className="list-inline-item skill skill-level-expert">
          <div className="skill-icon skill-icon-windows"/>
          <div className="skill-label">Windows</div>
        </li>
        <li className="list-inline-item skill skill-level-high">
          <div className="skill-icon skill-icon-mac"/>
          <div className="skill-label">OS X</div>
        </li>
        <li className="list-inline-item skill skill-level-high">
          <div className="skill-icon skill-icon-jetbrains"/>
          <div className="skill-label">JetBrains IDEs( PyCharm, IntelliJ, Android Studio)</div>
        </li>
        <li className="list-inline-item skill skill-level-high">
          <div className="skill-icon skill-icon-eclipse"/>
          <div className="skill-label">Eclipse</div>
        </li>
        <li className="list-inline-item skill skill-level-high">
          <div className="skill-icon skill-icon-git"/>
          <div className="skill-label">Git</div>
        </li>
      </ul>
      </Subsection>

      <Subsection name="Software">
      <ul className="list-inline list-icons">
        <li className="list-inline-item skill skill-level-high">
          <div className="skill-icon skill-icon-latex"/>
          <div className="skill-label">LaTeX</div>
        </li>
        <li className="list-inline-item skill skill-level-expert">
          <div className="skill-icon skill-icon-lightroom"/>
          <div className="skill-label">Lightroom</div>
        </li>
        <li className="list-inline-item skill skill-level-high">
          <div className="skill-icon skill-icon-photoshop"/>
          <div className="skill-label">Photoshop</div>
        </li>
        <li className="list-inline-item skill skill-level-expert">
          <div className="skill-icon skill-icon-office"/>
          <div className="skill-label">Microsoft Office</div>
        </li>
      </ul>
      </Subsection>

      <Subsection name="Other">
      <ul className="list-inline list-icons">
        <li className="list-inline-item skill skill-level-expert">
          <div className="skill-icon skill-icon-sensors"/>
          <div className="skill-label">Sensor Networks</div>
        </li>

        <li className="list-inline-item skill skill-level-expert">
          <div className="skill-icon skill-icon-photography"/>
          <div className="skill-label">Photography</div>
        </li>
        <li className="list-inline-item skill skill-level-high">
          <div className="skill-icon skill-icon-quadcopter"/>
          <div className="skill-label">UAS (Multi-copter) FAA Certified Pilot - Part 107</div>
        </li>
        <li className="list-inline-item skill skill-level-expert">
          <div className="skill-icon skill-icon-russian"/>
          <div className="skill-label">Russian Language</div>
        </li>
        <li className="list-inline-item skill skill-level-high">
          <div className="skill-icon skill-icon-outdoors"/>
          <div className="skill-label">Outdoorsman</div>
        </li>
        <li className="list-inline-item skill skill-level-low">
          <div className="skill-icon skill-icon-scuba"/>
          <div className="skill-label">PADI Scuba Certified</div>
        </li>
      </ul>
      </Subsection>
    </Section>

    <Section name={"Formal Training"}>

    <Subsection name="Undergraduate Courses">
    <ul className="list-inline list-icons">
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Artificial Intelligence</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Programming Languages</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Assembly</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Compilers</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Computer Design</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Computer Architecture</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Operating Systems</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Computer Security</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Networks</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Data Structures</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Software Engineering,</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Cognitive Science</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Computability & Intractability</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Mathematical Reasoning</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Advanced Calculus</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Advanced Linear Algebra</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Graph Theory</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Statistics</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Combinatorics</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Number Theory</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Physics (Electromagnetics, Optics, Mechanical, Thermodynamics)</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Analog Design</div>
      </li>
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Circuits and Systems</div>
      </li>
    </ul>
    </Subsection>


    <Subsection name="Graduate">
    <ul className="list-inline list-icons">
      <li className="list-inline-item skill skill-className">
        <div className="skill-icon skill-icon-className"/>
        <div className="skill-label">Computational Geometry</div>
      </li>
    </ul>
    </Subsection>

  </Section>
  </Layout>

)

export default SkillsPage
