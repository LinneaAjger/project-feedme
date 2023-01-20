import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SmallDiv, TagContainer, StyledSvg  } from '../styles//GlobalStyles'
import { RecipeList, RecipeContainer, LikeContainer, DescriptionImagesTagsDiv, DescriptionDiv, ImageDiv } from '../styles/DivStyles'
import TagsVisual from './TagsVisual'
import BREAKFAST from "../media/BREAKFAST.jpg"
import LUNCH from "../media/LUNCH.jpg"
import SNACK from "../media/SNACK.jpg"

const RecipeCard = ({recipeList}) => {
 const userId = localStorage.getItem('userId');
 const [liked, setLiked] = useState([])

 console.log(recipeList)
 return (
  <RecipeList>
   {recipeList.map((singleRecipe) =>
     <RecipeContainer key={singleRecipe._id}>
     {singleRecipe.recipe && (
       <DescriptionImagesTagsDiv>
        <SmallDiv>
           <Link to={`/users/${singleRecipe.userId}`}>{singleRecipe.username}, {`${new Date(singleRecipe.createdAt).toLocaleDateString('en-us', {  year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false })}`}</Link>
        </SmallDiv>
        <Link to={`/recipes/${singleRecipe._id}`}>
        <ImageDiv>
            {singleRecipe.recipe.tags.includes('breakfast') && (
              <img src={BREAKFAST} />
            )}
            {singleRecipe.recipe.tags.includes('lunch' || 'dinner') && (
              <img src={LUNCH} />
            )}
            {singleRecipe.recipe.tags.includes('snack') && (
              <img src={SNACK} />
            )}
            </ImageDiv>
            <DescriptionDiv>
            <h3>{singleRecipe.recipe.name}</h3>
            <p>"{singleRecipe.recipe.description}"</p>
            </DescriptionDiv>
        </Link>
            <TagContainer>
            {singleRecipe.recipe.tags.map((tag, index) => {
              return <TagsVisual tag={tag} key={index} /> 
            })}
            </TagContainer>
        
       </DescriptionImagesTagsDiv>
     )}
     <LikeContainer>
     {singleRecipe.userId === userId &&
       <button type="button" onClick={() => onDeleteClick(singleRecipe._id)} recipeid={singleRecipe._id}>
         <StyledSvg 
           width="10" 
           height="15" 
           viewBox="0 0 26 26"
           xmlns="http://www.w3.org/2000/svg">
           <path d="M2 2L24 24M24 2L2 24" strokeLinecap="round"/>
         </StyledSvg>
       </button>
       }
       <button type="button" onClick={() => onLikeClick(singleRecipe._id)} className={liked ? "liked" : "notLiked"}>
           <StyledSvg 
               width="17" 
               height="17" 
               viewBox="0 0 17 17" 
               fill="none" 
               xmlns="http://www.w3.org/2000/svg">
               <path d="M4.70578 7C7.14502 6.31101 6.42099 6.58643 7.00497 3.67711C7.06033 3.40131 7.00032 3.11252 6.88451 2.85616C6.70516 2.45912 6.52778 1.82495 6.8731 1.28872C7.4224 0.435745 10.2508 1.45384 10.0089 4.59507V5.24826C10.0089 5.80054 10.4566 6.24826 11.0089 6.24826H14.4347C14.665 6.24826 14.89 6.32691 15.0648 6.47692C16.1354 7.39542 16.3903 7.97571 15.2821 8.95345C15.924 9.95769 16.0948 10.4074 15.2821 11.4001C15.9239 12.5448 16.1746 12.7107 15.2821 13.913C15.8238 14.6375 15.5494 15.0549 15.0844 15.5581C14.832 15.8312 14.4473 15.9414 14.0842 15.861C11.3869 15.2638 6.53999 14.6426 5.37015 13.6L5.23293 14.4289C5.15302 14.9115 4.7356 15.2655 4.24636 15.2655H2.3424C1.80667 15.2655 1.3661 14.8433 1.3433 14.3081L1.03835 7.14871C1.01656 6.63699 1.38493 6.19152 1.89164 6.11684L3.35621 5.90099C3.76841 5.84024 4.17508 6.04143 4.37689 6.40594L4.70578 7Z" fill="#FFEEE3"/>
               <path d="M5.37015 13.6L4.70578 7M5.37015 13.6C6.53999 14.6426 11.3869 15.2638 14.0842 15.861C14.4473 15.9414 14.832 15.8312 15.0844 15.5581C15.5494 15.0549 15.8238 14.6375 15.2821 13.913M5.37015 13.6L5.23293 14.4289C5.15302 14.9115 4.7356 15.2655 4.24636 15.2655H2.3424C1.80667 15.2655 1.3661 14.8433 1.3433 14.3081L1.03835 7.14871C1.01656 6.63699 1.38493 6.19153 1.89164 6.11684L3.35621 5.90099C3.76841 5.84024 4.17508 6.04143 4.37689 6.40594L4.70578 7M4.70578 7C7.14502 6.31101 6.42099 6.58643 7.00497 3.67711C7.06033 3.40131 7.00032 3.11252 6.88451 2.85616C6.70516 2.45912 6.52778 1.82495 6.8731 1.28872C7.4224 0.435745 10.2508 1.45384 10.0089 4.59507V5.24826C10.0089 5.80054 10.4566 6.24826 11.0089 6.24826H14.4347C14.665 6.24826 14.89 6.32691 15.0648 6.47692C16.1354 7.39542 16.3903 7.97571 15.2821 8.95345M15.2821 8.95345H13.3425M15.2821 8.95345C15.924 9.95769 16.0948 10.4074 15.2821 11.4001M15.2821 11.4001H12.9894M15.2821 11.4001C15.9239 12.5448 16.1746 12.7107 15.2821 13.913M15.2821 13.913H12.9894" stroke="black" strokeWidth="0.7"/>
           </StyledSvg>
       </button>
       <SmallDiv>{singleRecipe.likes} likes</SmallDiv>
       </LikeContainer>           
     </RecipeContainer>
    )}
 </RecipeList>
  )
}

export default RecipeCard