import React, { useState, useEffect } from 'react'
import { StyledDiv } from './styles/DivStyles'
import { API_URL } from 'utils/utils'
import styled from 'styled-components/macro'
import { useNavigate } from 'react-router-dom'
import { Innerwrapper } from './styles/GlobalStyles'

const UserPage = () => {
const [myPosts, setMyPosts] = useState([])
const accessToken = localStorage.getItem('accessToken');
const userId = localStorage.getItem('userId');
const [toggle, setToggle]= useState(true)

const navigate = useNavigate()

useEffect(() => {
  if(!accessToken) {
    navigate("/login") 
  }   
}, [accessToken])

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": accessToken
  }
}

useEffect(() => {
  fetch(API_URL(toggle ? userId : 'savedPosts'), options)
  .then((response) => response.json())
  .then((data) => {
    setMyPosts(data.response);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, [toggle]);


  return (
    <>
    <HeadlineDiv>
      <a onClick={() => setToggle(true)}>
        <h2 className={toggle ? 'active-h2' : ''}>Posted recipes</h2>
      </a>
      <a onClick={() => setToggle(false) }>
      <h2 className={toggle ? '' : 'active-h2'}>Saved recipes</h2>
      </a>
    </HeadlineDiv>

      {myPosts.map((singleRecipe) =>
      <RecipeCard>
        <h3>{singleRecipe.recipe.name}</h3>
        <h4>"{singleRecipe.recipe.description}"</h4>
        <p>Rating: {singleRecipe.recipe.userRating}/5</p>
      
      </RecipeCard>)}

    </>
  )
}

export default UserPage

const HeadlineDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 5%;
  
  a {
    cursor: pointer;
  }

  .active-h2 {
    color: var(--color-beige);
    background-color: var(--color-darkSand);
  }
  h2 {
    font-size: 1rem;
    border-radius: 20px;
    padding: 10px 20px;
    color: var(--color-darkGrey);
  }
`

export const RecipeCard = styled.div`
  border-radius: 30px;
  width: 80%;
  min-height: 160px;
  padding: 30px 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-beige);
  box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;
  margin-top: 5%;

  h3 {
    text-transform: uppercase;
  }
  h4 {
    font-weight: 400;
  }

  @media (min-width: 667px) {
    width: 80%;
    padding: 30px 30px;

  } 
  @media (min-width: 1024px) {
    max-width: 600px;
    padding: 30px 30px;

  }
  `