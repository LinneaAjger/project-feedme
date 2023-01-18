import React, { useEffect, useState } from 'react'
import { API_URL } from 'utils/utils'
import { useParams, Link } from 'react-router-dom'
import RecipeDetails from './feature components/RecipeDetails'
import styled from 'styled-components/macro'
import { SmallDiv } from './styles/GlobalStyles'

const Recipe = () => {
  const [recipe, setRecipe] = useState([])
  const accessToken = localStorage.getItem('accessToken')
  const params = useParams()

  // Fetching single recipes by Id
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
      })
      .catch((error) => {
        console.error('Error:', error)
      })
      }, [])

  return (
    <RecipeDiv>
      {recipe.map((recipeInfo) => 
      <RecipeInfoContainer key={recipeInfo._id}>
        <UserInfoDiv>
        <Link to={`/users/${recipeInfo.userId}`}>{recipeInfo.username}</Link>
          <p>{`${new Date(recipeInfo.createdAt).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false })}`}
          </p>
        </UserInfoDiv>
        <RecipeDetails recipeInfo={[recipeInfo.recipe]}/>
      </RecipeInfoContainer>
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
      width: 90%;
    }

  @media (min-width: 1024px) {
    margin-top: 100px;
    width: 60%;
  }
`

const RecipeInfoContainer = styled.div`
  margin-bottom: 100px;

  @media (min-width: 1025px) {
    margin-bottom: 200px;

  }
`

const UserInfoDiv = styled(SmallDiv)`
    font-size: 1rem;
    
    @media (min-width: 668px) {
      margin-top: 40px;
    }
  `

