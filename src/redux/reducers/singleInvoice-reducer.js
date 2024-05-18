import { createSlice } from "@reduxjs/toolkit";

const SingleInvoiceSlice = createSlice ({
    name: 'SingleInvoice',
    initialState:{
        loading:false,
        SingleInvoice:{},
        error:false
      },
      reducers: {
        SingleInvoiceSuccess (state, action) {
          state.loading = false
          state.SingleInvoice = action.payload
          state.error = false
        },
        SingleInvoiceError (state, action) {
          state.loading = false
          state.SingleInvoice = {}
          state.error = action.payload
        },
        SingleInvoiceLoading(state, action) {
          state.loading = true
        }
      }
})

export const { SingleInvoiceSuccess, SingleInvoiceError, SingleInvoiceLoading } = SingleInvoiceSlice.actions
export default SingleInvoiceSlice.reducer