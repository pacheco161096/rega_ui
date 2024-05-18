import { createSlice } from '@reduxjs/toolkit'

const footerSlice = createSlice({
  name: 'cards',
  initialState:{
    loading:false,
    sections:[],
    error:false
  },
  reducers: {
    footerSuccess (state, action) {
      state.sections = action.payload.sections
    }
  }
})

export const { footerSuccess  } = footerSlice.actions
export default footerSlice.reducer