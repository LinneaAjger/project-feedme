import React from "react";
import styled from "styled-components";
import { StyledNonTransparentDiv } from "components/styles/DivStyles";

const RecipeDetails = ({ recipeInfo }) => {
    console.log(recipeInfo)

    const IngredientsIntoList = recipeInfo.map((recipe) => {
        return (
            recipe.ingredients[0].split(',')
        )
    })

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
`
const RecipeInstructionsDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px;
`

const Ingredients = styled(StyledNonTransparentDiv)`
    border-radius: 3px;
    margin: 10px;
    padding: 40px;

    ul {
        list-style: inside;
        li {
            margin-left: 0rem;
        }
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