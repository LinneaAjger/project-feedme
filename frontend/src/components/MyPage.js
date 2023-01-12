import React, { useState, useEffect } from 'react'
import { SmallP } from './styles/GlobalStyles'
import { RecipeList, RecipeContainer } from './styles/DivStyles'
import { API_URL } from 'utils/utils'
import styled from 'styled-components/macro'
import { useNavigate, Link } from 'react-router-dom'
import LikeSaveCommentContainer from './feature components/LikeSaveCommentContainer'

const MyPage = () => {
const [myPosts, setMyPosts] = useState([])
const accessToken = localStorage.getItem('accessToken');
const userId = localStorage.getItem('userId');
console.log(userId)
const [toggle, setToggle]= useState(true)
console.log(myPosts)
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
  fetch(API_URL(toggle ? `users/${userId}/posts` : `users/${userId}/likedposts`), options)
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
        <h2 className={toggle ? 'active-h2' : ''}>Posted</h2>
      </a>
      <a onClick={() => setToggle(false) }>
      <h2 className={toggle ? '' : 'active-h2'}>Liked</h2>
      </a>
    </HeadlineDiv>
    <RecipeList>
      {myPosts.map((singleRecipe) =>
         <Link to={`/recipes/${singleRecipe._id}`} recipeId={singleRecipe._id}>
            <RecipeContainer key={singleRecipe._id}>
              <div>
                  <SmallP>user, XX ago</SmallP>
                  <h3>{singleRecipe.recipe.name}</h3>
                  <p>"{singleRecipe.recipe.description}"</p>
                  <p>Rating: {singleRecipe.recipe.userRating}/5</p>
                </div>
            <LikeSaveCommentContainer/>
            </RecipeContainer>
          </Link>)}
      
    </RecipeList>

    </>
  )
}

export default MyPage

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
