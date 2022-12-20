import React, { useEffect, useState } from 'react'
import { API_URL } from 'utils/utils'
import { useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import detailedRecipeReducer from 'reducers/detailedRecipeReducer'

const Recipe = ({ recipeId }) => {
  const [recipe, setRecipe] = useState([])
  const accessToken = localStorage.getItem('accessToken')
  const params = useParams()
  // const dispatch = useDispatch()
  // console.log(params)
  // console.log(params.recipeId)
  // const recipe = useSelector((store) => store.detailedRecipes.items)
  // console.log(recipe)

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
        console.log(data, recipe)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
      }, [])

  return (
    <div>
      Recipe name
      {recipe.map((singleRecipe) => {
        <p>{singleRecipe.recipe.name}</p>
      })}
    </div>
  )
}

export default Recipe