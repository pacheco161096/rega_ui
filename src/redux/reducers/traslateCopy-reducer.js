import {createSlice} from '@reduxjs/toolkit'

const traslateCopySlice = createSlice({
    name: 'traslateCopy',
    initialState:{
      loading:false,
      traslatecopy:[],
      error:false
    },
    reducers: {
      traslateCopySuccess (state, action) {
        state.traslatecopy = action.payload.traslateCopy
      }
    }
})

  export const { traslateCopySuccess } = traslateCopySlice.actions
  export default traslateCopySlice.reducer