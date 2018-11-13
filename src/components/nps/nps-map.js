import React from 'react'

import {withPrefix} from 'gatsby'
import "./nps.css"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"




class NpsMap extends React.Component {
  constructor() {
    super()

    this.state = {
      zoom: 1,
      label: (<span style={{color:"#999999"}}>Hover to see details</span>)
    }

    this.handleGeographyClick = this.handleGeographyClick.bind(this)
    this.handleGeographyEnter = this.handleGeographyEnter.bind(this)
    this.handleGeographyLeave = this.handleGeographyLeave.bind(this)

  }

  handleGeographyEnter(geography){
    //console.log(geography)

    var label = "";

    if(geography.properties.UNIT_NAME !== undefined)
      label = geography.properties.UNIT_NAME + " ("+geography.properties.STATE+")"

    if(geography.properties.STUSPS !== undefined)
      label = geography.properties.NAME
    if(geography.properties.comname !== undefined)
      label = "Critical Habitat of " + geography.properties.comname

    this.setState({
      label: label,
    })
  }

  handleGeographyLeave(){
    this.setState({
      label: (<span style={{color:"#999999"}}>Hover to see details</span>)
    })
  }


  handleGeographyClick(geography) {
    console.log(geography)

    return;
    if (geography.properties.STUSPS == "CA" || geography.properties.STATE == "CA") {

      this.setState({
        center: [0,500],
      })
      console.log(this.state.center)
    }
  }

  styleNps(geography){
    var cls = "mapDefault";

    if(geography.properties.UNIT_TYPE !== undefined)
      return String(geography.properties.UNIT_TYPE).replace(/\s+/g, "")

    if(geography.properties.STUSPS !== undefined)
      return "state"

    if(geography.properties.comname !== undefined)
      return "critical"

    return cls
  }


  render() {

    return (
      <div className="mapContainer"  style={{marginBottom:"1rem"}}>


        <ComposableMap
          projection="albersUsa"
          projectionConfig={{ scale: 1240 }}
          width={980}
          height={600}

        >
          <ZoomableGroup center={this.state.center} zoom={ 1}>
            <Geographies
              disableOptimization
              geography={withPrefix("/nps.json")}>
              {(geographies, projection) => geographies.map((geography, i) => (
                <Geography
                  key={i}
                  cacheId={i}
                  geography={geography}
                  projection={projection}
                  className={this.styleNps(geography)}
                  onClick={this.handleGeographyClick}
                  onMouseEnter={this.handleGeographyEnter}
                  onMouseLeave={this.handleGeographyLeave}

                />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <h3 style={{textAlign:"center",marginTop:"20px"}}>{this.state.label}</h3>

        <h5 className={"mt-5"}>Key</h5>
        <div className={"row"}>
          <div className={"col-3"}><div className={"key critical"}/>Critical Habitat</div>
          <div className={"col-3"}><div className={"key NationalPark"}/>National Park</div>
          <div className={"col-3"}><div className={"key NationalMonument"}/>Reserve/Monument</div>
          <div className={"col-3"}><div className={"key NationalHistoricalReserve"}/>Historical</div>
          <div className={"col-3"}><div className={"key NationalRiver"}/>Seashore/River</div>
          <div className={"col-3"}><div className={"key OtherDesignation"}/>Other</div>
        </div>
      </div>
    )
  }
}

export default NpsMap
