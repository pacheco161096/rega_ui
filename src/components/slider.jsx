import React, { useRef,useEffect } from 'react';
import { useSelector } from 'react-redux';
import TraslateCopy from './traslateCopy';
import Input from './input';

const Slider = () => {
  const data = useSelector(state => state.sliders.sliders)

  if (data.length > 0) {
    return(
      <div className='max-w-full mx-auto flex overflow-hidden'>
        {
          data.map((slider, i) => {
            return(
              <section className='min-w-full min-h-screen bg-no-repeat bg-cover relative' key={ i }>
                <div className="hero w-full">
                  <div className="w-full absolute top left z-20 h-full">
                    <div className="mx-auto max-w-7xl p-6 lg:px-8 h-full">
                      <div className="w-full h-full text-white flex justify-center flex-col items-center">
                        <h1 className="font-extrabold text-5x l md:w-3/4 w-full text-center">
                          <strong className="lg:block font-extrabold text-4xl md:text-6xl text-center">{slider?.titulo}</strong>
                          <span className='text-sm block text-white text-center'>{slider?.descripcion}</span> 
                        </h1>
                        { slider?.boton &&  
                          <form className='flex flex-col w-full md:w-2/4 md:flex-row mt-5 gap-2 items-stretch'>
                            <Input type='text' className='p-2 border-2 border-[#0076DF] rounded-lg w-full md:w-3/4' placeHolder={ <TraslateCopy copyId="HOME_FORM_SLIDER_INPUT" /> } />
                            <button className='rounded-lg bg-[#0076DF] text-sm w-full p-2 md:w-1/4 font-semibold text-white'><TraslateCopy copyId="HOME_FORM_SLIDER_BUTTON" /></button>
                          </form>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="bg-black absolute top-0 left-0 z-10 w-full h-full opacity-25"></div>
                  <img className='w-full h-screen object-cover' src="./assets/internet.jpg" alt="" />
                </div>
              </section>
            )
          })
        }
      </div>
    )
  }
}

export default Slider;
