import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';


const Aside = ({handleMenu,menu,handleTitle}) => {
  
  
  return (
    <div className={menu ? 'Aside Aside-close' : 'Aside'}>
      
      <div className="Aside-header">
        <div className="Aside-logo"><img src={logo} alt="" /></div>
        <div className="Aside-close" onClick={handleMenu}>x</div>
      </div>

      <ul className='Aside-ul'>
        <Link to="" onClick={()=>handleTitle('Mis Servicios')}><li className="Aside-li"><i className="fa-solid fa-house-user"></i><span className='Aside-span'>Mis Servicios</span></li></Link>
        <Link to="perfil" onClick={()=>handleTitle('Mi Perfil')}><li className="Aside-li"><i className="fa-solid fa-user"></i><span className='Aside-span'>Mi Perfil</span></li></Link>
        <Link to="facturas" onClick={()=>handleTitle('Mis estados de cuenta')}><li className="Aside-li"><i className="fa-sharp fa-solid fa-money-check-dollar-pen"></i><span className='Aside-span'>Facturas</span></li></Link>
        <Link to="soporte" onClick={()=>handleTitle('Centro de ayuda')}><li className="Aside-li"><i className="fa-solid fa-headset"></i><span className='Aside-span'>Soporte</span></li></Link>
        <li className="Aside-li" ><i className="fa-solid fa-arrow-right-from-bracket"></i><span className='Aside-span'>Cerrar sesión</span></li>
      </ul>
      
    </div>
  )
}

export default Aside