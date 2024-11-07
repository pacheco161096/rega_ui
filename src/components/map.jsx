import React, { useState, useEffect, useRef } from "react";
import * as turf from "@turf/turf";
import ReactMapGL, { Source, Layer, ScaleControl } from "react-map-gl";

const Map = () => {
  return (
    <section className='w-full mb-10' id="mapa">
      <div className="w-full h-[500px] relative">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-5 p-6">
          <div className="w-full md:w-[50%] bg-[#0076DF] rounded-xl shadow-2xl p-10 flex flex-col gap-5">
            <h1 className=" text-3xl md:text-5xl font-semibold text-white text-center">Revisa la Cobertura y Únete a Nuestra Red</h1>
            <div className="flex gap-2">
              <input type="text" className="bg-white rounded-xl p-2 w-full" placeholder="¿Donde te encuentras?"/>
              <div className="w-[40px] h-[40px] cursor-pointer bg-white rounded-full aspect-square flex justify-center text-center items-center text-[#0076DF]">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </div>
        <img src="./assets/mapa.jpg" alt="" className="w-full h-full" />
      </div>
    </section>
  );
}

export default Map;
