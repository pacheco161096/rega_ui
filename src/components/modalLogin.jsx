import React from 'react'
import { useSelector } from 'react-redux';
import TraslateCopy from './traslateCopy';
import Login from './login';

const ModalLogin = ({handleModal,modalActive}) => {
  const dataLogin = useSelector(state => state.login);

  return (
    <div  className={ modalActive === true ? 'modalLogin' : 'modalLoginHidden' }>
      <div className="modalLogin-main">
        <div className="modalLogin-header">
          <i className="fa-solid fa-x modalLogin-close" onClick={() => handleModal()}></i>
        </div>
        <div className="modalLogin-container">
          <div className="modalLogin-circle"><i className="fa-solid fa-user"></i></div>
          <h1 className="Login-h1"><TraslateCopy copyId="LOGIN_WELCOME"/></h1>
          {dataLogin.loading && <div>cargando.....</div>}
          <Login/>
        </div>
      </div>
    </div>
  )
}

export default ModalLogin