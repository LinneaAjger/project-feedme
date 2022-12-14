import React, { useEffect } from "react";
import SaveIcon from '../../icons/Vector_8.png'
import LikeIcon from '../../icons/Vector_21.png'
import styled from "styled-components"
import { useDispatch, useSelector, batch } from 'react-redux'
import recipeReducer from 'reducers/recipeReducer';
import { API_URL } from 'utils/utils';
import { ButtonWithIcon } from "components/GlobalStyles";

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
            <>
              <SmallP>user, XX ago</SmallP>
              <h3>{singleRecipe.recipe.name}</h3>
              <p>"{singleRecipe.recipe.description}"</p>
            </>
          )}
          
          <LikeContainer>
            <ButtonWithIcon selectedIcon={`url(${SaveIcon})`} />
            <ButtonWithIcon selectedIcon={`url(${LikeIcon})`} />
          </LikeContainer>
        </RecipeContainer> 
        )}
    </>
    )
}

export default RecipesInFeed

const RecipeContainer = styled.div`
  background-color: var(--color-beige);
  padding: 30px;
  border-radius: 30px;
  position: relative;
  margin-top: 10px;
`

const SmallP = styled.p`
  font-size: 14px;
`

const LikeContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;                      
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  border-left: 2px solid var(--color-darkSand);
  padding: 1vw;
`