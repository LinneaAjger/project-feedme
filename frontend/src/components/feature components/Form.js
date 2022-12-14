import React, { useState } from 'react'
import { StyledDiv } from 'components/GlobalStyles'
import styled from 'styled-components'
import { API_URL } from 'utils/utils'
import { useDispatch } from 'react-redux'

const Form = () => {
  const [recipeName, setRecipeName] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [description, setDescription] = useState('')
  const [instructions, setInstructions] = useState('')
  const [rating, setRating] = useState(0)

  const dispatch = useDispatch()

  const accessToken = localStorage.getItem('accessToken');

  const onSubmit = (event) => {
    event.preventDefault()
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": accessToken
      },
      body: JSON.stringify({recipe: {
        name: recipeName,
        description,
        ingredients,
        instructions,
        userRating: rating
      }})
    }
    fetch(API_URL("recipes"), options)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch(recipes.actions.setNewRecipe(data.response))
      })
  }

  const handleRecipeName = () => {
    setRecipeName(event.target.value)
  }

  const handleIngredients = () => {
    setIngredients(event.target.value)
  }

  const handleInstructions = () => {
    setInstructions(event.target.value)
  }

  const handleDescription = () => {
    setDescription(event.target.value)
  }

  const handleRating = () => {
    setRating(event.target.value)
  }

  return (
    <FormStyledDiv>
      <h1>Create recipe</h1>
      <form onSubmit={onSubmit}>
        <label> Name of recipe:
          <input type="text" value={recipeName} onChange={handleRecipeName} />
        </label>
        <label> description:
          <input type="text" value={description} onChange={handleDescription} />
        </label>
        <label> Ingredients:
          <input type="array" value={ingredients} onChange={handleIngredients} />
        </label>
        <label> Instructions:
          <input type="text" value={instructions} onChange={handleInstructions} />
        </label>
        <label> Rating:
          <input type="number" value={rating} onChange={handleRating} />
        </label>
        {/* <label> Rating:
          <input type="text" value={ingredients} onChange={handleIngredients} />
        </label> */}
        <button type="submit">Add recipe</button>
      </form>
  </FormStyledDiv>
  )
}

export default Form

const FormStyledDiv = styled(StyledDiv)`
  position: absolute;
  top: 50%;                       
  transform: translate(0, -50%);
  z-index: 100;
  `