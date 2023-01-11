import React from "react";
import styled from "styled-components/macro";
import { StyledNonTransparentDiv } from "components/styles/DivStyles";
import { Tag } from "./TagsVisual";

const RecipeDetails = ({ recipeInfo }) => {
    console.log(recipeInfo)

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
                <MainRecipeDiv>
                    <div>
                        <h1>{recipe.name}</h1>
                        <p>"{recipe.description}"</p>
                        <TagDiv>
                            {recipe.tags.map((tag) => {
                                return (
                                <TagRecipe>{tag}</TagRecipe>
                                )
                            })}
                        </TagDiv>
                    </div>
                    <RecipeInstructionsDiv>
                        <Ingredients>
                            <h2>Ingredients</h2>
                            <ul>
                                {IngredientsIntoList[0].map((li) => {
                                    return (
                                        <li>{li}</li>
                                    )
                                })}
                            </ul>
                        </Ingredients>
                        <Instructions>
                            <h2>Instructions</h2>
                            <ol>
                            {InstructionsIntoList[0].map((li) => {
                                    return (
                                        <li>{li}</li>
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
    padding: 50px;
`
const RecipeInstructionsDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    
    @media (min-width: 668px) {
        flex-direction: row;
        margin: 30px;
    }
`

const Ingredients = styled(StyledNonTransparentDiv)`
    border-radius: 3px;
    padding: 10px;

    ul {
        list-style: inside;
        li {
            margin-left: 0rem;
        }
    }

    @media (min-width: 668px) {
        margin: 10px;

    }
`
const Instructions = styled(StyledNonTransparentDiv)`
    margin: 10px;
    border-radius: 3px;
    background-color: inherit;
    padding: 40px;
    
    ol {
        li {
            margin-left: 0rem;
        }
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
`