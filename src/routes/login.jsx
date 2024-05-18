import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/logo.png'
import Input from '../components/input'

function Login(props) {
  const dispatch = useDispatch();
  const data = useSelector(state => state.contactSlice.contact);
  const [dataUser, setdataUser] = useState({})

  const [form,setForm] = useState({
    name:"",
    email:"",
    phone:""
  });
  const [message,setMessage] = useState();
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
    <section>
      <div className="mx-auto max-w-7xl p-6 lg:px-8 flex flex-col gap-4">
        <div className="w-full flex justify-start items-start">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="w-32" src={ logo } alt="" />
          </a>
        </div>
        <div className='md:h-screen h-80 justify-center items-center relative'>
          <div className='flex justify-center flex-col gap-3 md:absolute left-0 bottom-0 md:mb-[20%] w-full md:w-1/2 z-10'>
            <div className='flex flex-col'>
              <h1 className='text-4xl text-[#40caf4] font-bold'>Bienvenido a tu Espacio</h1>
              <span className='text-white text-sm'>Inicia sesión para gestionar tu cuenta. Revisa tus próximas facturas, consulta recibos anteriores y levanta tickets de soporte de manera rápida y sencilla. Mantén el control total de tus servicios de telecomunicaciones desde un solo lugar.</span>
            </div>
            <form action="" className='grid grid-cols-1 mt-5 gap-5 w-full md:w-2/3' onSubmit={handleSubmit}>
              <Input 
                nombre='Email' 
                funcion={handleInput} 
                valor={dataUser?.email} 
                requerido={true} 
                placeHolder='Email'
                type='email'
              />
              <Input 
                nombre='password' 
                funcion={handleInput} 
                valor={dataUser?.password} 
                requerido={true} 
                placeHolder='Contraseña'
                type='password'
              />
              
              <input type='submit' className='text-white w-full rounded-lg p-4 font-bold border-2 border-[#40caf4]' value="Enviar"/>
            </form>
          </div>
          <div className='w-full  absolute bottom-0 left z-0 bg-gradient-to-t md:bg-gradient-to-r from-[#000a25] from-5% min-h-full'></div>
          <img src="../assets/login.jpg" alt="" className='object-cover hidden md:flex'/>
        </div>
      </div>
    </section>
  )
}

export default Login
