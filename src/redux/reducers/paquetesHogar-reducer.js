import { createSlice } from '@reduxjs/toolkit'

const paquetesHogarSlice = createSlice({
  name: 'paquetesHogar',
  initialState:{
    loading:false,
    titulo:'',
    descripcion:'',
    error:false
  },
  reducers: {
    hogarSuccess (state, action) {
      state.titulo = action.payload.titulo;
      state.descripcion = action.payload.descripcion;
    }
  }
})

export const { hogarSuccess } = paquetesHogarSlice.actions
export default paquetesHogarSlice.reducer