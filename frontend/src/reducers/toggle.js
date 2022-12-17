import { createSlice } from "@reduxjs/toolkit"

const toggle = createSlice({
  name: 'toggle',
  initialState: {
    collapsed: false
  }, 
  reducers: {
    setCollapsed: (store, action) => {
      store.collapsed = action.payload
    }
  }
})

export default toggle