import React, { useState, useEffect, useRef } from "react";
import * as turf from "@turf/turf";
import ReactMapGL, { Source, Layer, ScaleControl } from "react-map-gl";
import TraslateCopy from "./traslateCopy";
import Input from "./input";

const Map = () => {

  const ubications = [
    { name: 'Juntas y Veranos' },
    { name: 'La puerta' },
    { name: 'Pedro Moreno' },
    { name: 'El Columpio' },
    { name: 'Ciénega' },
    { name: 'El Tuito' },
    { name: 'Yelapa' },
    { name: 'Ixtlahuahuey' },
    { name: 'Refugio' },
    { name: 'Potrerillos' },
    { name: 'Sauceda' },
  ];

  return (
    <section className='w-full mb-10 relative' id="mapa">
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl p-6 lg:px-8 z-20">
          <div className="bg-black/50 p-2 rounded-lg md:bg-transparent">
            <h1 className="text-3xl md:text-5xl font-semibold text-white md:text-[#0076DF] mb-2">
              Área de cobertura
            </h1>
            <ul className="grid grid-cols-2 gap-2 text-white md:text-[#0c1c2b] max-w-[50%]">
              {
                ubications && ubications.map((ubication, index) => (
                  <li key={index}>&#9679; {ubication.name}</li>
                ))
              }
            </ul>
          </div>
      </div>
      <div className="w-full h-[500px] relative flex justify-end bg-[#f0f0f0]">
        <img src="./assets/mapa.jpg" alt="" className="w-full md:w-[70%] h-full" />
      </div>
    </section>
  );
}

export default Map;
