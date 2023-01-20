import React, { useState, useEffect } from 'react'
import { API_URL } from 'utils/utils'
import { useNavigate, Link } from 'react-router-dom'
import { PostsToggle, HeadlineDiv } from './styles/DivStyles'
import { RecipeFeed } from './styles/DivStyles'
import RecipeCard from './feature components/RecipeCard'

const MyPage = () => {
const [myPosts, setMyPosts] = useState([])
const accessToken = localStorage.getItem('accessToken');
const userId = localStorage.getItem('userId');
const [toggle, setToggle]= useState(false)
const [liked, setLiked] = useState([])

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
 // fetch the posted or liked recipes depending on the toggle 
useEffect(() => {
  fetch(API_URL(toggle ? `users/${userId}/posts` : `users/${userId}`), options)
  .then((response) => response.json())
  .then((data) => {
    setMyPosts(toggle ? data.response.reverse() : data.response.likedRecipes.reverse());
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, [toggle]);


  return (
    <RecipeFeed>
      <HeadlineDiv>
      <div>
        <h1>my recipes</h1>
      </div>
      <PostsToggle>
        <a onClick={() => setToggle(true)}>
          <h2 className={toggle ? 'active-h2' : ''}>Posted</h2>
        </a>
        <a onClick={() => setToggle(false) }>
        <h2 className={toggle ? '' : 'active-h2'}>Liked</h2>
        </a>
      </PostsToggle>
      </HeadlineDiv>
      <RecipeCard recipeList={myPosts} />
    </RecipeFeed>
  )
}

export default MyPage

