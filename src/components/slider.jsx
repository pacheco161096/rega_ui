import React, { useRef,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSwipeable } from 'react-swipeable'

const Slider = () => {
  const data = useSelector(state => state.sliders.sliders)

  if (data.length > 0) {
    return(
      <div className='max-w-full mx-auto flex overflow-hidden'>
        {
          data.map(slider => {
            return(
              <section className='min-w-full h-screen bg-no-repeat bg-cover relative'>
                <div className="hero w-full">
                  <div className="w-full absolute top left z-10 h-full">
                    <div className="mx-auto max-w-7xl p-6 lg:px-8 h-full">
                      <div className="w-full h-full text-white flex justify-center flex-col items-center">
                        <h1 className="font-extrabold text-5x l md:w-3/4 w-full text-center">
                          <strong className="lg:block font-extrabold text-4xl md:text-6xl text-center">{slider?.titulo}</strong>
                          <span className='text-sm block text-[#40caf4] text-center'>{slider?.descripcion}</span> 
                        </h1>
                        { slider?.boton &&  
                          <form className='flex flex-col w-full md:w-2/4 md:flex-row mt-5 gap-2 items-stretch'>
                            <input type="text" className='p-2 border-2 border-[#40caf4] rounded-lg w-full md:w-3/4' placeholder='Dirección de correo electrónico' />
                            <button className='rounded-lg bg-[#40caf4] text-sm w-full p-2 md:w-1/4 font-semibold'>Contratar Ahora</button>
                          </form>
                        }
                      </div>
                    </div>
                  </div>
                  <img className='w-full h-screen object-cover' src={`https://cms.regatelecom.mx/uploads/slider_33_c8a99dc8c3.jpg`} alt="" />
                </div>
              <div className='w-full absolute bottom-0 left z-0 bg-gradient-to-t from-[#000a25] from-10% min-h-full'></div>
              </section>
            )
          })
        }
      </div>
    )
  }
}

export default Slider;
