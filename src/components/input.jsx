import React from 'react'

function Input({nombre, funcion, placeHolder ,requerido, type, valor}) {
  return (
    <div className="inputContainer relative">
      <input type={type} 
        className="peer bg-transparent h-12 w-full rounded-lg text-gray-200 placeholder-transparent ring-1 px-2 ring-white focus:ring-[#000a25] focus:outline-none focus:border-[#000a25] relative z-20" 
        name={nombre}
        placeholder={ placeHolder }
        required={requerido}
        value={valor}
        onChange={(e) => funcion(nombre,e.target.value)}
        />
        <label for={nombre} className="absolute cursor-text left-0 -top-3 text-sm text-white mx-1 px-1 peer-placeholder-shown:z-10 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:z-30 peer-focus:-top-3 z-30 peer-focus:text-white peer-focus:text-sm transition-all w-auto">{placeHolder}</label>
    </div>
  )
}

export default Input
