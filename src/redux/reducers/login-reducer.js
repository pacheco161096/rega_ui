import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice ({
    name: 'login',
    initialState:{
        loading:false,
        user:[],
        error:false
      },
      reducers: {
        loginSuccess (state, action) {
          state.loading = false
          state.user = action.payload
          state.error = false
        },
        loginOut(state,action){
          state.user = []
        },
        loginError (state, action) {
          state.loading = false
          state.user = []
          state.error = action.payload
        },
        loginLoading(state, action) {
          state.loading = true
        }
      }
})

export const { loginSuccess, loginOut, loginError, loginLoading } = loginSlice.actions
export default loginSlice.reducer