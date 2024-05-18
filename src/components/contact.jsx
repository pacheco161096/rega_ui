import React,{useState} from 'react';
import TraslateCopy from './traslateCopy';
import querys from '../services/indexApi';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Input from '../components/input'
import Familia from '../assets/familia.png'

const Contact = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.contactSlice.contact);
  const [dataUser, setdataUser] = useState({})

  const [form,setForm] = useState({
    name:"",
    email:"",
    phone:""
  });
  const [message,setMessage] = useState();

  const handleOnChange = ({target})=> {
    const {name,value} = target;
    setForm({
      ...form,
      [name]:value
    })
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
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
  }

  const handleInput = (name,value) => {
    setdataUser({...dataUser, [name]: value})
  }


  return (
    <section className='mb-10 relative' id='contacto'>
      <div className="mx-auto max-w-7xl p-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-3">
        <div className='md:w-1/2 md:min-h-full flex items-center justify-center'>
          <h1 className='text-3xl md:text-5xl text-white font-extrabold text-wrapper hyphens-none'><TraslateCopy copyId="HOME_FORM_TITLE"/></h1>
        </div>
        <div className='md:w-1/2 p-10 flex flex-col justify-center bg-gradient-to-t from-[#000a25] to-[#40caf4] rounded-lg w-full'>
         <form action="" className='grid grid-cols-1 mt-5 gap-5' onSubmit={handleSubmit}>
          <Input 
            nombre='nombre' 
            funcion={handleInput} 
            valor={dataUser?.nombre} 
            requerido={true} 
            placeHolder={<TraslateCopy copyId="HOME_FORM_LABEL_NAME"/>} 
            type='text'
          />
          <Input 
            nombre='correo' 
            funcion={handleInput} 
            valor={dataUser?.correo} 
            requerido={true} 
            placeHolder={<TraslateCopy copyId="HOME_FORM_LABEL_EMAIL"/>} 
            type='email'
          />
          <Input 
            nombre='Telefono' 
            funcion={handleInput} 
            valor={dataUser?.telefono} 
            requerido={true} 
            placeHolder={<TraslateCopy copyId="HOME_FORM_LABEL_PHONE"/>} 
            type='phone'
          />
          <input type='submit' className='text-white w-full bg-[#000a25] rounded-lg p-4 font-bold' value="Enviar"/>
         </form>
         {data.sendEmail === true && <div className='mt-5 font-bold text-base text-white flex gap-2 items-center'>
         <i className="fa-solid fa-circle-check"></i> <p>{message}</p></div>}
        </div>
      </div>
      </section>
  );
}

export default Contact;
