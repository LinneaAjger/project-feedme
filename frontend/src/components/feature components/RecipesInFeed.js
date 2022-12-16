import React, { useEffect } from "react";
import styled from "styled-components"
import { useDispatch, useSelector, batch } from 'react-redux'
import recipeReducer from 'reducers/recipeReducer';
import { API_URL } from 'utils/utils';
import LikeSaveCommentContainer from "./LikeSaveCommentContainer";

const RecipesInFeed = () => {
  const accessToken = localStorage.getItem('accessToken')
  const dispatch = useDispatch()
  const recipeList = useSelector((store) => store.recipes.items)

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
    <>
      {recipeList.map((singleRecipe) => 
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
        )}
    </>
    )
}

export default RecipesInFeed

const RecipeContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  background-color: var(--color-beige);
  margin-top: 10px;
  width: 100%;
  height: 20vh;
  overflow-x: auto;

  div {
    padding: 10px;
  }

  @media (min-width: 668px) and (max-width: 1024px) {
    div {
    padding: 20px;
    }
    }

    @media (min-width: 1025px) {
      div {
        padding: 30px;
      }
    }
`

const SmallP = styled.p`
  font-size: 14px;
`
