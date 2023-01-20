import React from "react";
import styled from "styled-components/macro";
import { StyledNonTransparentDiv } from "components/styles/DivStyles";
import { Tag } from "./TagsVisual";
import { ImageDiv } from "components/styles/DivStyles";
import BREAKFAST from "../media/BREAKFAST.jpg"
import LUNCH from "../media/LUNCH.jpg"
import SNACK from "../media/SNACK.jpg"
import FOOD from "../media/FOOD.jpg"
import DINNER from "../media/DINNER.jpg"

const RecipeDetails = ({ recipeInfo }) => {

    // Turning ingredients string into array (to be able to display the ingredients in a list). The string is split at each comma.
    const IngredientsIntoList = recipeInfo.map((recipe) => {
        return (
            recipe.ingredients[0].split(',')
        )
    })

    // Turning the instructions string into an array (to be able to display the ingredients in a list). The string is split at each line-break.
    const InstructionsIntoList = recipeInfo.map((recipe) => {
        return (
            recipe.instructions[0].split('\n')
        )
    })

    return (
        <>
            {recipeInfo.map((recipe) => {
                return (
                <MainRecipeDiv key={recipe._id}>
                    <BigImageDiv>
                    {recipe.tags.includes('breakfast') ? <img src={BREAKFAST} /> : recipe.tags.includes('lunch') ? <img src={LUNCH} /> : recipe.tags.includes('dinner') ? <img src={DINNER} /> : recipe.tags.includes('snack') ? <img src={SNACK} /> :  <img src={FOOD} />}                
                    </BigImageDiv>
                    <div>
                        <h1>{recipe.name}</h1>
                        <p>"{recipe.description}"</p>
                        <TagDiv>
                            {recipe.tags.map((tag, index) => {
                                return (
                                <TagRecipe key={index}>{tag}</TagRecipe>
                                )
                            })}
                        </TagDiv>
                    </div>
                    <RecipeInstructionsDiv>
                        <Ingredients>
                            <h2>Ingredients</h2>
                            <ul>
                                {IngredientsIntoList[0].map((li, index) => {
                                    return (
                                        <li key={index} >{li}</li>
                                    )
                                })}
                            </ul>
                        </Ingredients>
                        <Instructions>
                            <h2>Instructions</h2>
                            <ol>
                            {InstructionsIntoList[0].map((li, index) => {
                                    return (
                                        <li key={index}>{li}</li>
                                    )
                                })}
                            </ol>
                        </Instructions>
                    </RecipeInstructionsDiv>
                </MainRecipeDiv>
                )
            })}
        </>
    )
}

export default RecipeDetails

const MainRecipeDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;

`
const RecipeInstructionsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;

    @media (min-width: 668px) {
        align-items: flex-start;
    }
    
    @media (min-width: 1025px) {
        flex-direction: row;
        align-items: flex-start;
    }
`

const Ingredients = styled(StyledNonTransparentDiv)`
    border-radius: 5px;
    width: 100%;

    ul {
        list-style: inside;
        padding-inline-start: 0px;
    }
    li {
        margin-left: 0rem;
    }

    @media (min-width: 1025px) {
        width: 50%;
    }
`
const Instructions = styled(StyledNonTransparentDiv)`
    border-radius: 3px;
    background-color: inherit;
    padding: 10px;
    box-shadow: none;
    
    ol {
        padding-inline-start: 20px;
        li {
            margin-left: 0rem;
            width : 100%;

        }
    }

    @media (min-width: 1025px) {
        width: 50%;
    }

`
const TagRecipe = styled(Tag)`
  background-color: var(--color-beige);
  color: black;
  font-size: 12px;
  padding: 5px; 
  border-radius: 10px;
  margin: 5px;
`

const TagDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
`

const BigImageDiv = styled(ImageDiv)`
width: 100%;
    img{
        width: 100%;
    }
`