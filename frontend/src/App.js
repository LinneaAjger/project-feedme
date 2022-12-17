import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import user from './reducers/user'
import recipeReducer from './reducers/recipeReducer'
import toggle from 'reducers/toggle'
import { Main } from './Main'


export const App = () => {
  const reducer = combineReducers({ 
    user: user.reducer,
    recipes: recipeReducer.reducer, 
    toggle: toggle.reducer,
  })
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
        <Main />
    </Provider>
  );
}