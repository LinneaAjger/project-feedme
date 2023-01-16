import React, { useState, useEffect } from 'react'
import { API_URL } from 'utils/utils';
import { StyledNonTransparentDiv } from "components/styles/DivStyles";
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom';

const RecentlyLiked = () => {
const accessToken = localStorage.getItem('accessToken');
const userId = localStorage.getItem('userId');
const [posts, setPosts] = useState([])


const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": accessToken
  }
}

useEffect(() => {
  fetch(API_URL(`users/${userId}`), options)
  .then((response) => response.json())
  .then((data) => {
    setPosts(data.response.likedRecipes.reverse());
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, [userId]);
console.log(posts)

if (posts.length > 0) {

    return (
        <MarginTopDiv>
            <h2>Recently liked recipes</h2>
            {posts.map((singleRecipe) => 
                <Link to={`/recipes/${singleRecipe._id}`} recipeId={singleRecipe._id}>
                {singleRecipe.recipe.name}</Link>
            )}
        </MarginTopDiv>
    )
} else {
    return (
        <MarginTopDiv>
            <h2>Recently liked recipes</h2>
            <p>You have not liked any recipes yet</p>
        </MarginTopDiv>
    )
}

    
}

export default RecentlyLiked

const MarginTopDiv = styled(StyledNonTransparentDiv)`
    margin-top: 160px;
    height: fit-content;
    min-width: 250px;
    max-width: 400px;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 1rem;
    }

    a {
        cursor: pointer;
        margin-top: 5px;

            &:hover {
            color: var(--color-vividBlue);
            }
    }
`