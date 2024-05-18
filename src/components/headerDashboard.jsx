import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginOut } from "../redux/reducers/login-reducer";
import { useNavigate, useParams  } from 'react-router-dom';
import TraslateCopy from './traslateCopy';

const HeaderDashboard = () => {
  const data = useSelector(state => state.login.user);
  const [activeMenu,setActiveMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { lang } = useParams();

  const logout = () => {
    dispatch(loginOut([]))
    navigate(`/${lang}/`)
  }
  const handleGoHome = () => {
    navigate(`/${lang}/`)
  }

  const handleSubMenu = () =>{
      setActiveMenu(!activeMenu)
  }

  return (
    <div className='headerDashboard'>
     <i className="fa-solid fa-house" onClick={handleGoHome}></i>
      <h2 className='headerDashboard-h2'><TraslateCopy copyId="DASHBOARD_HEADER_TITLE"/></h2>
      <div className="headerDashboard-profile">
        <div className="headerDashboard-notification">
          <div className="headerDashboard-imgProfile"><i className="fa-solid fa-user"></i></div>
          <div className="headerDashboard-nameProfile" onClick={handleSubMenu}><p className='headerDashboard-p'>{data.name}</p> <span className={ activeMenu ? 'headerDashboard-span active' : 'headerDashboard-span'}>&gt;</span></div> 
        </div>
        <div  className={ activeMenu ? 'headerDashboard-logout' : ' headerDashboard-hidden '} onClick={logout}><i className="fa-solid fa-arrow-right-from-bracket"></i><span className='headerDashboard-btnClose'>Cerrar sesion</span></div>
      </div>
      
    </div>
  )
}

export default HeaderDashboard

