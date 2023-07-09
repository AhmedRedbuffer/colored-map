import React from "react"
import { ZoomableGroup,ComposableMap, Geographies, Geography } from "react-simple-maps"
import './App.css'
import california from './california.json';

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function App() {
  return (
    <>
    TEST
    <div style={{width:'800px'}}>
    <ComposableMap
    style={{ backgroundColor: "gray" }}
     projection="geoAlbers"
     projectionConfig={{
      scale:2600,
      center:[-25,37]
     }}>
      <Geographies 
      
      geography={california}>
        {({ geographies }) =>
          geographies.map((geo) => {
            console.log("Show",geo)
            let colorCounty = `#D6D6DA`
            if(geo.properties.NAME=='Yolo') colorCounty=`#FF0000`
            return (
              (
                <Geography style={{
                  default: {
                    fill: colorCounty, // Default color for counties
                    outline: 'none',
                  },
                  hover: {
                    fill: '#F53', // Color when hovering over counties
                    outline: 'none',
                  },
                  pressed: {
                    fill: '#E42', // Color when a county is clicked
                    outline: 'none',
                  },
                }} key={geo.rsmKey} geography={geo} />
              )
            )
          })
        }
      </Geographies>
    </ComposableMap>
    </div>
    </>
  )
}