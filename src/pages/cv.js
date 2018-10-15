import React from 'react'
import { withPrefix } from 'gatsby'

import Layout from '../components/layout'
import Section from '../components/cv/section.js'
import Subsection from '../components/cv/subsection.js'
import Subsubsection from '../components/cv/subsubsection.js'


const CVPage = () => <Layout>

  <Section name={"Experience & Education"}>


      <Subsection name={"Education"}>

        <div className="resume-item d-flex flex-column flex-md-row   pl-3 m-2">
          <h5 className="mb-0">University of California, Santa Barbara, Ph.D</h5>
          <div className="resume-date text-md-right">
            <span className="text-primary">(Expected 2019)</span>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row pl-3 m-2">
          <h5 className="mb-0">University of California, San Diego, B.S., Computer Science & Mathematics (cum
            laude)</h5>
          <div className="resume-date text-md-right">
            <span className="text-primary">2011</span>
          </div>
        </div>
      </Subsection>

      <Subsection name="Academic Experience">


          <p className="section-description">
            Eight-year academic with work experience including leadership, research, outreach, policy development, and
            administrative roles. Interdisciplinary and cross-sectoral collaborations with various departments at UCSD,
            UCSB, and LTER member sites as well as with international organizations in Australia, Mongolia, Taiwan,
            Thailand, Turkey, and Zambia
          </p>

        <Subsubsection name={"UC Santa Barbara"} subtitle={"Santa Barbara, CA, USA"}>
          <div className="resume-item d-flex flex-column flex-md-row mb-2">

            <div className="resume-content mr-auto">
              <h5 className="mb-0">PhD Research on Wireless Aerial Disaster Networks Project</h5>

              <p>Designed applied solutions for locating and communicating with affected individuals during
                environmental disasters using unmanned aerial drones. – 20hrs per week</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sep 2013 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-2">

            <div className="resume-content mr-auto">
              <h5 className="mb-0">Research Assistant on SecurePost Project, MOMENT Lab, Computer Science
                Department </h5>

              <p>Collaborated with interdisciplinary team of 10 PhD students, 5 faculty, and over 15 international
                community partner organizations to design and implement technologies for managing real-world
                obstructions to freedom of speech in developing regions – 20hrs per week. </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sep 2013 - Jun 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-2">
            <div className="resume-content mr-auto">
              <h5 className="mb-0"> Computer Science Department Student Senate, Graduate Student Recruitment
                Committee,</h5>

              <p>Member of graduate student forum for department committees, policies and events. – 3-6hrs per week</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sep 2015 - Jun 2016</span>
            </div>
          </div>
        </Subsubsection>


        <Subsubsection name={"Walailak University"} subtitle={"Tha Sala, Nakhon Si Thammarat Province, Thailand"}>


          <div className="resume-item d-flex flex-column flex-md-row mb-2">

            <div className="resume-content mr-auto">
              <h5 className="mb-0">Fulbright Scholar, Center of Excellence in Ecoinformatics </h5>

              <p>Led international research partnership to develop real-time flood detection for protecting aquaculture
                in the Gulf of Thailand– 40+hrs per week.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jan 2013 - Sep 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-2">

            <div className="resume-content mr-auto">
              <h5 className="mb-0">NSF Funded Internship, Center of Excellence in Ecoinformatics </h5>

              <p>Deployed coral reef observatory at Racha Yai (island near Phuket) – 40+hrs per week.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sep 2010 - Dec 2010</span>
            </div>
          </div>
        </Subsubsection>


        <Subsubsection name={"UC San Diego"} subtitle={"San Diego, CA, USA"}>
          <div className="resume-item d-flex flex-column flex-md-row mb-2">

            <div className="resume-content mr-auto">
              <h5 className="mb-0">Research Assistant, California Institute for Telecommunications and Information
                Technology [CALIT2] </h5>

              <p>Developed technologies for real-time data streaming and analysis as part of the Open Source Data
                Turbine Initiative – 20hrs per week.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sep 2009 - Jun 2012</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-2">

            <div className="resume-content mr-auto">
              <h5 className="mb-0">Pacific Rim Undergraduate Experiences [PRIME] Scholar, National Museum of Marine
                Biology and Aquarium, Taiwan</h5>
              <p>Automated coral spawning detection using computer vision coupled with coral fluorescence and– 40hrs per
                week.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sep 2013 - Jun 2017</span>
            </div>
          </div>

        </Subsubsection>
      </Subsection>

    <Subsection name={"Industry Experience"}>
      <div className="section-body">
        <div className="resume-item d-flex flex-column flex-md-row mb-2">
          <div className="resume-content mr-auto">
            <h5 className="mb-0">Idependent Contractor </h5>
            <p>Administered a private consulting business for occasional jobs including web development, small business
              computer network instillation and troubleshooting, and photography. Requires high level of flexibility,
              understanding client needs, communicating expectations, meeting deadlines, and communicating technical
              constraints and solutions in clear understandable language.</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Sep 2006 - Present</span>
          </div>
        </div>


        <div className="resume-item d-flex flex-column flex-md-row mb-2">
          <div className="resume-content mr-auto">
            <h5 className="mb-0">Front-End Web Developer </h5>
            <p>Lead front-end web developer for MobileTrac, a startup specializing in vehicle hostry reports. Worked in
              a team with marketing, buisness, and back-end programmers to develop a comercial website selling instant
              vehicle history reports. Required meeting tight deadlines, co-ordinating with members who had varying
              perspectives and technical literacy. Duties included: programing as well graphical and interface
              design.</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Feb 2009 - Nov 2012</span>
          </div>
        </div>

      </div>

    </Subsection>
  </Section>


  <Section name={"Publications"}>

      <div className="section-body">
        <div className="resume-item d-flex flex-column flex-md-row mb-2">
          PENDING REVIEW: Nekrasov, M, et al. “Anonymity and Reputation on Social Media in an Age of Global Internet
          Dependence.” Journal of Internet Services and Applications. 2018.
        </div>
        <div className="resume-item d-flex flex-column flex-md-row mb-2">
          Nekrasov, M, et al. <a target="_blank" href={withPrefix("papers/Nekrasov_2017_foci.pdf")}>"SecurePost: Verified Group-Anonymity on
          Social Media."</a> 7th USENIX Workshop on Free and Open Communications on the Internet FOCI 17. USENIX
          Association, 2017.
        </div>
        <div className="resume-item d-flex flex-column flex-md-row mb-2">
          Nekrasov, M, Parks, L., and Belding, E. <a target="_blank" href={withPrefix("papers/Nekrasov_2017_10_LIMITS.pdf")}>"Limits to
          internet freedoms: Being heard in an increasingly authoritarian world.</a> Proceedings of the 2017 Workshop on
          Computing Within Limits. ACM, 2017.
        </div>
        <div className="resume-item d-flex flex-column flex-md-row mb-2">
          Zheleva, M., Nekrasov, M. (2013). <a target="_blank" href={withPrefix("papers/Nekrasov_2013_10_MobiSys.pdf")}>"MobiSys
          2013."</a> IEEE Pervasive Computing 12 (4), 0084-88.
        </div>


        <div className="resume-item d-flex flex-column flex-md-row mb-2">
          Nekrasov, M., Chumkiew, S., Shin, P. <a target="_blank" href={withPrefix("papers/Nekrasov_2013_10_Android_Bandon_Bay.pdf")}>"Android
          at Bandon Bay: Low-Cost Environmental Monitoring and Event Detection Using Smartphones."</a> GSWC. 2013.
        </div>
        <div className="resume-item d-flex flex-column flex-md-row mb-2">
          Fountain, T., Sameer, T., Shin, P. Nekrasov, M. <a target="_blank" href={withPrefix("papers/Nekrasov_2012_07_DataTurbine.pdf")}>"The Open
          Source DataTurbine Initiative: Empowering the Scientific Community with Streaming Data
          Middleware."</a> Bulletin of the Ecological Society of America. 2012.
        </div>
        <div className="resume-item d-flex flex-column flex-md-row mb-2">
          Jaroensutasinee, M., Jaroensutasinee, K., Bainbridge, S., Fountain, T., Chumkiew, S., Noonsang, P. Kuhapon, U.
          Vannarat, S. Poyai, S. Nekrasov, M. <a target="_blank"
                                                 href={withPrefix("papers/Nekrasov_2012_07_Sensor_Networks_Reefs.pdf")}>"Sensor
          Networks Applications for Reefs at Racha Island, Thailand."</a> Published in the Proceedings of the 12th
          International Coral Reef Symposium. Cairns, Australia. 9-13 July 2012.
        </div>
        <div className="resume-item d-flex flex-column flex-md-row mb-2">
          Jaroensutasinee, K., Jaroensutasinee, M., Bainbridge, S., Fountain, T., Holbrook, S., Nekrasov, M. <a
          target="_blank" href={withPrefix("papers/Nekrasov_2012_07_CREON.pdf")}>"CREON – Integrating Disparate Sources of Remote
          Coral Reef Sensor Data."</a> Proceedings of the 12th International Coral Reef Symposium. 2012.
        </div>
        <div className="resume-item d-flex flex-column flex-md-row mb-2">
          Jaroensutasinee, M., Jaroensutasinee, K., Fountain, T., Nekrasov, M. et al. <a target="_blank"
                                                                                         href={withPrefix("papers/Nekrasov_2011_09_Coral_Sensor_Network.pdf")}>"Coral
          Sensor Network at Racha Island, Thailand."</a> Published in the Proceedings of the Environmental Information
          Management Conference. 2011.
        </div>
        <div className="resume-item d-flex flex-column flex-md-row mb-2">
          Lu, S. Perry, M. Nekrasov, et al.. (2011). <a target="_blank" href={withPrefix("papers/Nekrasov_2011_05_Bees.pdf")}>"Automatic
          analysis of Camera Image Data: an Example of Honey Bee (Apis cerana) Images from Shanping Wireless Sensor
          Network."</a> Taiwan Journal of Forest Science. 6 (26); 305-311. 2011.

        </div>
      </div>

  </Section>

  <Section name={"Awards & Scholarships"}>
      <ul className="fa-ul mb-0">
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

export default CVPage
