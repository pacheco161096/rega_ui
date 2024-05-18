import { createSlice } from '@reduxjs/toolkit'

const sliderSlice = createSlice({
  name: 'slider',
  initialState:{
    loading:false,
    sliders:[],
    error:false
  },
  reducers: {
    sliderSuccess (state, action) {
      state.sliders = action.payload.sliders
    }
  }
})

export const { sliderSuccess} = sliderSlice.actions
export default sliderSlice.reducer