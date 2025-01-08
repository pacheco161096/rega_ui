import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import querys from '../services/indexApi';
import { useDispatch } from 'react-redux';
import moment from 'moment'

const Soporte = () => {

  const data = useSelector(state => state.login.user);
  const tickets = useSelector(state => state.supportSlice.support);
  const dispatch = useDispatch();
  const  [mensaje,setMensaje] = useState("")

  const handleChange = ({target}) => {
    const {value} = target
    setMensaje(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      "nombre": data.name,
      "idcliente":data.id,
      "email": data.email,
      "phone": data.phone,
      "msg":mensaje,
      "estatus": "nuevo",
      "date": moment()
    }
    querys.postSupport(body,dispatch,data.token);
  }

  return (
    <div className='soporte'>
      <div className="soporte-container">
        <div className="soporte-contacto">
          <h3 className="soporte-h3">Dejamos a tu disposición los siguientes medios de contacto.</h3>
          <div className="soporte-containerCards">
            <div className="soporte-card">
              <i className="fa-brands fa-whatsapp soporte-icon"></i>
              <p className="soporte-p">Whatsapp</p>
            </div>
            <div className="soporte-card">
              <i className="fa-solid fa-phone soporte-icon"></i>
              <p className="soporte-p">322 180 85 74</p>
            </div>
            <div className="soporte-card">
              <i className="fa-solid fa-envelope soporte-icon"></i>
              <p className="soporte-p">Correo</p>
            </div>
          </div>
        </div>
        <div className="soporte-formulario">
          <h3 className="soporte-h3">Cuentanos en que podemos ayudarte</h3>
          <form action="" onSubmit={handleSubmit}>
            <div className="soporte-inputs">
              <div className="soporte-contentInput">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" className="soporte-input" value={data.name}/>
              </div>
              <div className="soporte-contentInput">
                <label htmlFor="nCliente">Numero de cliente:</label>
                <input type="text" id="nCliente" className="soporte-input" value={data.id}/>
              </div>
            
            </div>
            <div className="soporte-inputs">
              <div className="soporte-contentInput">
                <label htmlFor="email">Correo:</label>
                <input type="email" id="email" className="soporte-input" value={data.email}/>
              </div>
              <div className="soporte-contentInput">
                <label htmlFor="tel">Telefono:</label>
                <input type="tel" id="tel" className="soporte-input" value={data.phone}/>
              </div>
            </div>
            <label htmlFor="reporte">Reporte:</label>
            <textarea name="mensaje" id="reporte" cols="30" rows="10" className='soporte-textarea' onChange={handleChange}></textarea>
            <div className='soporte-formulario_Button'><input type="submit" className='soporte-btn'/></div>
          </form>
        </div>
        {tickets.length > 0 &&
          <div>
            <h3 className="soporte-h3">Mis tickets</h3>
            <div>
              <div className='soporte-ticketTitle'>
                <div>Fecha de alta</div>
                <div>Descripción</div>
                <div>Estatus</div>
              </div>
              {tickets.map((ticket, i) => {
                return(
                  <div className='soporte-ticket' key={ i }>
                    <div>{moment(ticket.fecha).format('DD-MM-YYYY')}</div>
                    <div>{ticket.msg}</div>
                    <div>{ticket.estatus}</div>
                  </div>
                )
              })}
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Soporte