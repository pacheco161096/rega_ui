import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: 'contact',
    initialState:{
        loading:false,
        contact:[],
        error:false
      },
      reducers: {
        contactSuccess (state, action) {
          state.loading = false
          state.contact = action.payload
          state.error = false
        },
        contactError (state, action) {
          state.loading = false
          state.contact = []
          state.error = action.payload
        },
        contactLoading(state, action) {
          state.loading = true
        }
      }
})

export const {contactSuccess,contactError,contactLoading} = contactSlice.actions
export default contactSlice.reducer