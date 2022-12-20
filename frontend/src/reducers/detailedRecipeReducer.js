import { createSlice } from "@reduxjs/toolkit";

const detailedRecipeReducer = createSlice({
  name: 'detailedRecipeReducer',
  initialState: {
    items: [],
    error: null,
    username: null,
    id: null,
  },
  reducers: {
    setItems: (store, action) => {
    store.items = action.payload
    },
    setError: (store, action) => {
    store.error = action.payload
    },
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setId: (store, action) => {
      store.id = action.payload
    },
  }
})

export default detailedRecipeReducer