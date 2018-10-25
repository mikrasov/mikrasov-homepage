import { graphql, StaticQuery, withPrefix } from 'gatsby'
import React, { Component } from "react"

import "../components/map.css"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"


import Layout from '../components/layout'

const livedCountries = {
  "GBR": "United Kingdom",
  "RUS": "Russia",
  "TWN": "Taiwan",
  "THA": "Thailand",
  "USA": "USA",

}

const visitedCountries = {
  //https://www.worldatlas.com/aatlas/ctycodes.htm
  "AUS": "Australia",
  "AUT": "Austria",
  "BEL": "Belgium",
  "KHM": "Cambodia",
  "CAN": "Canada",
  "HRV": "Croatia",
  "CHN": "China",
  "CZE": "Czech Republic",
  "GBR": "United Kingdom",
  "FIN": "Finland",
  "FRA": "France",
  "DEU": "Germany",
  "GRC": "Greece",
  "HKG": "Hong Kong",
  "HUN": "Hungary",
  "IRL": "Ireland",
  "ITA": "Italy",
  "JPN": "Japan",
  "LUX": "Luxembourg",
  "MAC": "Macau",
  "MYS": "Malaysia",
  "MEX": "Mexico",
  "MCO": "Monaco",
  "MNE": "Montenegro",
  "NLD": "Netherlands",
  "NZL": "New Zealand",
  "NOR": "Norway",
  "PER": "Peru",
  "SRB": "Serbia",
  "SGP": "Singapore",
  "ESP": "Spain",
  "SWE": "Sweden",
  "CHE": "Switzerland",
  "TUR": "Turkey",
  "UKR": "Ukraine",
  "VAT": "Vatican City",
  "VNM": "Vietnam",
  "ZMB": "Zambia"
}




const geo = function(projection,geography,i){

  var cls;
  if( geography.id in livedCountries){
    cls = "mapLived";
  }
  else if( geography.id in visitedCountries){
    cls = "mapVisited";
  }
  else {
    cls = "mapDefault";
  }

  return <Geography
    key={i}
    geography={geography}
    projection={projection}
    className={cls}
  />

}


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
    <Layout sideImage={data.profileImage} active={"travel"}>
      <div className="mapContainer">
        <ComposableMap
          projectionConfig={{ scale: 205,  rotation: [-11,0,0], }}
          width={980}
          height={551}
          className="mapBox"
        >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies geography={withPrefix("world-50m.json")}>
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (

                geo(projection,geography, i)

              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </Layout>
  )}
/>
)

export default MapPage
