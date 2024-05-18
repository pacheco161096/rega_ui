import { createSlice } from "@reduxjs/toolkit";

const supportSlice = createSlice ({
    name: 'support',
    initialState:{
        loading:false,
        support:[],
        error:false
      },
      reducers: {
        supportSuccess (state, action) {
          state.loading = false
          state.support = action.payload
          state.error = false
        },
        supportError (state, action) {
          state.loading = false
          state.support = []
          state.error = action.payload
        },
        supportLoading(state, action) {
          state.loading = true
        }
      }
})

export const { supportSuccess, supportError, supportLoading } = supportSlice.actions
export default supportSlice.reducer