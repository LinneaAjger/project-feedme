import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, batch } from 'react-redux'
import recipeReducer from 'reducers/recipeReducer';
import { API_URL } from 'utils/utils';
import { RecipeFeed } from "../styles/DivStyles"

import RecipeCard from "./RecipeCard";

const RecipesInFeed = () => {
  const [liked, setLiked] = useState([])
  const accessToken = localStorage.getItem('accessToken')
  const dispatch = useDispatch()
  const recipeList = useSelector((store) => store.recipes.items)

  //Fetch all recipes for feed
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
      }, [liked])
  
    
  return (
    <RecipeFeed>
      <RecipeCard recipeList={recipeList} liked={liked} setLiked={setLiked}/>
    </RecipeFeed>
    )
}
 export default RecipesInFeed