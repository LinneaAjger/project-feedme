import React, { useEffect, useState } from 'react'
import { API_URL } from 'utils/utils'
import { useParams } from 'react-router-dom'
import RecipeDetails from './feature components/RecipeDetails'
import styled from 'styled-components/macro'

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
    <RecipeDiv>
      {recipe.map((recipeInfo) => 
      <div>
        <UserInfoDiv>
          <p>{recipeInfo.username}</p>
          <p>{`${new Date(recipeInfo.createdAt).toLocaleDateString('en-us', {  year: 'numeric', month: 'short', day: 'numeric',   hour: '2-digit',
              minute: '2-digit', hour12: false })}`}</p>
        </UserInfoDiv>
        <RecipeDetails recipeInfo={[recipeInfo.recipe]}/>
      </div>
      )}
    </RecipeDiv>
  )
}

export default Recipe

const RecipeDiv = styled.div`
  margin-top: 50px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 668px) {
      margin-top: 70px;
      width: 60%;
    }

  @media (min-width: 1024px) {
    margin-top: 70px;
    width: 50%;
  }
`

const UserInfoDiv = styled.div`
  div {
    margin-top: 10px;
    margin-left: 10px;
    box-sizing: border-box;
    
    @media (min-width: 668px) {
      margin-top: 40px;
      margin-left: 40px;
    }
  }`