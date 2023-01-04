import React from "react";
import styled from "styled-components";
import { StyledNonTransparentDiv } from "components/styles/DivStyles";

const RecipeDetails = ({ recipeInfo }) => {
    console.log(recipeInfo)
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
                            <p>{recipe.ingredients}</p>
                        </Ingredients>
                        <Instructions>
                            <h2>Instructions</h2>
                            <p>{recipe.instructions}</p>
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
`
const Instructions = styled(StyledNonTransparentDiv)`
    margin: 10px;
    border-radius: 3px;
    background-color: inherit;

`