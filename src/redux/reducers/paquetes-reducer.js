import { createSlice } from '@reduxjs/toolkit'

const paquetesSlice = createSlice({
  name: 'cards',
  initialState:{
    loading:false,
    paquetes:[],
    error:false
  },
  reducers: {
    paquetesSuccess (state, action) {
      state.paquetes = action.payload.paquetes
    }
  }
})

export const { paquetesSuccess  } = paquetesSlice.actions
export default paquetesSlice.reducer