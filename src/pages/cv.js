import React from 'react'
import { graphql, withPrefix } from 'gatsby'

import Layout from '../components/layout'
import Reminder from '../components/blog/reminder'
import Section from '../components/cv/section.js'
import Subsection from '../components/cv/subsection.js'
import Subsubsection from '../components/cv/subsubsection.js'
import Experience from '../components/cv/experience.js'
import "../components/cv/skill.css"
import EsciIcon from '../images/icons/esci.svg'


function slugify(text)
{
  let cls = text[0].toString().toLowerCase()
    .replace(/\+/g,'p')
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text

  return "skill-"+cls
}

const skills = {
  "Programing": [
    ["Java", 100],
    ["Python", 80],
    ["Javascript", 100],
    ["PHP", 50],
    ["C", 50],
    ["C++", 30],
    ["Assembly (SPARC)", 30],
  ],
  "Web": [
    ["HTML", 100],
    ["CCS", 80],
    ["JQuery", 100],
    ["Bootstrap", 80],
    ["React", 30],
    ["Gatsby", 30],
  ],
  "Technologies": [
    ["Android Development", 100],
    ["Cloud Computing (AWS)", 100],
    ["Django", 100],
    ["NodeJs", 100],
    ["SQL", 100],
    ["MongoDB", 100],
    ["XML", 100],
    ["JSON", 100],
    ["NumPy", 100],
    ["Pandas", 100],
    ["OpenCV", 100],
    ["TCP/IP Stack", 100],
    ["802.11", 100],
    ["802.15.4", 100],
    ["DataTurbine", 100],

  ],
  "Development Environment": [
    ["Linux", 100],
    ["Windows", 100],
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
  "Social Skill": [
    ["Teaching", 100],
    ["Teamwork", 100],
    ["Communicating Between Disciplines", 100],
    ["Multi-national Collaborations", 100],
    ["Engage with technology stakeholders", 100],
    ["Grant Writing", 100],
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

const classes = {
  "Undergraduate":[
    "Artificial Intelligence",
    "Programming Languages",
    "Assembly",
    "Compilers",
    "Computer Design",
    "Computer Architecture",
    "Operating Systems",
    "Computer Security",
    "Computer Communication and Networks",
    "Basic Data Structures & Object Oriented Design",
    "Advanced Data Structures",
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
    "Physics (Electromagnetic, Optics, Mechanical, Thermodynamics)",
    "Analog Design",
    "Circuits and Systems",
  ],
  "Graduate":[
    "Computational Geometry",
    "Distributed Computing",
    "Computer Networks",
    "Mobile Computing",
    "Cloud Computing",
    "Mobile Networks",
    "Mobile Imaging",
    "Data Intensive Computing",
    "Java Distributed Computing",
    "Sociology & Biology Networks",
    "Education: Blended Learning Course Design"
  ]
}

const sidebar = <div>
  <h3>Jump to:</h3>
  <ul>
    <li>
      <a href="#education">Education</a>
    </li>
    <li>
      <a href="#training">Training</a>
      <ul>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#classes">Coursework</a></li>

      </ul>
      <a href="#experience">Experience</a>
      <ul>

        <li><a href="#academic">Academic Experience</a></li>
        <li><a href="#industry">Industry Experience</a></li>
        <li><a href="#teaching">Teaching Experience</a></li>
      </ul>
    </li>
    <li><a href="#publications">Publications</a></li>
    <ul>
      <li><a href="#pub-core">Core Research</a></li>
      <li><a href="#pub-other">Other Work</a></li>
    </ul>
    <li><a href="#awards">Awards & Scholarships</a></li>
  </ul>
</div>




export default class CvPage extends React.Component {

  render() {
    const profileImage = this.props.data.profileImage
    const papers = this.props.data.allMarkdownRemark.edges

    return (
      <Layout sideImage={profileImage} sideContent={sidebar} active={"cv"}>


        <Section name={"Education"}>
          <a id="education" />
          <div className="row mb-2">
            <div className="col-md-3 col-lg-4 order-1 order-md-2 text-emphasis">2020<br/>(expected in March)</div>
            <div className="col-md-9 col-lg-8 order-2 order-md-1"> <strong>Ph.D Computer Science</strong> <br/>
              University of California, Santa Barbara
            </div>

          </div>

          <div className="row mb-2">
            <div className="col-md-3 col-lg-4 order-1 order-md-2 align-items-center text-emphasis">2011</div>
            <div className="col-md-9 col-lg-8 order-2 order-md-1"><strong>B.S. Computer Science </strong> (cum laude) <br/>
              Minor in Mathematics <br/>
              University of California, San Diego, <br/>
            </div>
          </div>
        </Section>

        <Section name={"Training"}>
          <a id="training" />
          <Subsection name="Skills" id="skills">
            <a id="skills" />
            {
              Object.keys(skills).map((key, index) => (
                <Subsubsection name={key}>
                  <ul className="list-inline list-icons">
                    {skills[key].map((s) => (
                      <li key={s[0]} className="list-inline-item">
                        <div className={slugify(s)}/>
                        <div className="skill-label">{s[0]}</div>
                      </li>
                    ))
                    }
                  </ul>
                </Subsubsection>
              ))
            }
          </Subsection>

          <Subsection name="Formal Training">
            <a id="classes" />
            {
              Object.keys(classes).map((key, index) => (
                <Subsubsection name={key}>
                  <ul className="list-inline">
                    {classes[key].map((c) => (
                      <li key={c} className="list-inline-item ">
                        <div className="skill-label">{c}</div>
                      </li>
                    ))
                    }
                  </ul>
                </Subsubsection>
              ))
            }
          </Subsection>
        </Section>

      <Section name={"Experience"}>
        <a id="experience" />

        <Subsection name="Academic Experience">
          <a id="academic" />

          <p className="section-description">
            Eight-year academic with work experience including leadership, research, outreach, policy development, and administrative roles. Interdisciplinary and cross-sectoral collaborations with various departments at UCSD, UCSB, and LTER member sites as well as with international organizations in Australia, Mongolia, Taiwan, Thailand, Turkey, and Zambia.
          </p>

        <Subsubsection name={"UC Santa Barbara"} subtitle={"Santa Barbara, CA, USA"}>

          <Experience name={"PhD Research on Wireless Aerial Disaster Networks Project"} date={"Sep 2013 - Present"}>
            Designed applied solutions for locating and communicating with affected individuals during
            environmental disasters using unmanned aerial drones. – 20hrs per week
          </Experience>

          <Experience name={"Research Assistant on SecurePost Project, MOMENT Lab, Computer Science Department "} date={"Sep 2013 - Jun 2017"}>
            Collaborated with interdisciplinary team of 10 PhD students, 5 faculty, and over 15 international
            community partner organizations to design and implement technologies for managing real-world
            obstructions to freedom of speech in developing regions – 20hrs per week.
          </Experience>

          <Experience name={"Computer Science Department Student Senate, Graduate Student Recruitment Committee,"} date={"Sep 2015 - Jun 2016"}>
            Member of graduate student forum for department committees, policies and events. – 3-6hrs per week
          </Experience>

        </Subsubsection>


        <Subsubsection name={"Walailak University"} subtitle={"Tha Sala, Nakhon Si Thammarat Province, Thailand"}>

          <Experience name={"Fulbright Scholar, Center of Excellence in Ecoinformatics"} date={"Jan 2013 - Sep 2013"}>
            Led international research partnership to develop real-time flood detection for protecting aquaculture
            in the Gulf of Thailand– 40+hrs per week.
          </Experience>

          <Experience name={"NSF Funded Internship, Center of Excellence in Ecoinformatics"} date={"Sep 2010 - Dec 2010"}>
            Deployed coral reef observatory at Racha Yai (island near Phuket) – 40+hrs per week.
          </Experience>
        </Subsubsection>


        <Subsubsection name={"UC San Diego"} subtitle={"San Diego, CA, USA"}>

          <Experience name={"Research Assistant, California Institute for Telecommunications and Information Technology [CALIT2]"} date={"Sep 2009 - Jun 2012"}>
            Developed technologies for real-time data streaming and analysis as part of the Open Source Data
            Turbine Initiative – 20hrs per week.
          </Experience>

          <Experience name={"Pacific Rim Undergraduate Experiences [PRIME] Scholar, National Museum of Marine Biology and Aquarium, Taiwan"} date={"Jul 2009 - Aug 2009"}>
            Automated coral spawning detection using computer vision coupled with coral fluorescence – 40hrs per
            week.
          </Experience>


        </Subsubsection>
      </Subsection>

    <Subsection name={"Industry Experience"}>
      <a id="industry" />

      <Experience name={"Independent Contractor"} date={"Sep 2006 - Present"}>
        Administered a private consulting business for occasional jobs including web development, small business computer network instillation and troubleshooting, and photography. Requires high level of flexibility, understanding client needs, communicating expectations, meeting deadlines, and communicating technical constraints and solutions in clear understandable language.
      </Experience>

      <Experience name={"Front-End Web Developer"} date={"Feb 2009 - Nov 2012"}>
        Lead front-end web developer for MobileTrac, a startup specializing in vehicle history reports. Worked in a team with marketing, business, and back-end programmers to develop a commercial website selling instant vehicle history reports. Required meeting tight deadlines, co-ordinating with members who had varying perspectives and technical literacy. Duties included: programing as well graphical and interface design.
      </Experience>
    </Subsection>


    <Subsection name={"Teaching Experience"}>
        <a id="teaching" />

        <Experience name={"Computer Ethics: Reshaping Society Through Technology"} date={"Winter 2020"}>
          Designed and co-taught (with Sherri Conklin) a high school enrichment course. What we share online and how this highly tailored personal information is used is a topic of continuous concern and debate. In this class we explored what these algorithms “know” about us and how they gather data. This class provided an overview of active areas of computer science including: Big Data, Machine Learning, Networking, Security, and Human Computer Interaction. The class will provided the skills for understanding how the technologies work as well as philosophical skills for critically engaging with these technologies.
        </Experience>

        <Experience name={"Introduction to Compute Communication Networks (TA)"} date={"Fall 2019"}>
          As a teaching assistant, I led discussion sections, held office hours, moderated an online forum, and graded student assignments. This course covered the fundamentals of computer networks including the application, transport, network, and link layers.
          <div className="blog-emphasis"> <a href="/eval/ESCI_CS176A.pdf"><EsciIcon/> Course evaluation of my teaching is available.</a></div>
        </Experience>

      <Experience name={"Translation of Programming Languages (TA)"} date={"Spring 2019"}>
        As a teaching assistant, I led discussion sections, held office hours, moderated an online forum, and graded student assignments. This course covered how to construct parsers and compilers. Due to the difficult nature of the class, as a TA I spent lots of time outside of class helping students understand the class material and to apply it to their course projects.
        <div className="blog-emphasis"> <a href="/eval/ESCI_CS160.pdf"><EsciIcon/> Course evaluation of my teaching is available.</a></div>
      </Experience>


      <Experience name={"Data Structure and Algorithms (TA)"} date={"Spring 2018"}>
        As a teaching assistant, I led discussion sections, held office hours, moderated an online forum, and graded student assignments. This was a proof heavy course covering greedy algorithms, divide and conquer, dynamic programming, np-completeness, and approximation algorithms.
        <div className="blog-emphasis"> <a href="/eval/ESCI_CS130B.pdf"><EsciIcon/> Course evaluation of my teaching is available.</a></div>
      </Experience>

      <Experience name={"Computer Science Bootcamp (TA)"} date={"Winter 2018"}>
        As a teaching assistant, I led lab section, held office hours, moderated an online forum, and graded student assignments. This was an intro course targeted to non computer scientists that covered a wide range of topics such as data encoding, image formats, python programming, audio encoding, graph traversal, and huffman coding.
        <div className="blog-emphasis"> <a href="/eval/ESCI_CS4.pdf"><EsciIcon/> Course evaluation of my teaching is available.</a></div>
      </Experience>

      <Experience name={"Foundations of Computer Science (TA)"} date={"Fall 2012"}>
        As a teaching assistant, I led discussion sections, held office hours, and graded student assignments. This course introduced students to core mathematical concepts underpinning computer science such as logic, inductive proofs, recursion set theory, combinatorics .
      </Experience>

    </Subsection>
  </Section>


  <Section name={"Publications"}>
  <a id="publications" />

    <Subsection name={"Core Papers"}>
      <a id="pub-core" />
    {papers.map( ({node:paper}) => ( paper.frontmatter.category === 'core'?
      <div className="mb-2" key={paper.id}>
        {paper.frontmatter.citation} <Reminder icon post={paper}/>

      </div>:''
    ))}
    </Subsection>

    <Subsection name={"Other Work"}>
      <a id="pub-other" />
    {papers.map( ({node:paper}) => ( paper.frontmatter.category !== 'core'?
        <div className="mb-2" key={paper.id}>
          {paper.frontmatter.citation} <Reminder icon post={paper}/>

        </div>:''
    ))}
    </Subsection>

  </Section>

  <Section name={"Awards & Scholarships"}>
    <a id="awards" />
    <ul className="fa-ul mb-0">
      <li>DroNet 2019 Best Paper</li>
      <li>MobiSys 2013 Best Poster 2013</li>
      <li>NSF Graduate Fellowship Recipient 2012</li>
      <li>Fulbright Scholar 2012</li>
      <li>UCSB Fellowship Recipient 2012</li>
      <li>Graduated Cum Laude 2011</li>
      <li>UCSD Robins Scholarship 2010</li>
      <li>BAE Systems Scholarship 2009</li>
      <li>UCSD Programs Abroad Returnee of the Year 2010</li>
      <li>Inducted Tau Beta Pi (TBP) 2009</li>
      <li>Inducted Eta Kappa Nu (HKN) 2009</li>
      <li>UCSD Provost Honors 2006- 2009</li>
      <li>Boeing Scholarship 2008</li>
      <li>UCSD International Center Scholarship 2007</li>
    </ul>

  </Section>

  </Layout>
    )
  }
}


export const pageQuery =  graphql`
  query {
    profileImage: file(relativePath: { eq: "profile/profile-cv.png" }) {
        childImageSharp {
          fluid(maxWidth: 225) {
            ...GatsbyImageSharpFluid
          }
        }
    }
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: {fields:{draft:{eq:false}},frontmatter:{ paper:{ne:null}}}
    ) {
      edges {
        node {
          id
          fields {
            date(formatString: "MMM DD, YYYY")
          }
          frontmatter {
            title
            category
            paper
            citation
          }
        }
      }
    }
  }
`;
