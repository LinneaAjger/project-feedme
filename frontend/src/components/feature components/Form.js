import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { API_URL } from 'utils/utils'
import { StyledButton } from 'components/styles/ButtonStyles'
import { ButtonDiv } from 'components/styles/ButtonStyles'
import { StyledDiv } from 'components/styles/DivStyles'
import Input from './Input'
import Checkbox from './Checkbox'

export const MealArray = [{ value: 'breakfast', title: 'Breakfast' }, { value: 'lunch', title: 'Lunch' }, { value: 'dinner', title: 'Dinner' }, { value: 'snack', title: 'Snack' }]
export const PreferencesArray = [{ value: 'vegan', title: 'Vegan' }, { value: 'vegetarian', title: 'Vegetarian' }, { value: 'Gluten free', title: 'Gluten free' }, { value: 'lactose free', title: 'Lactose free' }]
export const TimeArray = [{ value: '<30min', title: '<30min' }, { value: '>30min', title: '>30min' }, { value: '>1h', title: '>1h' }]

const Form = ({ setCollapsed }) => {
  const [recipeName, setRecipeName] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [description, setDescription] = useState('')
  const [instructions, setInstructions] = useState('')
  const [rating, setRating] = useState(0)
  const [tags, setTags] = useState({})

  const accessToken = localStorage.getItem('accessToken');

  const onSubmit = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": accessToken
      },
      body: JSON.stringify({
        recipe: {
          name: recipeName,
          description,
          ingredients,
          instructions,
          userRating: rating,
          tags: convertTagsToArray(tags)
        }
      })
    }
    fetch(API_URL("recipes"), options)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch(recipes.actions.setNewRecipe(data.response))
      })
  }

  const convertTagsToArray = (tagsObject) => {
    const tagsArray = [];
    Object.keys(tagsObject).forEach(key => {
      if (tagsObject[key] === true) {
        tagsArray.push(key);
      }
    })
    return tagsArray;
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
    setCollapsed(true)
  }

  const handleOnChange = (event) => {
    const key = event.target.name;
    const currentValue = tags[key];
    setTags((tags) => ({
      ...tags,
      [key]: !currentValue
    }));
  }
  
  return (
    <FormStyledDiv>
      <CreateRecipeDiv>
        <h1>Create recipe</h1>
        <button type="button" onClick={closeForm}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L24 24M24 2L2 24" stroke="#F2C19F" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </button>
      </CreateRecipeDiv>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          srOnly="Name of recipe"
          placeholder="My recipe is called..."
          value={recipeName}
          onChange={handleRecipeName}
        />
        <Input
          type="text"
          srOnly="Description"
          placeholder="Description"
          value={description}
          onChange={handleDescription}
        />
        <Input
          type="text"
          srOnly="Ingredients"
          placeholder="Ingredients"
          value={ingredients}
          onChange={handleIngredients}
        />
        <Input
          type="text"
          srOnly="Instructions"
          placeholder="Instructions"
          value={instructions}
          onChange={handleInstructions}
        />
        <Input
          type="number"
          srOnly="Rating"
          placeholder="Rating 1-5"
          value={rating}
          onChange={handleRating}
        />
        <TagsDiv>
          <Tag>
            <h2>Meal</h2>
            <div>
              {MealArray.map(({ title, value }) => <Checkbox key={value} title={title} value={value} handleOnChange={handleOnChange} tags={tags} />)}
            </div>
          </Tag>
          <Tag>
            <h2>Preferences</h2>
            <div>
              {PreferencesArray.map(({ title, value }) => <Checkbox key={value} title={title} value={value} handleOnChange={handleOnChange} tags={tags} />)}
            </div>
          </Tag>
          <Tag>
            <h2>Time</h2>
            <div>
              {TimeArray.map(({ title, value }) => <Checkbox key={value} title={title} value={value} handleOnChange={handleOnChange} tags={tags} />)}
            </div>
          </Tag>
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
  position: fixed;
  top: 50%;  
  left: 50%;                     
  overflow-x: auto;
  width: 100vw;
  height: 100%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  z-index: 99;
  padding-top: 50px;

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
    height: 80vh;

    label {
    width: 70%;
    }
  } 

  @media (min-width: 1024px) {
    width: 100vw;
    height: 80vh;
    max-width: 900px;

    label {
    width: 80%;
    }
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
  justify-content: space-around  
  `

const Tag = styled.div`
margin: 20px;

h2 {
    font-size: 16px;
    text-align: center;
}
div {
    display: grid; 
    grid-template-columns: 1fr 1fr;

    label {
        width: 100%;
        justify-self: start;
        font-size: 14px;
        /* display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        justify-content: center; */
        
        input {
          vertical-align: middle;
        }
    }
}
`