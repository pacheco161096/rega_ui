import { createSlice } from "@reduxjs/toolkit";

const InvoiceSlice = createSlice ({
    name: 'invoice',
    initialState:{
        loading:false,
        invoice:{},
        error:false
      },
      reducers: {
        invoiceSuccess (state, action) {
          state.loading = false
          state.invoice = action.payload
          state.error = false
        },
        invoiceError (state, action) {
          state.loading = false
          state.invoice = {}
          state.error = action.payload
        },
        invoiceLoading(state, action) {
          state.loading = true
        }
      }
})

export const { invoiceSuccess, invoiceError, invoiceLoading } = InvoiceSlice.actions
export default InvoiceSlice.reducer