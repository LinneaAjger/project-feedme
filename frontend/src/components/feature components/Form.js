import React, { useState } from 'react'
import styled from 'styled-components'
import { API_URL } from 'utils/utils'
import { useDispatch } from 'react-redux'
import { StyledButton } from 'components/styles/ButtonStyles'
import { SrOnly } from 'components/styles/GlobalStyles'
import { ButtonDiv } from 'components/styles/ButtonStyles'
import { StyledDiv } from 'components/styles/DivStyles'
import Tags from './Tags'

const Form = () => {
  const [recipeName, setRecipeName] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [description, setDescription] = useState('')
  const [instructions, setInstructions] = useState('')  
  const [rating, setRating] = useState(0)
  const [mealTag, setMealTag] = useState([])
  const [difficultyTag, setDifficultyTag] = useState([])
  const [timeTag, setTimeTag] = useState([])

  const dispatch = useDispatch()

  const accessToken = localStorage.getItem('accessToken');

  const onSubmit = () => {
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

  const handleRecipeName = (event) => {
    setRecipeName(event.target.value)
  }

  const handleIngredients = (event) => {
    setIngredients(event.target.value)
  }

  const handleInstructions = (event) => {
    setInstructions(event.target.value)
  }

  const handleDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleRating = (event) => {
    setRating(event.target.value)
  }

  const closeForm = () => {
    location.reload();
  }

  return (
    <FormStyledDiv>
      <CreateRecipeDiv>
        <h1>Create recipe</h1>
        <button type="button" onClick={closeForm}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L24 24M24 2L2 24" stroke="#F2C19F" stroke-width="4" stroke-linecap="round"/>
          </svg>
        </button>
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
        <TagsDiv>
          <Tags 
            h2="Meal"
            Option1="Breakfast"
            Option2="Lunch"
            Option3="Dinner"
            Option4="Snack"
            value={mealTag}
            />
          <Tags 
            h2="Difficulty"
            Option1="Easy"
            Option2="Medium"
            Option3="Difficult"
            Option4="Snack"
            value={difficultyTag}
            />
          <Tags 
            h2="Time"
            Option1="<30"
            Option2=">30"
            Option3=">60"
            Option4=">24h"
            value={timeTag}
            />
          </TagsDiv>
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
  left: 50%;                     
  z-index: 1;
  overflow-x: auto;
  width: 100vw;
  height: 100%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  padding: 0;

  input, textarea {
    max-width: 1000px;
  }

  label {
    width: 100%;
  }
  
  form {
    margin-top: 0px;
    width: 100%;
    justify-content: flex-start;
  }
  @media (min-width: 667px) {
    width: 80vw;
    height: 70vh;
    transform: translate(-50%, -70%);
  } 

  label {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 60vw;
    height: 80vh;
    transform: translate(-50%, -70%);
  }
  
  label {
    width: 80%;
  }
  `

const CreateRecipeDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-darkSand);
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;

  button {
    position: absolute;
    right: 10%;
    top: -50%;
  }
`

const AddNewRecipeButton = styled(StyledButton)`
   text-align: center;
   padding: 10px;
  `

const TagsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
  `