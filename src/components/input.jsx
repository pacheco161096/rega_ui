import React from 'react'

function Input({nombre, funcion, placeHolder ,requerido, type, valor, clase}) {
  return (
    <div className={`inputContainer relative w-full ${clase}`}>
      <input type={type} 
        className="peer bg-transparent h-12 w-full rounded-lg text-gray-500 placeholder-transparent ring-1 px-2 ring-gray-200 focus:ring-gray-400 focus:outline-none focus:border-[#000a25] relative z-20" 
        name={nombre}
        placeholder={ placeHolder }
        required={requerido}
        value={valor}
        onChange={(e) => funcion(nombre,e.target.value)}
        />
        <label htmlFor={nombre} className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 mx-1 px-1 peer-placeholder-shown:z-10 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:z-30 peer-focus:-top-3 z-30 peer-focus:text-gray-500 peer-focus:bg-[#f5f5f7] peer-focus:text-sm transition-all w-auto">{placeHolder}</label>
    </div>
  )
}

export default Input
