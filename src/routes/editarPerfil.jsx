import React,{useState} from 'react'
import { useSelector } from 'react-redux';

const EditarPerfil = () => {
  const data = useSelector(state => state.login.user);
  const [input,setInput] = useState({
    name:data.name,
    email:data.email,
    phone:data.phone,
    estado:data.estado,
    ciudad:data.ciudad,
    calle:data.calle,
    noexterior:data.noexterior,
    nointerior:data.nointerior,
    colonia:data.colonia,
    codigopostal:data.codigopostal
  })
  const handleChange = (e)  => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div className='perfil'>
      <div className="perfil-container">
        <h3 className="perfil-h3">Información de perfil</h3>
        <form action="">
            <div className="perfil-inputs">
              <div className="perfil-contentInput">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" className="perfil-input"  placeholder={input.name}  onChange={handleChange}/>
              </div>
              <div className="perfil-contentInput">
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" className="perfil-input" />
              </div>
            
            </div>
            <div className="perfil-inputs">
              <div className="perfil-contentInput">
                <label htmlFor="email">Correo:</label>
                <input type="email" id="email" className="perfil-input" placeholder={input.email} onChange={handleChange}/>
              </div>
              <div className="perfil-contentInput">
                <label htmlFor="tel">Telefono:</label>
                <input type="tel" id="phone" className="perfil-input" placeholder={input.phone}  onChange={handleChange}/>
              </div>
            </div>
            <div className="perfil-contentBtn">
              <input type="submit" value="Guardar Cambios" className='perfil-btn'/>
            </div>
            
          </form>
      </div>
      <div className="perfil-container">
        <h3 className="perfil-h3">Cambiar contraseña</h3>
        <form action="">
            <div className="perfil-inputs">
              <div className="perfil-contentInput">
                <label htmlFor="name">Contraseña actual:</label>
                <input type="password" id="name" className="perfil-input" />
              </div>
            </div>
            <div className="perfil-inputs">
              <div className="perfil-contentInput">
                <label htmlFor="email">Contraseña nueva:</label>
                <input type="password" id="email" className="perfil-input" />
              </div>
              <div className="perfil-contentInput">
                <label htmlFor="tel">Confirmar contraseña:</label>
                <input type="password" id="tel" className="perfil-input" />
              </div>
            </div>
            <div className="perfil-contentBtn">
              <input type="submit" value="Guardar Cambios" className='perfil-btn'/>
            </div>
          </form>
      </div>
      <div className="perfil-container">
        <h3 className="perfil-h3">Datos de facturación</h3>
        <form action="">
            <div className="perfil-inputs">
              <div className="perfil-contentInput">
                <label htmlFor="estado">Estado:</label>
                <input type="text" id="estado" className="perfil-input" placeholder={input.estado}  onChange={handleChange}/>
              </div>
              <div className="perfil-contentInput">
                <label htmlFor="ciudad">Ciudad:</label>
                <input type="text" id="ciudad" className="perfil-input" placeholder={input.ciudad}  onChange={handleChange}/>
              </div>
            </div>
            <div className="perfil-inputs">
              <div className="perfil-contentInput">
                <label htmlFor="calle">Calle:</label>
                <input type="text" id="calle" className="perfil-input" placeholder={input.calle}  onChange={handleChange}/>
              </div>
            </div>
            <div className="perfil-inputs">
              <div className="perfil-contentInput">
                <label htmlFor="exterior">No. exterior:</label>
                <input type="text" id="exterior" className="perfil-input" placeholder={input.noexterior}  onChange={handleChange}/>
              </div>
              <div className="perfil-contentInput">
                <label htmlFor="interior">No. interior:</label>
                <input type="text" id="interior" className="perfil-input" placeholder={input.nointerior}  onChange={handleChange}/>
              </div>
              <div className="perfil-contentInput">
                <label htmlFor="colonia">Colonia:</label>
                <input type="text" id="colonia" className="perfil-input" placeholder={input.colonia}  onChange={handleChange}/>
              </div>
              <div className="perfil-contentInput">
                <label htmlFor="postal">Código postal:</label>
                <input type="text" id="postal" className="perfil-input" placeholder={input.codigopostal}  onChange={handleChange}/>
              </div>
            </div>
            <div className="perfil-contentBtn">
              <input type="submit" value="Guardar Cambios" className='perfil-btn'/>
            </div>
          </form>
      </div>
    </div>
    
  )
}

export default EditarPerfil