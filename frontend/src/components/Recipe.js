import React, { useEffect, useState } from 'react'
import { API_URL } from 'utils/utils'
import { useParams } from 'react-router-dom'
import RecipeDetails from './feature components/RecipeDetails'
// import { useDispatch, useSelector } from 'react-redux'
// import detailedRecipeReducer from 'reducers/detailedRecipeReducer'

const Recipe = ({ recipeId }) => {
  const [recipe, setRecipe] = useState([])
  const accessToken = localStorage.getItem('accessToken')
  const params = useParams()

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": accessToken
      }
    }
    fetch(API_URL(`recipes/${params.recipeId}`), options)
      .then(res => res.json())
      .then(data => {
        setRecipe(data.response)
        console.log(data.response)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
      }, [])

console.log(recipe)

  return (
    <div>
      {recipe.map((recipeInfo) => 
      <>
        <p>{recipeInfo.user}</p>
        <p>{recipeInfo.createdAt}</p>
        <RecipeDetails recipeInfo={[recipeInfo.recipe]}/>
      </>
      )}
    </div>
  )
}

export default Recipe