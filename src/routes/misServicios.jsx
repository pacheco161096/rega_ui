import React,{useEffect,useState} from 'react';
import Soporte from '../routes/soporte'
import TraslateCopy from '../components/traslateCopy'
import { useSelector } from 'react-redux';
import Facturas from '../routes/facturas';
import querys from '../services/indexApi';
import { useDispatch } from 'react-redux';
import { DateTime,Interval } from 'luxon';
import axios from 'axios'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../components/checkoutForm'
import Loading from '../components/loading'

const stripePromise = loadStripe("pk_test_51MgUlTFyBKymnnM6dGT3LSsU9XWYyuza2ZnZKyDekBKQDPyy0BRAcSAoFxFkd7fb43Ni73wQZplHOBVVF9xntvyP00CcnuijYK")

const MisServicios = () => {
  const data = useSelector(state => state.login.user);
  const dataInvoice = useSelector(state => state.InvoiceSlice.invoice);
  const dispatch = useDispatch();
  const [date,setDate] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    querys.getInvoice(null,dispatch,data.token,data.id);
    querys.getSupport(data.id, dispatch, data.token)
    getDiasRestan();
    setTimeout(() => {
      setLoading(false)
    },1200)
  }, [])
  
  const getDiasRestan = () => {
    const now = DateTime.now(); //Obtenemos la fecha actual
    const later = DateTime.local(now.c.year, now.c.month + 1 ,1 ); // Obtenemos el año acutal, el mes actual  + 1 para obener la fecha proxima de corte
    const i = Interval.fromDateTimes(now, later); // Con Interval calculamos el tiempo que hay de la fecha inicial a la proxima
    setDate( Math.ceil(i.length('days')) ) // Obetenemos cuantos dias faltan y usamos la fucion Math.ceil para redondear la entero mas proximo
  }

  const functionApi = async () => {
    const price = dataInvoice.saldo;
    const priceRepair = Number.parseFloat(price).toFixed(2); 
    const priceString = priceRepair.toString();
    await  axios({
      method: 'post',
      url: 'http://localhost:3000/invoices/create-payment',
      data: {
        price: dataInvoice.saldo
      },
      headers: {
        'Authorization': 'beare ' + data.token
      }
    })
    .then(res => {
     setClientSecret(res.data.clientSecret)
    })
   }

  const appearance = {
    theme : 'flat'
  }

  const options = {
    clientSecret: dataInvoice.idInvoiceStripe,
    appearance
  }

  const handlePaymentBtn = () => {
    const elementsPlant = document.querySelectorAll('.plan');
    const form = document.querySelector('#payment-form');
    const elementDetail = document.querySelector('.misServicios-detailsPayment');
    const desc = document.querySelector('.misServicios-conRecargo')
    const button = document.querySelector('.misServicios-btn')
    elementsPlant.forEach(element => element.style.transition = "ease-in 0.5s");
    elementsPlant.forEach(element => element.style.opacity = "-100%");
    elementsPlant.forEach(element => element.style.opacity = "0");
    if (desc) {
      desc.style.display = 'none';
    }
    setTimeout(() => {
      elementsPlant.forEach(element => element.style.display  = 'none');
      form.style.display = 'flex';
      elementDetail.style.display = 'flex';
      button.style.display = 'none';
    }, 600);
  }

  return (
    <div className='misServicios'>
      { loading && 
        <div className='misServicios-loading'>
          <Loading />
        </div>
      }
      <div className='misServicios-container'>
        <h3 className='misServicios-h3'><TraslateCopy copyId="DASHBOARD_MIPAQUETE_TITLE"/></h3>
        <div className='misServicios-section'>
          <div className="misServicios-miPaquete">
            <div className="misServicios-titlePlan">
              <h4 className="misServicios-h4 misServicios-bold"><TraslateCopy copyId="DASHBOARD_MIPAQUETE_PLAN"/> <span className='misServicios-blue'>{data.plan.titulo}</span> </h4>
              <div className="misServicios-diasCorte">
                <i className="fa-thin fa-calendar-days misServicios-calendario"></i>
                <div className='misServicios-infoCorte'>
                  <p className="misServicios-p">Restan</p>
                  <p className="misServicios-p misServicios-bold">{date}  días para corte </p>
                </div>
              </div>
            </div>
            <div className='misServicios-infoPaquete'>
              <div className="misServicios-pagarAhora">
                <div className="misServicios-detailsPayment">
                  <div className="misServicios-titleDetail">
                    Detalle de tus servicios contratados 
                  </div>
                  <div className="misServicios-detail">
                    <div className="misServicios-containerDetail">
                      <div className="misServicios-velocity">{ data.plan.velocidad } <span>Mbs</span></div>
                      <div className="misServicios-descripcion">Paquete { data.plan.titulo }</div>
                    </div>
                    <div className="misServicios-detailPayment">${ data.plan.precio + data.plan.recargo }</div>
                  </div>
                  {
                    dataInvoice.oportuno && 
                    <div className="misServicios-detail">
                      <div className="misServicios-containerDetail">
                        <div className="misServicios-desc"><i className="fa-regular fa-tag"></i></div>
                        <div className="misServicios-descripcion">Descuento por pago oportuno</div>
                      </div>
                      <div className="misServicios-detailPayment">-${ data.plan.recargo }</div>
                    </div>
                  }
                  {
                    dataInvoice.saldopendiente > 0 && 
                    <div className="misServicios-detail">
                      <div className="misServicios-containerDetail">
                        <div className="misServicios-desc"><i className="fa-regular fa-circle-info"></i></div>
                        <div className="misServicios-descripcion">Saldo pendiente</div>
                      </div>
                      <div className="misServicios-detailPayment">+ ${ dataInvoice.saldopendiente }</div>
                    </div>
                  }
                </div>
                <div className="misServicios-containerPayment">
                  <div className="misServicios-total">
                    <h2 className="misServicios-h2 misServicios-bold"><TraslateCopy copyId="DASHBOARD_MIPAQUETE_TOTAL"/>:</h2>
                    <div className="misServicios-saldo">
                      {
                        dataInvoice.oportuno === true ? <span className='misServicios-conRecargo'>${dataInvoice.saldo + dataInvoice.recargo}</span> : ""
                      }
                      <h5 className="misServicios-h5">${ dataInvoice.estatus ==='true' ? '0.00' : dataInvoice.saldo }</h5> 
                    </div>
                  </div>
                  {
                    <div className="misServicios-statusCuenta">
                      <p className="misServicios-p">Tu servicio se encuentra: {data.active === 'true' ? <span className='misServicios-activo'>activo</span> : <span className='misServicios-inactivo' >inactivo</span>}</p>
                      <div className={data.active === 'true' ? 'misServicios-circleGreen' : 'misServicios-circleRed' }></div>
                    </div>
                  }
                  <button disabled={ dataInvoice.estatus ==='true' ? true : false } className="misServicios-btn" onClick={(e) => handlePaymentBtn(e)}><TraslateCopy copyId="DASHBOARD_BTN_PAGAR"/></button>
                </div>
              </div>
              <div className="misServicios-plan">
                <div className='packageHome-paquete-velocidad plan'>
                    <div className='packageHome-paquete-velocidadTitle '>
                      <div>Hogar</div>
                      <div className='packageHome-paquete-velocidadTitle-mbps'>{data?.plan?.velocidad}</div>
                      <div>Mbps</div>
                    </div>
                    <div className='packageHome-paquete-velocidadTitle-svg'>
                      <svg className='packageHome-paquete-velocidadContainer' strokeDashoffset={210-(data?.plan?.velocidad * 5)} width="200px" height="150px">
                      <path className="packageHome-paquete-circleBackground" d="  M 100, 100 m 75, 0 a 75,75 0 1,0 -150,0 "/>
                      <path className="packageHome-paquete-circleProgress" d="  M 100, 100 m 75, 0 a 75,75 0 1,0 -150,0 "/>
                    </svg>
                    </div>
                  </div>
                  <div className="misServicios-planTipo plan">{data?.plan?.categoria}</div>
                  <div className="misServicios-caracteristicas plan">
                    <ul className='misServicios-ul'>
                      { data?.plan?.caracteristicas.map((item, i) => (
                        <li className='misServicios-li' key={ i }>{item.caracteristica}</li>
                      )
                      )}
                    </ul>
                  </div>
                  {
                    dataInvoice.idInvoiceStripe && <Elements options={options} stripe={stripePromise}>
                      <CheckoutForm />
                    </Elements>
                  }
              </div>
          </div>
          </div>
          
        </div>
      </div>
      
      <div className='misServicios-container'>
        <h3 className='misServicios-h3'><TraslateCopy copyId="DASHBOARD_MICUENTA_TITLE"/></h3>
        <div className='misServicios-section'>
          <div className='misServicios-icono'><i className="fa-solid fa-user"></i></div>
          <div className='misServicios-info'> 
          <div className="misServicios-infoRow"><span className='misServicios-editar'><div className='misServicios-editarBtn'><TraslateCopy copyId="DASHBOARD_BTN_EDITAR"/></div></span></div>
            <div className="misServicios-infoRow">
              <div className="misServicios-item">
                <h6 className='misServicios-h6'><TraslateCopy copyId="DASHBOARD_MICUENTA_NOMBRE"/>:</h6>
                <span className='misServicios-span'>{data.name +" " +data.lastname}</span>
              </div>
              <div className="misServicios-item">
                <h6 className='misServicios-h6'><TraslateCopy copyId="DASHBOARD_MICUENTA_TELEFONO"/>:</h6>
                <span className='misServicios-span'>{data.phone}</span>
              </div>
              <div className="misServicios-item">
                <h6 className='misServicios-h6'><TraslateCopy copyId="DASHBOARD_MICUENTA_CUENTA"/>:</h6>
                <span className='misServicios-span'>{data.id}</span>
              </div>
              <div className="misServicios-item">
                <h6 className='misServicios-h6'><TraslateCopy copyId="DASHBOARD_MICUENTA_EMAIL"/>:</h6>
                <span className='misServicios-span'>{data.email}</span>
              </div>
            </div>
            <div className="misServicios-infoRow">
              <div className="misServicios-item">
                <h6 className='misServicios-h6'><TraslateCopy copyId="DASHBOARD_MICUENTA_ESTADO"/>:</h6>
                <span className='misServicios-span'>{data.estado}</span>
              </div>
              <div className="misServicios-item">
                <h6 className='misServicios-h6'><TraslateCopy copyId="DASHBOARD_MICUENTA_CIUDAD"/>:</h6>
                <span className='misServicios-span'>{data.ciudad}</span>
              </div>
              <div className="misServicios-item">
                <h6 className='misServicios-h6'><TraslateCopy copyId="DASHBOARD_MICUENTA_CALLE"/>:</h6>
                <span className='misServicios-span'>{data.calle +" "+"#"+data.noexterior}</span>
              </div>
              <div className="misServicios-item">
                <h6 className='misServicios-h6'><TraslateCopy copyId="DASHBOARD_MICUENTA_COLONIA"/>:</h6>
                <span className='misServicios-span'>{data.colonia}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='misServicios-container'>
        <h3 className='misServicios-h3'><TraslateCopy copyId="DASHBOARD_MIFACTURA_TITLE"/></h3>
        <div className='misServicios-section'>
          <Facturas/>
        </div>
      </div>

      <div className='misServicios-container'>
        <h3 className='misServicios-h3'>Soporte</h3>
        <div className='misServicios-section'>
          <Soporte/>
        </div>
      </div>
    </div>
  )
}

export default MisServicios