import { createSlice } from "@reduxjs/toolkit";

const recipeReducer = createSlice({
  name: 'recipeReducer',
  initialState: {
    items: [],
    error: null,
    username: null,
    id: null
  },
  reducers: {
    setItems: (store, action) => {
      store.items = action.payload
    },
    setNewRecipe: (store, action) => {
      store.items.unshift(action.payload)
    },
    setDetailedRecipe: (store, action) => {
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
    }
  }
})

export default recipeReducer