import React,{ useState, useEffect, lazy, Suspense }  from 'react'
import Payment from '../components/payments'
import ModalLogin from '../components/modalLogin'
import { useParams } from 'react-router-dom';
import cms  from '../services/index'
import { useDispatch } from 'react-redux';
import {Navigate} from "react-router-dom"

const Header = lazy(() => import( '../components/header'));
const Menu = lazy(() => import( '../components/menu'));
const PackageBussines = lazy(() => import( '../components/packageBussines'));
const PackageHome = lazy(() => import( '../components/packageHome'));
const Map = lazy(() => import( '../components/map'));
const Contact = lazy(() => import( '../components/contact'));
const Support = lazy(() => import( '../components/support'));
const Footer = lazy(() => import( '../components/footer'));


const WrapperHome = () => {
  const { lang } = useParams();
  const isValidLocale = lang === 'es-mx' || lang === 'en';
  return isValidLocale ? Home() : <Navigate replace to="/es-mx" />
}

const Home = () => {
  const [modalActive,setModalActive] = useState(false)
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('idle');  // 'idle', 'success', 'error'
  const { lang } = useParams();
  const dispatch = useDispatch()
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Inicia la carga

      // Llamar a todas las funciones en paralelo
      try {
        const results = await Promise.all([
          cms.getSliders(lang, dispatch),
          cms.getCards(lang, dispatch),
          cms.getHogar(lang, dispatch),
          cms.getNegocio(lang, dispatch),
          cms.getPaquetes(lang, dispatch),
          cms.getTraslateCopy(lang, dispatch),
          cms.getFooter(lang, dispatch),
          cms.getDocument(lang, dispatch)
        ]);
        // Verificar si alguna de las promesas retornó error
        if (results.includes('error')) {
          setStatus('error');  // Si alguna falló, marcamos el estado como error
        } else {
          setStatus('success');  // Si todas fueron exitosas
        }
      } catch (error) {
        setStatus('error');  // Si alguna promesa lanza una excepción
      } finally {
        setTimeout(setLoading(false), 200);
  // Finaliza la carga en ambos casos
      }
    };

    fetchData();
  }, [lang]);

  const handleModal = () => {
    setModalActive(!modalActive);
  }
  
  return (
    <div className='home'>
      {loading && <div className='loading'>
        <div className="container">
          <div className="progress-bar">
            <div className="loaded"></div>
          </div>
        </div>  
      </div>} 
      <Menu handleModal = {handleModal}/>
      <Header/>
      <PackageHome/>
      <PackageBussines/>
      <Map/>
      <Contact/>
      <Footer/>
      <ModalLogin handleModal = {handleModal} modalActive={modalActive}/>
    </div>
  )
}

export default WrapperHome