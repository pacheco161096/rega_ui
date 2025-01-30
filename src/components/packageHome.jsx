import React, { useState, useEffect, useRef }  from 'react';
import { useSelector } from 'react-redux';
// import Check from './check.svg'
import TraslateCopy from './traslateCopy';
import { sendWhatsAppMessage } from '../utils/functions/general';

const PackageHome = () => {
  const paquetes = useSelector(state => state.paquetes.paquetes.paquetesHogar)
  const [filterPaquetes, setFilterPaquetes] = useState(paquetes && paquetes.filter(paquete => paquete.categoria === "asimetrico"));
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null); // Ref para el div a observar
  const [position, setPosition] = useState(0);
  const [Modal, setModal] = useState(false)
  const [handlePackageAnimation, sethandlePackageAnimation] = useState(false)

  useEffect(() => {
    setFilterPaquetes(paquetes && paquetes.filter(paquete => paquete.categoria === "asimetrico")) 
  }, [paquetes]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cambiamos el estado según la visibilidad del div
        setTimeout(() => {
          setIsVisible(entry.isIntersecting);
        }, 100); // Cambia el estado tras 2 segundos de demora
      },
      {
        root: null, // Observa dentro del viewport
        threshold: 0.7, // El div debe estar al menos 10% visible
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current); // Observa el div
    }

    // Cleanup cuando el componente se desmonta
    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  const handleClick = (type) => {
    const slider = document.getElementById('contenedorPaquetesHome');
    const firsElement = document.querySelectorAll('.packageHome-paquete')[0];
    const firstElementWidth = firsElement.clientWidth;
    slider.scrollLeft += type === "left" ? -firstElementWidth : firstElementWidth;
  }

  const handlePackage = (type, state) => {
    sethandlePackageAnimation(true)
    setTimeout(() => {
      sethandlePackageAnimation(false)
    }, 1000); // Cambia el estado tras 2 segundos de demora
    setFilterPaquetes(paquetes.filter(paquete => paquete.categoria === type))
    if (state) {
      setPosition((prev) => prev - 100);
    } else {
      setPosition((prev) => prev + 100);
    }
  } 

  const modalCostoExtra = (action) => {
    if (action) {
      setModal(true);
      document.body.style.overflow = 'hidden';
    } else {
      setModal(false);
      document.body.style.overflow = 'visible';
    }
  }

  return (
    <section className='mb-10 -mt-10' id="packages">
      <div className="mx-auto max-w-7xl p-6 lg:px-8 flex flex-col gap-4">
        <div className='flex flex-col gap-3 justify-center items-center'>
          <h1 className='text-5xl font-semibold text-[rgb(29,29,31)] w-full'><TraslateCopy copyId="HOME_PAQUETE_HOGAR_TITULO"/></h1>
          <div className='flex flex-col md:flex-row justify-end items-end gap-4 md:gap-0'>
            <span className='text-base w-full'>
              <p className='md:w-[70%]'><TraslateCopy copyId="HOME_PAQUETE_HOGAR_DESCRIPCION"/>
                <span className='text-[#0076DF] cursor-pointer' onClick={() => modalCostoExtra(true)}>
                <TraslateCopy copyId="HOME_PAQUETES_HOGAR_MAS_DETALLES"/>
                </span>
                </p>
            </span>
            <div className='flex h-10 border-[#0076DF] border rounded-lg w-full md:w-[30%] relative'>
              <button className={`text-base text-white w-1/2 text-center`} style={{ color: position ? '#0076DF' : 'white'}} onClick={()=> handlePackage('asimetrico', true,)}>
                <TraslateCopy copyId="PACKAGE_ASYMETRIC"/>
              </button>
              <button className={`text-base text-[#0076DF] w-1/2 text-center`} style={{ color: !position ? '#0076DF' : 'white'}} onClick={()=> handlePackage('simetrico', false)}>
                <TraslateCopy copyId="PACKAGE_SYMMETRICAL"/>
              </button>
              <div className={`button-change absolute bg-[#0076DF] rounded-lg w-1/2 min-h-full -z-10 left-0 bottom-0 switch-toggle-button`} style={{ transform: `translateX(${position}%)` }}></div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className="packageHome-slider relative w-full" >
            <div className='scroll-smooth flex overflow-hidden w-full mt-5' id='contenedorPaquetesHome' ref={divRef}>
              {filterPaquetes  && filterPaquetes?.sort((a, b) => a.velocidad - b.velocidad)?.map((paquete, index) => {
                const paqueteMayor = filterPaquetes.reduce((previous, current) => {
                  return current.velocidad > previous.velocidad ? current : previous;
                });
                const percent = ((paquete.velocidad - 0) / (paqueteMayor.velocidad - 0)) * 10;
                return(
                  <div className='packageHome-paquete min-w-full md:min-w-[33.3333%] md:w-[33.3333%]' key={ paquete.velocidad }>
                    <div className='flex flex-col relative px-3'>
                    { handlePackageAnimation && <div className='w-[95%] absolute h-full z-50 rounded-xl flex justify-center items-center animation-package-loading'></div> }
                      <div className='flex flex-col gap-3 absolute bottom-0 left-0 w-full'>
                        <div className="px-10 py-5 flex-col flex gap-2 z-20">
                          <div className='text-3xl text-white font-bold'>{ paquete.titulo }</div>
                          <div className='flex justify-between'>
                            <span className='text-white font-bold text-xl'>
                              {paquete.velocidad} Mbps
                            </span>
                            <div className='flex items-end justify-center'>
                              <span className='text-xl font-bold text-white'>
                              ${ paquete.precio.toLocaleString("en") }
                              </span>
                              <span className='text-sm text-white font-semibold'>
                                /<TraslateCopy copyId="PACKAGE_PER_MONTH"/>
                              </span>
                            </div>
                          </div>
                          <div className="w-full h-1">
                            <div className={`h-1 rounded-lg bg-white shadow-[0_0_15px_rgba(255,255,255,1)] transition-all duration-2000`} style={{width:`${isVisible ? percent*10 : 0}%`}}>

                            </div>
                          </div>
                          <div className='flex flex-col gap-1'>
                            <h1 className='text-white text-base font-semibold'>
                              <TraslateCopy copyId="HOME_PAQUETE_TEXT_CARACTERISTICAS" />
                            </h1>
                            <div className='flex gap-2'>
                              { paquete.caracteristicas.map((item, i) => 
                                <div className='flex gap-2 items-center text-white' key={ i }>
                                  <i className="fa-thin fa-circle-check"></i>
                                  <span>{ item.caracteristica }</span>
                                </div>
                                )}
                            </div>
                          </div>
                          <div className='flex flex-col gap-2'>
                            <button className='text-white bg-[#0076DF] p-2 rounded-lg text-center w-full' onClick={ () => sendWhatsAppMessage('PACKAGE', paquete) }>
                              <TraslateCopy copyId="PACKAGE_ORDER_NOW"/>
                            </button>
                            <div className='text-xs text-center text-white'>Folio:{paquete.folio}</div>
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <img className='object-cover w-full h-[650px] rounded-3xl' src={`https://monkfish-app-2et8k.ondigitalocean.app${paquete.imagen}`} alt="" />
                        <div class="absolute inset-0 bg-black bg-opacity-50 rounded-3xl z-10"></div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='w-full flex justify-end mt-5'>
              <div className='flex gap-2'>
                <button className='border-[#40caf4] rounded-full w-[35px] aspect-square text-[#081025] text-xl flex justify-center items-center bg-gray-200 opacity-70' onClick={() => handleClick('left')}>
                  <i className="fa-regular fa-chevron-left"></i>
                </button>
                <button className='border-[#40caf4] rounded-full w-[35px] aspect-square text-[#081025] text-xl flex justify-center items-center bg-gray-200' onClick={() => handleClick('rigth')}>
                  <i className="fa-regular fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {Modal && <div className='fixed top-0 left-0 z-50 w-full h-screen bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center transition-opacity duration-300'>
        <div className='w-[300px] md:min-w-[700px] bg-white rounded-3xl'>
          <div className='p-5 flex justify-end'>
            <button className='cursor-pointer bg-gray-200 font-bold w-[40px] aspect-square rounded-full' onClick={() => modalCostoExtra(false)}>
              x
            </button>
          </div>
          <div className='px-10 pb-10 flex justify-between w-full items-center'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl font-semibold'>
                <TraslateCopy copyId="HOME_MODAL_INSTALLATION_TITLE" />
              </h1>
              <span>
                <TraslateCopy copyId="HOME_MODAL_INSTALLATION_DESC_1" />
                <span className='text-sm ml-1 text-gray-400'>(<TraslateCopy copyId="HOME_MODAL_INSTALLATION_REST_1" />).</span>
              </span>
              <span><TraslateCopy copyId="HOME_MODAL_INSTALLATION_DATE_LIM" /></span>
            </div>
            <div className='flex justify-center items-center'>
              <img src="./assets/antena.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>}
    </section>
  );
}

export default PackageHome;
