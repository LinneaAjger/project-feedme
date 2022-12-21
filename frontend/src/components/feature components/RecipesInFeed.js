import React, { useEffect } from "react";
import styled from "styled-components"
import { useDispatch, useSelector, batch } from 'react-redux'
import recipeReducer from 'reducers/recipeReducer';
import { API_URL } from 'utils/utils';
import LikeSaveCommentContainer from "./LikeSaveCommentContainer";
import { Link, useParams } from "react-router-dom";
import { RecipeContainer } from "../styles/DivStyles"
import { SmallP } from "../styles/GlobalStyles"
import { RecipeList } from "../styles/DivStyles";

const RecipesInFeed = () => {
  const accessToken = localStorage.getItem('accessToken')
  const dispatch = useDispatch()
  const recipeList = useSelector((store) => store.recipes.items)


  //Fetch all recipes
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
        console.log(data)
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
    
    
  return (
    <RecipeList>
      {recipeList.map((singleRecipe) => 
      <Link to={`/recipes/${singleRecipe._id}`} recipeId={singleRecipe._id}>
        <RecipeContainer>
          {singleRecipe.recipe && (
            <div>
              <SmallP>user, XX ago</SmallP>
              <h3>{singleRecipe.recipe.name}</h3>
              <p>"{singleRecipe.recipe.description}"</p>
            </div>
          )}
          <LikeSaveCommentContainer/>
          </RecipeContainer>
        </Link>
        )}
    </RecipeList>
    )
}
 export default RecipesInFeed


