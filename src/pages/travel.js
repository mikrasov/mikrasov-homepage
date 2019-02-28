import React from 'react'
import { graphql, StaticQuery, withPrefix } from 'gatsby'
import WorldMap from "../components/map/world-map"
import UsaMap from "../components/map/usa-map"
import Layout from '../components/layout'

const lived = {
  states: [
    "California",
    "Colorado",
  ],
  countries: [
    "Russia",
    "Thailand",
    "United States",
    "United Kingdom",
    "Taiwan",
  ]
}

const visited = {
  states: [
    "Arizona",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Minnesota",
    "Missouri",
    "Montana",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "Ohio",
    "Oregon",
    "Pennsylvania",
    "Rode Island",
    "South Dakota",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "Wisconsin",
    "Wyoming",
  ],
  countries: [
    "Australia",
    "Austria",
    "Belgium",
    "Canada",
    "Switzerland",
    "China",
    "Czech Rep.",
    "Germany",
    "Spain",
    "Finland",
    "France",
    "Greece",
    "Hong Kong",
    "Croatia",
    "Hungary",
    "Ireland",
    "Italy",
    "Japan",
    "Cambodia",
    "Luxembourg",
    "Monaco",
    "Mongolia",
    "Mexico",
    "Montenegro",
    "Malaysia",
    "Netherlands",
    "Norway",
    "New Zealand",
    "Peru",
    "Singapore",
    "Serbia",
    "Sweden",
    "Turkey",
    "Ukraine",
    "Vatican",
    "Vietnam",
    "Zambia",
  ]
}


const styleWorld = function(geography){
  var sel = geography.properties.name;
  var cls = "mapDefault";

  if(lived.countries.includes(sel) ){
    cls = "mapLived";
  }

  if( visited.countries.includes(sel) ){
    cls = "mapVisited";
  }

  return cls

}

const styleUsa = function(geography){
  var sel = geography.properties.NAME_1;
  var cls = "mapDefault";

  if( lived.states.includes(sel) ){
    cls = "mapLived";
  }

  if( visited.states.includes(sel) ){
    cls = "mapVisited";
  }

  return cls
}


const sidebar = <div>
  <h3>Jump to:</h3>
  <ul>
    <li>
      <a href="#worldMap">World Travels</a>
    </li>
    <li><a href="#usaMap">USA Travels</a></li>
  </ul>
</div>

const MapPage = ({ children }) => (
  <StaticQuery
    query={graphql`
    {
      profileImage: file(relativePath: { eq: "profile/profile-travel.png" }) {
        childImageSharp {
          fluid(maxWidth: 225) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `}


  render={data => (
    <Layout sideImage={data.profileImage} sideContent={sidebar} active={"travel"}>
      <h1>My Travels Around the World</h1>
      <a id="worldMap"/>
      <WorldMap styleGeo={styleWorld} />
      <h3 style={{textAlign:"right"}}>I have lived in <span className="mapLivedColor"> {lived.countries.length}</span> countries and explored a total of <span className="mapVisitedColor"> {lived.countries.length + visited.countries.length}</span>.</h3>

      <h1 className="mt-5 mb-0">My Travels in the USA</h1>
      <a id="usaMap"/>
      <UsaMap  styleGeo={styleUsa} />
      <h3 style={{textAlign:"right"}}>I have lived in <span className="mapLivedColor"> {lived.states.length}</span> states and explored a total of <span className="mapVisitedColor"> {lived.states.length + visited.states.length}</span>.</h3>

    </Layout>
  )}
/>
)

export default MapPage
