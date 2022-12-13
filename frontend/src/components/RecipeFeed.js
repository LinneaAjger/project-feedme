import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import recipeReducer from 'reducers/recipeReducer';
import { useDispatch, useSelector, batch } from 'react-redux';
import { API_URL } from 'utils/utils';
import Form from './feature components/Form';

const RecipeFeed = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');

  const dispatch = useDispatch()

  const recipeList = useSelector((store) => store.recipes.items)
  console.log(recipeList)

  useEffect(() => {
    if(!accessToken) {
      navigate("/login") 
    }   
  }, [accessToken])

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": accessToken
      }
    }
    fetch(API_URL("recipes"), options)
      .then(res => res.json())
      .then(data => {
        if(data.success) {
          batch (() => {
            dispatch(recipeReducer.actions.setItems(data.response))
            dispatch(recipeReducer.actions.setError(null))
          })
        } else {
          batch(() => {
            dispatch(recipeReducer.actions.setItems([]))
            dispatch(recipeReducer.actions.setError(data.response))
          })
        }
      })
      .catch((error => {
        console.error('Error:', error)
      }))
  }, [])


  const logOut = () => {
    localStorage.removeItem('accessToken')
    navigate("/login")
  }

  return (
    <div>
      {accessToken && (
        <>
        <Form />
        <h2>RecipeFeed</h2>
        {recipeList.map((singleRecipe) => 
        <div>
          <h3>{singleRecipe.recipe.name}</h3>
          <p>{singleRecipe.recipe.description}</p>
        </div>
        )}
        <button onClick={logOut}>Sign out</button>
        </>)}
    </div>
  )
}

export default RecipeFeed