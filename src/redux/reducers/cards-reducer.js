import { createSlice } from '@reduxjs/toolkit'

const cardsSlice = createSlice({
  name: 'cards',
  initialState:{
    loading:false,
    cards:[],
    error:false
  },
  reducers: {
    cardsSuccess (state, action) {
      state.cards = action.payload.cards
    }
  }
})

export const { cardsSuccess } = cardsSlice.actions
export default cardsSlice.reducer