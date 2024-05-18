import { createSlice } from '@reduxjs/toolkit'

const documentSlice = createSlice({
  name: 'document',
  initialState:{
    loading:false,
    documents:[],
    error:false
  },
  reducers: {
    documentsSuccess (state, action) {
      state.documents = action.payload.documents
    }
  }
})

export const { documentsSuccess  } = documentSlice.actions
export default documentSlice.reducer