import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png'
import logoBlack from '../assets/logoOscuro.png'
import mx from '../assets/mx.png'
import en from '../assets/en.png'
import { Link, useParams,useNavigate } from "react-router-dom";
import TraslateCopy from './traslateCopy';
import Login from './login';
import { useSelector } from 'react-redux';
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


const Menu = ({handleModal}) => {
  const [menu,setMenu] =  useState(false)
  const refContainerLogin = useRef(null)
  const refContainerArrow = useRef(null)
  const data = useSelector(state => state.login.user);
  const navigate = useNavigate();
  const { lang } = useParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
      <header className="w-full absolute top left z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 relative" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="w-32" src={ logo } alt="" />
          </a>
        </div>
        <div className='md:hidden'>
          { RenderLenguage() }
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 items-center">
          <a href="/Servicios" className="text-sm font-semibold leading-6 text-white cursor-pointer">
            <TraslateCopy copyId="HOME_MENU_SERVICIOS"/>
          </a>
          <a href="#packages" className="text-sm font-semibold leading-6 text-white cursor-pointer">
            <TraslateCopy copyId="HOME_MENU_INTERNET"/>
          </a>
          <a href="#mapa" className="text-sm font-semibold leading-6 text-white cursor-pointer">
            <TraslateCopy copyId="HOME_MENU_COBERTURA"/>
          </a>
          <a href="#contacto" className="text-sm font-semibold leading-6 text-white cursor-pointer">
            <TraslateCopy copyId="HOME_MENU_SOPORTE"/>
          </a>
          <a href="#contacto" className="text-sm font-semibold leading-6 text-white cursor-pointer">
            <TraslateCopy copyId="HOME_MENU_CONTACTANOS"/>
          </a>
          <div>
            { RenderLenguage() }
          </div>
          {/* <a href="es-mx/login" className="text-sm font-semibold leading-6 text-white cursor-pointer bg-[#0076DF] py-2 px-5 rounded-lg">
            <TraslateCopy copyId="HOME_MENU_MYACCOUNT"/>
          </a> */}
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#010417] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img
                className="w-36"
                src={ logo }
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[#fff]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">                
                <a href="/Servicios" className="text-sm font-semibold leading-6 text-white cursor-pointer">
                  <TraslateCopy copyId="HOME_MENU_SERVICIOS"/>
                </a>
                <a href="/Internet" className="text-sm font-semibold leading-6 text-white cursor-pointer">
                  <TraslateCopy copyId="HOME_MENU_INTERNET"/>
                </a>
                <a href="/Conciertos" className="text-sm font-semibold leading-6 text-white cursor-pointer">
                  <TraslateCopy copyId="HOME_MENU_COBERTURA"/>
                </a>
                <a href="/Soporte" className="text-sm font-semibold leading-6 text-white cursor-pointer">
                  <TraslateCopy copyId="HOME_MENU_SOPORTE"/>
                </a>
                <a href="/Contactanos" className="text-sm font-semibold leading-6 text-white cursor-pointer">
                  <TraslateCopy copyId="HOME_MENU_CONTACTANOS"/>
                </a>
                {/* <a href="/hoteles" className="text-sm font-semibold leading-6 text-white cursor-pointer bg-[#0076DF] py-2 px-5 rounded-lg">
                  <TraslateCopy copyId="HOME_MENU_MYACCOUNT"/>
                </a> */}
              </div>
              <div className="py-6">
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

const RenderLenguage = () => {
  const { lang } = useParams();
  
  return (
    <div className='flex'>
      <div className='border rounded-full w-[70px] h-[30px] border-white relative flex justify-between p-1 items-center cursor-pointer'>
        <Link className="" to="/es-mx">
          <div className={`w-[20px] aspect-square ${lang!=='es-mx' && 'filter grayscale'}`}>
            <img src={mx}  alt=''/>
          </div>
        </Link>
        <Link className="" to="/en">
        <div className={`w-[20px] aspect-square ${lang==='es-mx' && 'filter grayscale'}`}>
          <img src={en}  alt=''/>
        </div>
        </Link>
      </div>
      {/*<div className='language-select' onClick={() => handleSelect()}> 
        <div className='language-img'><img src={lang==='es-mx' ? mx : en} /></div>
        <span className='language-text'>{lang==='es-mx' ? 'Español' : 'English'}</span>
        <i className="fa-solid fa-arrow-down language-arrow" ref={ refArrow }></i>
      </div>
      <div className="language-container" ref={ refContainer }>
        <Link className="language-option" to="/en" onClick={() => handleSelect()}>
          <div className='language-img'><img src={en} /></div>
          <span className='language-text'>English</span>
        </Link>
        <Link className="language-option" to="/es-mx" onClick={() => handleSelect()}>
          <div className='language-img'><img src={mx} /></div>
          <span className='language-text'>Español</span>
        </Link>
      </div>*/}
    </div>
  )
}

export default Menu;
