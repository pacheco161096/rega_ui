import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import TraslateCopy from '../components/traslateCopy'
import querys from '../services/indexApi';
import { useDispatch } from 'react-redux';
import {getYear,getMonth} from '../hooks/fechas.js';

const Facturas = () => {
  const dataSingleInvoice = useSelector(state => state.SingleInvoiceSlice.SingleInvoice);

  const dispatch = useDispatch();
  const dataUser = useSelector(state => state.login.user);
  const [month,setMonth] = useState(getMonth())
  const months = [
    {
      value:"1" ,name:"enero"
    },
    {
      value:"2" ,name:"febrero"
    },
    {
      value:"3" ,name:"marzo"
    },
    {
      value:"4", name:"abril"
    },
    {
      value:"5" ,name:"mayo"
    },
    {
      value:"6", name:"junio"
    },
    {
      value:"7",name:"julio"
    },
    {
      value:"8", name:"agosto"
    },
    {
      value:"9", name:"septiembre"
    },
    {
      value:"10", name:"octubre"
    },
    {
      value:"11" ,name:"noviembre"
    },
    {
      value:"12", name:"diciembre"
    }
  ]
  
  const handleChange = (event) => {
    setMonth(event.target.value)
  } 
const handleMonth = () => {}

  useEffect(() => {
    const year = getYear();
    querys.getSingleInvoice(null,dispatch,dataUser.token,dataUser.id,month,year);
  }, [month])

  return (
    <div className='facturas'>
      <div className="facturas-container">
        <div className='facturas-select'>
          <form action="">
              <select name="Enero" id="" onChange={handleChange} value={month} >
                {
                  
                }
                <option value="1" name="enero">Enero</option>
                <option value="2" name="febrero">Febrero</option>
                <option value="3" name="marzo">Marzo</option>
                <option value="4" name="abril">Abril</option>
                <option value="5" name="mayo">Mayo</option>
                <option value="6" name="junio">Junio</option>
                <option value="7" name="julio">Julio</option>
                <option value="8" name="agosto">Agosto</option>
                <option value="9" name="septiembre">Septiembre</option>
                <option value="10" name="octubre">Octubre</option>
                <option value="11" name="noviembre">Noviembre</option>
                <option value="12" name="diciembre">Diciembre</option>
              </select>
          </form>
        </div>
        <div className="facturas-datos">
          <h3 className="facturas-h3">{dataUser.name +" " +dataUser.lastname}</h3>
          <div className="facturas-domicilio">
            <p className="facturas-p">{dataUser.calle +" " +"#"+dataUser.noexterior}</p>
            <p className="facturas-p">{dataUser.colonia}</p>
            <p className="facturas-p">{dataUser.ciudad + ","+dataUser.estado}</p>
            <p className="facturas-p">C.P. {dataUser.codigopostal +","+ dataUser.pais}</p>
          </div>
        </div>
        <div className="facturas-cuenta">
         <h3 className="facturas-h3"><TraslateCopy copyId="DASHBOARD_MIFACTURA_ESTADOCUENTA"/></h3>
         <div className="facturas-row">
            <p className="facturas-pbold"><TraslateCopy copyId="DASHBOARD_MIFACTURA_SERVICIO"/>:</p>
            <span className="facturas-span">{dataUser.plan.titulo}</span>
         </div>
         <div className="facturas-row">
            <p className="facturas-pbold"><TraslateCopy copyId="DASHBOARD_MIFACTURA_PERIODO"/>:</p>
            <span className="facturas-span">{month}</span>
         </div>
         <div className="facturas-row">
            <p className="facturas-pbold"><TraslateCopy copyId="DASHBOARD_MIFACTURA_FECHALIMITE"/>:</p>
            <span className="facturas-span">20 de enero del 2023</span>
         </div>
         <div className="facturas-row">
            <p className="facturas-pbold"><TraslateCopy copyId="DASHBOARD_MIFACTURA_SALDOANTERIOR"/>:</p>
            <span className="facturas-span">${dataSingleInvoice.saldopendiente}</span>
         </div>
         <div className="facturas-row">
            <p className="facturas-pbold"><TraslateCopy copyId="DASHBOARD_MIFACTURA_SALDOACTUAL"/>:</p>
            <span className="facturas-span">${dataSingleInvoice.saldo}</span>
         </div>
         {
          dataSingleInvoice.oportuno && 
          <div className="facturas-row">
            <p className="facturas-pbold"><TraslateCopy copyId="DASHBOARD_MIFACTURA_PAGOOPORTUNO"/>:</p>
            <span className="facturas-span">-${dataSingleInvoice.recargo}</span>
          </div>
         }
         <div className="facturas-row">
            <p className="facturas-pbold"><TraslateCopy copyId="DASHBOARD_MIFACTURA_TOTALPAGAR"/>:</p>
            <span className="facturas-span">${dataSingleInvoice.saldototal}</span>
         </div>
        </div>
        <div className="facturas-pagar">
          <div className="facturas-botones">   
            <div className="facturas-btn facturas-download">DESCARGAR FACTURA</div>
            <div className="facturas-btn">PAGAR AHORA</div>
          </div>
          <div className="facturas-consulta"> <p>Consulta <a className='facturas-link'>aquí</a>  los lugares donde puedes pagar.</p> </div>
        </div>
      </div>
    </div>
  )
}

export default Facturas