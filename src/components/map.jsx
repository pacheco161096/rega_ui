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
    <section className='w-full mb-10' id="mapa">
      <div className="w-full h-[500px] relative">
        {/* <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-5 p-6">
          <div className="w-full md:w-[50%] bg-[#0076DF] rounded-xl shadow-2xl p-10 flex flex-col gap-5">
            <h1 className="text-3xl md:text-5xl font-semibold text-white text-center">
              <TraslateCopy copyId="HOME_SEARCH_UBICATION" />
            </h1>
            <div className="flex gap-2">
              <Input type='text' className='bg-white rounded-xl p-2 w-full text-white' placeHolder={ <TraslateCopy copyId="HOME_INPUT_WHERE_LOCATED" /> } />
              <div className="w-[40px] h-[40px] cursor-pointer bg-white rounded-full aspect-square flex justify-center text-center items-center text-[#0076DF]">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </div> */}
        <div className="absolute top-3.5 left-3.5 lg:py-16 lg:px-40">
          <h1 className="text-3xl md:text-5xl font-semibold text-center text-white">
            Área de cobertura
          </h1>
          <ul>
            {
              ubications && ubications.map((ubication, index) => (
                <li key={index}>- {ubication.name}</li>
              ))
            }
          </ul>
        </div>
        <img src="./assets/mapa.jpg" alt="" className="w-full h-full" />
      </div>
    </section>
  );
}

export default Map;
