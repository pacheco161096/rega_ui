import React, { useState, useEffect, useRef }  from 'react';
import { useSelector } from 'react-redux';
import Check from './check.svg'
import TraslateCopy from './traslateCopy';

const PackageHome = () => {
  const titulo = useSelector(state => state.hogar.titulo)
  const descripcion = useSelector(state => state.hogar.descripcion)
  const paquetes = useSelector(state => state.paquetes.paquetes.paquetesHogar)
  const [filterPaquetes, setFilterPaquetes] = useState(paquetes && paquetes.filter(paquete => paquete.categoria === "asimetrico"));
  const [button, setButton] = useState(true);
  const containerRef = useRef(null)
  const [isVisible, setisVisible] = useState(false)

  const callbackFunction = (entries) => {
    const [entry] = entries
    setisVisible(entry.isIntersecting)
  }

  const options = {
    root:null,
    rootMargin: '0px',
    threshold:0
  }

  useEffect(() => {
    setFilterPaquetes(paquetes && paquetes.filter(paquete => paquete.categoria === "asimetrico")) 
  }, [paquetes]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)
    
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  },[containerRef, options])

  const handleClick = (type) => {
    const slider = document.getElementById('contenedorPaquetesHome');
    const firsElement = document.querySelectorAll('.packageHome-paquete')[0];
    const firstElementWidth = firsElement.clientWidth;
    slider.scrollLeft += type === "left" ? -firstElementWidth : firstElementWidth;
  }

  const handlePackage = (type, state) => {
    setFilterPaquetes(paquetes.filter(paquete => paquete.categoria === type))
    setButton(state)
  } 

  return (
    <section className='mb-10 -mt-10 relative z-10' id="packages">
      <div className="mx-auto max-w-7xl p-6 lg:px-8 flex flex-col gap-4">
        <div className='flex flex-col gap-3 text-center justify-center items-center'>
          <h1 className='text-4xl font-extrabold text-white'>Paquetes Hogar</h1>
          <span className='text-sm text-white w-full md:w-[80%] font-semibold'>Conéctate con nuestros paquetes diseñados específicamente para el hogar. Nuestros paquetes incluyen una antena receptora, cableado de hasta 30 metros (metros adicionales con costo extra), un router y una base para la antena. Disfruta de una conexión rápida y estable en todo momento.</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex p-1 border-[#40caf4] border-2 rounded-lg w-full md:w-1/4 relative'>
            <button className={`text-xl text-white p-2 w-1/2 text-center font-bold`} onClick={()=> handlePackage('asimetrico', true)}>
              <TraslateCopy copyId="PACKAGE_ASYMETRIC"/>
            </button>
            <button className={`text-xl text-white p-2 w-1/2 text-center font-bold`} onClick={()=> handlePackage('simetrico', false)}>
              <TraslateCopy copyId="PACKAGE_SYMMETRICAL"/>
            </button>
            <div className={`absolute bg-[#40caf4] w-1/2 min-h-full -z-10 left-0 bottom-0 ${!button && 'translate-x-full'}`}></div>
          </div>
          <div className="packageHome-slider relative w-full">
            <div className='scroll-smooth flex overflow-hidden w-full mt-5' id='contenedorPaquetesHome' ref={containerRef}>
              {filterPaquetes  && filterPaquetes.map((paquete, index) => {
                  const paqueteMayor = filterPaquetes.reduce((previous, current) => {
                    return current.velocidad > previous.velocidad ? current : previous;
                  });
                const percent = ((paquete.velocidad - 0) / (paqueteMayor.velocidad - 0)) * 5;
                return(
                  <div className='packageHome-paquete min-w-full md:min-w-[33.333333%] md:w-1/3 md:p-3' key={ paquete.velocidad }>
                    <div className='rounded-lg border-2 border-[#40caf4] flex flex-col px-5 py-10'>
                      <div className='text-3xl text-white font-bold text-center'>{ paquete.titulo }</div>
                      <div className="flex flex-col justify-center mt-5">
                        <div className='flex justify-center relative'>
                          <div className="progress" id={`progressHome${index}`}>
                            <div className="circle" style={{animationDelay:`-${percent/2}s`}} ></div>
                            <div className="range">
                            </div>
                            <div id={`meterstyleHome${index}`}>
                              <style>{`#progressHome${index}:after{animation-delay:-${percent/2}s;}`}</style>
                            </div>
                          </div>
                        </div>
                        <span className='text-center text-[#40caf4] font-bold text-3xl -mt-16 z-20'>
                          {paquete.velocidad} Mbps
                        </span>
                      </div>
                      <div className='packageHome-paquete-body'>
                        <div className='packageHome-paquete-velocidad'>
                          <div className='packageHome-paquete-velocidadTitle'>

                          </div>
                          <div className='packageHome-paquete-velocidadTitle-svg'>
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col'>
                        <h1 className='text-[#2d8ae8] text-base font-semibold'>CARACTERÍSTICAS PRINCIPALES</h1>
                        <div className='flex flex-col gap-5 my-3'>
                          { paquete.caracteristicas.map(item => 
                            <div className='flex gap-2 items-center text-white font-semibold'>
                              <i className="fa-thin fa-circle-check"></i>
                              <span>{ item.caracteristica }</span>
                            </div>
                            )}
                        </div>
                      </div>
                      <div className='flex flex-col gap-5'>
                        <div className='flex items-end justify-center'><span className='text-3xl font-bold text-white'>${ paquete.precio.toLocaleString("en") }</span><span className='text-sm text-[#2d8ae8] font-semibold'>/<TraslateCopy copyId="PACKAGE_PER_MONTH"/></span></div>
                        <div className='text-white font-bold bg-[#40caf4] p-2 rounded-lg text-center'><TraslateCopy copyId="PACKAGE_ORDER_NOW"/></div>
                        <div className='text-xs text-center text-[#2d8ae8] font-bold'>Folio:{paquete.folio}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='absolute top-[35%]  m-auto items-center -left-[2%] w-[104%] flex justify-between'>
              <button className='border-2 border-[#40caf4] bg-[#000a25] rounded-full w-[50px] aspect-square text-[#40caf4] text-3xl flex justify-center items-center' onClick={() => handleClick('left')}><i className="fa-regular fa-chevron-left"></i></button>
              <button className='border-2 border-[#40caf4] bg-[#000a25] rounded-full w-[50px] aspect-square text-[#40caf4] text-3xl flex justify-center items-center' onClick={() => handleClick('rigth')}><i className="fa-regular fa-chevron-right"></i></button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackageHome;
