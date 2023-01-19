import React, { useState, useEffect } from 'react'
import { SmallDiv, TagContainer, StyledSvg  } from './styles/GlobalStyles'
import { RecipeList, RecipeContainer } from './styles/DivStyles'
import { API_URL } from 'utils/utils'
import { useNavigate, Link } from 'react-router-dom'
import TagsVisual from './feature components/TagsVisual'
import { LikeContainer } from './styles/DivStyles'
import { PostsToggle, HeadlineDiv } from './styles/DivStyles'
import styled from 'styled-components/macro'
import { RecipeFeed } from './styles/DivStyles'
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';
import RecipeCard from './feature components/RecipeCard'

// const myImage = cld.image('docs/models'); 

// Resize to 250 x 250 pixels using the 'fill' crop mode.


const myImage = new CloudinaryImage('cld-sample-5', {cloudName: 'dmitjxc0w'}).resize(fill().width(200).height(150));

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

