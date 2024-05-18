import { createSlice } from '@reduxjs/toolkit'

const paquetesNegocioSlice = createSlice({
  name: 'paquetesNegocio',
  initialState:{
    loading:false,
    titulo:'',
    descripcion:'',
    error:false
  },
  reducers: {
    negocioSuccess (state, action) {
      state.titulo = action.payload.titulo;
      state.descripcion = action.payload.descripcion;
    }
  }
})

export const { negocioSuccess } = paquetesNegocioSlice.actions
export default paquetesNegocioSlice.reducer