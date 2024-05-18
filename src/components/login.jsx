import React,{ useState } from 'react'
import TraslateCopy from './traslateCopy';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import querys from '../services/indexApi';

  const Login = () => {

  const dispatch = useDispatch();
  const [form,setForm] = useState({});
  const navigate = useNavigate();
  const { lang } = useParams();
  
  const onChangeInput = ({target}) => {
    const {name,value} = target;
    setForm({
      ...form,
      [name]:value
    })
  }

  const onLogin = (e) => {
    e.preventDefault();
    const body = {
      "user": form.usuario,
      "password": form.password,  
    }
    querys.postlogin(body,dispatch).then(response => {
      navigate(`/${lang}/micuenta`)
    }).catch(error => {
      console.log('error',error)
    })
  }
  return (
   <>
     <form action="" className="Login-form" onSubmit={onLogin}>
            <div className="Login-inputContainer">
              <label htmlFor="usuario" className='Login-label'><TraslateCopy copyId="LOGIN_USER"/></label>
              <input type="text" name="usuario" id="usuario" onChange={onChangeInput} required/>
            </div>
            <div className="Login-inputContainer">
              <label htmlFor="password" className='Login-label'><TraslateCopy copyId="LOGIN_PASSWORD"/></label>
              <input type="password" name="password" id="password" onChange={onChangeInput} required/>
            </div>
            <p className='Login-p'><TraslateCopy copyId="LOGIN_RESET_PASSWORD"/></p>
            <button type='submit'><TraslateCopy copyId="LOGIN_SESION_START"/></button>
      </form>
   </>
  )
}

export default Login