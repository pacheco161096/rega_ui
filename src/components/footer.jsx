import React, { useRef,createRef  } from 'react';
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import profeco from '../assets/profeco.png'
import master from '../assets/mastercard.png';
import oxxo from '../assets/oxxo.png';
import ventanilla from '../assets/ventanilla.png';
import visa from '../assets/visa.png';
import TraslateCopy from './traslateCopy';
import { useSelector } from 'react-redux';


const Footer = () => {
  const sections = useSelector(state => state.footer.sections)
  const documents = useSelector(state => state.documents.documents)
  const myRefs = useRef([])
  const elementsIcon = useRef([])

  myRefs.current = sections.map((element, i) => myRefs.current[i] ?? createRef());
  elementsIcon.current = sections.map((element, i) => elementsIcon.current[i] ?? createRef());
  return (
    <section id="footer">
      <div className="mx-auto max-w-7xl p-6 lg:px-8 flex flex-col items-center justify-center">
        <div className='w-full mb-5 border-b pb-5'>
          <div className='flex flex-col text-[12px] text-gray-500 gap-3'>
            <img src={logo} alt="" className='w-[100px]'/>
            <TraslateCopy copyId="HOME_FOOTER_META"/>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 w-full'>
          {
            sections.length > 0 && sections.map((item,i) => {
              return(
                <div key={ item.titulo} className='text-[12px]'>
                  <div className='footer-title' onClick={ () => handleFooter(myRefs.current[i], elementsIcon.current[i])}>
                    <span className='font-bold text-gray-800 text-left'>{ item.titulo }</span> 
                    <span ref={ elementsIcon.current[i] }>▼</span>
                  </div>
                  <div className="flex flex-col text-gray-600 gap-2" ref={ myRefs.current[i] }>
                    {
                      item.links?.length > 0 && item.links.map(link => <a key={ link.link} href={ link.link }>{ link.text }</a>)
                    }
                  </div>
                </div>
              )
            })
          }
          <div className=''>
            <div className='font-bold text-gray-800 text-left mb-[15px]'>
              <TraslateCopy copyId="HOME_FOOTER_CONTACTANOS"/>
            </div>
            <div className="flex flex-col text-gray-600 gap-2 text-[12px]">
              <div><TraslateCopy copyId="HOME_FOOTER_CONTRATACIONES"/></div>
              <div><TraslateCopy copyId="HOME_FOOTER_PHONE"/></div>
              <div><TraslateCopy copyId="HOME_FOOTER_EMAIL"/></div>
              <div><TraslateCopy copyId="HOME_FOOTER_HORARIO"/></div>
            </div>
          </div>
          <div>
            <div className='font-bold text-gray-800 text-left mb-[15px]'>
              <TraslateCopy copyId="HOME_FOOTER_SIGUENOS"/>
            </div>
            <div className='footer-icons'>
              <div className='flex gap-2 w-full text-gray-600 text-2xl md:text-xl mt-2'>
                <i className="fa-brands fa-facebook text-left"></i>
                <i className="fa-brands fa-instagram text-left"></i>
                <i className="fa-brands fa-whatsapp text-left"></i>
              </div>
              <div className='footer-profeco'>
                <img src={profeco} alt="" />
              </div>
            </div>
            <div className='mt-5'>
              <div className='font-bold text-gray-800 text-left'>
                <TraslateCopy copyId="PAYMENTS_TITLE"/>
              </div>
              <div className='flex gap-2 items-center mt-2'>
                <img src={ master } alt="" className='w-[40px]'/>
                <img src={ oxxo } alt="" className='w-[40px]'/>
                <img src={ visa } alt="" className='w-[40px]'/>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-start w-full text-[12px] text-gray-600 border-t mt-5 pt-5 flex-col md:flex-row'>
          <span>Copyright © 2024 REGATELECOM. Todos los derechos reservados.</span>
          <div className='flex gap-2 flex-col md:flex-row'>
          {
            documents.map((document, i) => {
              return(
                <a
                  href={`https://cmsalmacenamientoregatelecom.nyc3.digitaloceanspaces.com${document.documento}`}
                  key={ i }
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  { document.texto }
                </a>
              )
            })
          }
        </div>
        </div>
      </div>
    </section>
  );
}

const handleFooter = (referent, icon) => {
  if(!referent.current.style.display || referent.current.style.display === 'none') {
    icon.current.innerHTML = '▲'
    referent.current.style.display = 'flex';
  } else {
    icon.current.innerHTML = '▼'
    referent.current.style.display = 'none';
  }
}

export default Footer;
