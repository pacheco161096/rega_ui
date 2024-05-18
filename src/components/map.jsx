import React, { useState, useEffect, useRef } from "react";
import * as turf from "@turf/turf";
import ReactMapGL, { Source, Layer, ScaleControl } from "react-map-gl";

const Map = () => {
  let lon = -105.4536696621842;
  let lat = 20.363898764701155;
  var radius = 22;
  var center = [lon, lat];
  var options = { steps: 50, units: "kilometers", properties: { foo: "bar" } };
  var circle = turf.circle(center, radius, options);
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 10,
    pitch: 0,
    bearing: 0
  });
  const mapRef = useRef(null);


  return (
    <section className='w-full' id="mapa">
      <div className="mx-auto max-w-7xl p-6 lg:px-8 flex flex-col">
        <div className='flex flex-col gap-2 mb-3'>
          <h1 className='text-4xl font-extrabold text-white'>Nuestro Alcance</h1>
          <span className='text-sm text-white w-full md:w-1/2 font-semibold'>Utiliza el mapa para verificar la disponibilidad de nuestro servicio en tu localidad y siempre mantente conectado con nosotros.</span>
        </div>
        <ReactMapGL
          {...viewport}
          ref={mapRef}
          onClick={(e, v) =>
            console.log(
              e.features.forEach((feature) => {
                console.log(feature.layer.id.split("-")[1], e.lngLat);
              })
            )
          }
          transitionDuration={300}
          style={{width: '100%', height: 700}}
          mapStyle="mapbox://styles/pacheco1610/clwbkbm8t018d01nxd774hahr"
          mapboxAccessToken="pk.eyJ1IjoicGFjaGVjbzE2MTAiLCJhIjoiY2x3Ymsyb2g4MHI1eDJpcHFiczkyMnlxNyJ9.ET_wvpj0TPW6SI2PHtFBPQ"
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          <div style={{ position: "absolute", bottom: 200, left: 100 }}>
            <ScaleControl maxWidth={100} unit={"metric"} />
          </div>
          <Source id="my-data" type="geojson" data={circle}>
            <Layer
              id="point-90-hi"
              type="fill"
              paint={{
                "fill-color": "#40caf4",
                "fill-opacity": 0.4,
                "fill-outline-color": "#40caf4"
              }}
            />
          </Source>
        </ReactMapGL>
      </div>
    </section>
  );
}

export default Map;
