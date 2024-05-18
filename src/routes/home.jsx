import React,{ useState, useEffect }  from 'react'
import Menu from '../components/menu'
import Header from '../components/header'
import PackageBussines from '../components/packageBussines'
import PackageHome from '../components/packageHome'
import Map from '../components/map'
import Contact from '../components/contact'
import Payment from '../components/payments'
import Support from '../components/support'
import Footer from '../components/footer'
import ModalLogin from '../components/modalLogin'
import { useParams } from 'react-router-dom';
import cms  from '../services/index'
import { useDispatch } from 'react-redux';
import {Navigate} from "react-router-dom"

const WrapperHome = () => {
  const { lang } = useParams();
  const isValidLocale = lang === 'es-mx' || lang === 'en';
  return isValidLocale ? Home() : <Navigate replace to="/es-mx" />
}

const Home = () => {
  const [modalActive,setModalActive] = useState(false)
  const { lang } = useParams();
  const dispatch = useDispatch()
  
  useEffect(() => {
    cms.getSliders(lang,dispatch)
    cms.getCards(lang,dispatch)
    cms.getHogar(lang,dispatch)
    cms.getNegocio(lang,dispatch)
    cms.getPaquetes(lang,dispatch)
    cms.getTraslateCopy(lang,dispatch)
    cms.getFooter(lang,dispatch)
    cms.getDocument(lang, dispatch)
  }, [lang]);

  const handleModal = () => {
    setModalActive(!modalActive);
  }
  
  return (
    <div className='home'>
      <Menu handleModal = {handleModal}/>
      <Header/>
      <PackageHome/>
      <PackageBussines/>
      <Map/>
      <Contact/>
      <Support/>
      <Footer/>
      <ModalLogin handleModal = {handleModal} modalActive={modalActive}/>
    </div>
  )
}

export default WrapperHome