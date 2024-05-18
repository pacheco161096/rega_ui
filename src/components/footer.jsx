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
      <div className="mx-auto max-w-7xl p-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
        <div className='grid grid-cols-1 md:grid-cols-6 gap-2'>
          <div className='flex flex-col text-sm text-white gap-3'>
            <img src={logo} alt="" className='w-3/5'/>
            <TraslateCopy copyId="HOME_FOOTER_META"/>
          </div>
          {
            sections.length > 0 && sections.map((item,i) => {
              return(
                <div key={ item.titulo}>
                  <div className='footer-title' onClick={ () => handleFooter(myRefs.current[i], elementsIcon.current[i])}>
                    <span className='font-bold text-white text-left text-xl'>{ item.titulo }</span> 
                    <span ref={ elementsIcon.current[i] }>▼</span>
                  </div>
                  <div className="flex flex-col text-sm text-white gap-3" ref={ myRefs.current[i] }>
                    {
                      item.links?.length > 0 && item.links.map(link => <a key={ link.link} href={ link.link }>{ link.text }</a>)
                    }
                  </div>
                </div>
              )
            })
          }
          <div>
            <div className='font-bold text-white text-left text-xl'>
              <TraslateCopy copyId="HOME_FOOTER_CONTACTANOS"/>
            </div>
            <div className="flex flex-col text-sm text-white gap-3">
              <div><TraslateCopy copyId="HOME_FOOTER_CONTRATACIONES"/></div>
              <div><TraslateCopy copyId="HOME_FOOTER_PHONE"/></div>
              <div><TraslateCopy copyId="HOME_FOOTER_EMAIL"/></div>
              <div><TraslateCopy copyId="HOME_FOOTER_HORARIO"/></div>
            </div>
          </div>
          <div>
            <div className='font-bold text-white text-left text-xl'><TraslateCopy copyId="HOME_FOOTER_SIGUENOS"/></div>
            <div className='footer-icons'>
              <div className='flex gap-3 md:grid grid-cols-3 w-full text-white text-2xl md:text-xl mt-2'>
                <i class="fa-brands fa-facebook text-left"></i>
                <i className="fa-brands fa-instagram text-left"></i>
                <i className="fa-brands fa-whatsapp text-left"></i>
              </div>
              <div className='footer-profeco'>
                <img src={profeco} alt="" />
              </div>
            </div>
            <div className='mt-5'>
              <div className='font-bold text-white text-left text-xl'><TraslateCopy copyId="PAYMENTS_TITLE"/></div>
              <div className='flex md:grid grid-cols-3 gap-2 items-center md:justify-center mt-2'>
                <img src={ master } alt="" className='md:w-3/4 w-[50px]'/>
                <img src={ oxxo } alt="" className='md:w-3/4 w-[50px]'/>
                <img src={ visa } alt="" className='md:w-3/4 w-[50px]'/>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-documents'>
          {
            documents.map(document => {
              return(
                <div onClick={() => window.open(`https://cms.regatelecom.mx/${document.documento}`)} >{ document.texto }</div>
              )
            })
          }
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
