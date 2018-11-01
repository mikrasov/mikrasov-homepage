import React from 'react'

import {withPrefix} from 'gatsby'

import "./map.css"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"



class UsaMap extends React.Component {
  render() {

    return (
      <div className="mapContainer">
        <ComposableMap
          projection="albersUsa"
          projectionConfig={{ scale: 900 }}
          width={980}
          height={551}
          className="mapBox"
        >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies
              disableOptimization
              geography={withPrefix("us-states-10m.json")}>
              {(geographies, projection) => geographies.map((geography, i) => (
                <Geography
                  key={i}
                  cacheId={i}
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

export default UsaMap
