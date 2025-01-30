import React,{useState} from 'react';
import TraslateCopy from './traslateCopy';
import querys from '../services/indexApi';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Input from '../components/input'
import { sendWhatsAppMessage } from '../utils/functions/general';

const Contact = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.contactSlice.contact);
  const [dataUser, setdataUser] = useState({})
  const [Modal, setModal] = useState(false)
  const [numberInput, setnumberInput] = useState(1)

  const [form,setForm] = useState({
    name:"",
    email:"",
    phone:""
  });
  const [message,setMessage] = useState();

  /* const handleOnChange = ({target})=> {
    const {name,value} = target;
    setForm({
      ...form,
      [name]:value
    })
  } */

  const handleSubmit = (event) =>{
    event.preventDefault();
    if (numberInput === 3) {
      const body = {
        "name": dataUser.nombre,
        "email": dataUser.correo,
        "phone": dataUser.telefono  
      }
      if( isNaN(form.phone) ){
          return setMessage("El campo de teléfono debe ser numerico");
      }
      querys.postContact(body,dispatch)
        .then(response => {
            const {sendEmail} = response;
            if (sendEmail) {
              setMessage(<TraslateCopy copyId="HOME_FORM_MESSAGE"/>)
            }
        })
  
      setForm({
        ...form,
        name:"",
        email:"",
        phone:""
      }) 
    } else {
      setnumberInput(numberInput+1)
    }
  }

  const handleInput = (name,value) => {
    setdataUser({...dataUser, [name]: value})
  }

  const modalCostoExtra = (action) => {
    if (action) {
      setModal(true);
      document.body.style.overflow = 'hidden';
    } else {
      setModal(false);
      document.body.style.overflow = 'visible';
    }
  }

  return (
    <section className='mb-10 relative' id='contacto'>
      <div className="mx-auto max-w-7xl lg:px-8 relative p-6">
        <div className='flex flex-col md:flex-row items-center gap-5 justify-center'>
          <div className='md:w-1/2 w-full flex relative aspect-square'>
            <div className='absolute w-[70%] md:w-[55%] p-5 text-white flex flex-col gap-10 h-full justify-center z-20'>
              <h1 className='text-2xl'>
              <TraslateCopy copyId="HOME_BANNER_CONNECT_NOW" />
              </h1>
              <div className='border rounded-2xl w-[180px] p-2 text-center cursor-pointer' onClick={ () => sendWhatsAppMessage('GENERIC') }>
                <TraslateCopy copyId="HOME_BANNER_CONNECT_NOW_BTN" />
              </div>
            </div>
            <img src='./assets/contacto-phone.jpg' className='w-full rounded-3xl' alt="" />
            <img src='./assets/contacto.jpg' className='w-[200px] md:w-[30%] md:h-[500px] object-cover rounded-lg md:absolute md:-top-[15%] md:bottom-0 md:right-[10%] hidden md:visible' alt='' />
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl z-10"></div>
          </div>
          <div className='md:w-1/2 w-full flex relative'>
            <div className='absolute w-[70%] md:w-[60%] p-5 text-white flex flex-col gap-10 h-full justify-center z-20'>
              <h1 className='text-2xl'>
                <TraslateCopy copyId="HOME_BANNER_TECNICAL_SOLUTION" />
              </h1>
              <div className='border rounded-2xl w-[180px] p-2 text-center cursor-pointer' onClick={ () => sendWhatsAppMessage('SUPPORT') }>
                <TraslateCopy copyId="HOME_BANNER_TECNICAL_SOLUTION_BTN" />
              </div>
            </div>
            <img src='./assets/support.jpg' className='w-full rounded-3xl' alt="" />
            <img src='./assets/support.jpg' className='w-[200px] md:w-[30%] md:h-[500px] object-cover rounded-lg md:absolute md:-top-[15%] md:bottom-0 md:right-[10%] hidden md:visible' alt='' />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl z-10"></div>
          </div>
        </div>
      </div>
      {Modal && <div className='fixed top-0 left-0 z-50 w-full h-screen bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center transition-opacity duration-300 '>
        <div className='w-[300px] md:min-w-[750px] bg-white rounded-3xl'>
          <div className='p-5 flex justify-end'>
            <button className='cursor-pointer bg-gray-200 font-bold w-[40px] aspect-square rounded-full' onClick={() => modalCostoExtra(false)}>
              x
            </button>
          </div>
          <div className='px-10 pb-10 flex md:flex-row w-full items-center gap-5 flex-col'>
            <div className='flex flex-col gap-5 md:w-1/2'>
              <h1 className='text-2xl font-semibold w-[90%]'>
                ¡Déjanos tus datos y te conectamos con el mejor plan!
              </h1>
              <span>
                Si estás interesado en nuestros servicios o tienes alguna pregunta, completa el formulario a continuación. Nos pondremos en contacto contigo lo antes posible. ¡Esperamos poder atenderte pronto!
              </span>
              <form action="" className='flex flex-col gap-5 w-full' onSubmit={handleSubmit}>
                {numberInput===1 &&<Input 
                  nombre='nombre' 
                  funcion={handleInput} 
                  valor={dataUser?.nombre} 
                  requerido={true} 
                  placeHolder={<TraslateCopy copyId="HOME_FORM_LABEL_NAME"/>} 
                  type='text'
                />}
                {numberInput===2 && <Input 
                  nombre='correo' 
                  funcion={handleInput} 
                  valor={dataUser?.correo} 
                  requerido={true} 
                  placeHolder={<TraslateCopy copyId="HOME_FORM_LABEL_EMAIL"/>} 
                  type='email'
                />}
                {numberInput===3 && <Input 
                  nombre='Telefono' 
                  funcion={handleInput} 
                  valor={dataUser?.telefono} 
                  requerido={true} 
                  placeHolder={<TraslateCopy copyId="HOME_FORM_LABEL_PHONE"/>} 
                  type='phone'
                />}
                <button type='submit' className='text-[#0076DF] w-full border-[#0076DF] border rounded-lg p-4 cursor-pointer button-modal-contact'>
                  <TraslateCopy copyId="HOME_MODAL_BUTTON_NEXT"/>
                </button>
                {data.sendEmail === true && <div className='mt-5 font-bold text-base text-white flex gap-2 items-center'>
                <i className="fa-solid fa-circle-check"></i> <p>{message}</p></div>}
              </form>
            </div>
            <div className='flex justify-center items-center'>
              <img src='./assets/contact-modal.jpg' className='h-[450px] w-[300px] object-cover rounded-2xl' alt="" />
            </div>
          </div>
        </div>
      </div>}
      </section>
  );
}

export default Contact;
