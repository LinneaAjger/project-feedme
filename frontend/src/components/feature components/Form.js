import React, { useState } from 'react'

const Form = () => {
  const [recipeName, setRecipeName] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [description, setDescription] = useState('')
  const [instructions, setInstructions] = useState('')
  // const [rating, setRating] = useState(0)

  const accessToken = localStorage.getItem('accessToken');

  const onSubmit = (event) => {
    event.preventDefault()
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": accessToken
      },
      body: JSON.stringify({recipe: message})
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

  return (
    <form onSubmit={onSubmit}>
    <label> Name of recipe:
      <input type="text" value={recipeName} onChange={handleRecipeName} />
    </label>
    <label> Ingredients:
      <input type="array" value={ingredients} onChange={handleIngredients} />
    </label>
    <label> Instructions:
      <input type="text" value={instructions} onChange={handleInstructions} />
    </label>
    {/* <label> Rating:
      <input type="text" value={ingredients} onChange={handleIngredients} />
    </label> */}
    <button type="submit">Add recipe</button>
  </form>
  )
}

export default Form