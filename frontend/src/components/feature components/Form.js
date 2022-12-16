import React, { useState } from 'react'
import { StyledDiv } from 'components/GlobalStyles'
import styled from 'styled-components'
import { API_URL } from 'utils/utils'
import { useDispatch } from 'react-redux'
import { StyledButton } from 'components/GlobalStyles'
import { SrOnly } from 'components/GlobalStyles'
import { ButtonDiv } from 'components/GlobalStyles'

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
      <CreateRecipeDiv>
        <h1>Create recipe</h1>
      </CreateRecipeDiv>
      <form onSubmit={onSubmit}>
        <label> <SrOnly>Name of recipe</SrOnly>
          <input 
            placeholder="My recipe is called..."
            type="text"
            value={recipeName}
            onChange={handleRecipeName} />
        </label>
        <label> <SrOnly>Description</SrOnly>
          <textarea
            placeholder="Description"
            type="text" 
            value={description} 
            onChange={handleDescription} />
        </label>
        <label> <SrOnly>Ingredients</SrOnly>
          <textarea
            placeholder="Ingredients"
            type="array"
            value={ingredients}
            onChange={handleIngredients} />
        </label>
        <label> <SrOnly>Instructions</SrOnly>
          <textarea
            placeholder="Instructions"
            type="text"
            value={instructions}
            onChange={handleInstructions} />
        </label>
        <label> <SrOnly>Rating</SrOnly>
          <input 
            placeholder="Rating, 1-5"
            type="number"
            value={rating}
            onChange={handleRating} />
        </label>
        <ButtonDiv>
          <AddNewRecipeButton type="submit">Add recipe</AddNewRecipeButton>
        </ButtonDiv>
      </form>
  </FormStyledDiv>
  )
}

export default Form

const FormStyledDiv = styled(StyledDiv)`
  position: absolute;
  top: 50%;                       
  transform: translate(0, -50%);
  z-index: 1;
  max-width: 50vw;
  overflow-x: auto;
  backdrop-filter: blur(20px);
  `

const CreateRecipeDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-darkSand);
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const AddNewRecipeButton = styled(StyledButton)`
   text-align: center;
   padding: 5px;
  `