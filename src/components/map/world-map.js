import React from 'react'
import {withPrefix } from 'gatsby'

import "./map.css"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"



class WorldMap extends React.Component {
  render() {

    return (
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
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  className={this.props.styleGeo(geography)}
                />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default WorldMap
