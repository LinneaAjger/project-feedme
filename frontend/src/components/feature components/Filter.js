import React from "react";
import { StyledTransparentDiv } from "../styles/DivStyles"
import styled from 'styled-components/macro'

const Filter = () => {
    return (
        <StyledTransparentDiv>
            <h1>Pick your meal</h1>
            <p>Meal</p>
            <p>Country</p>
            <p>Allergies</p>
            <p>Other</p>
            <p>Cooking time</p>
            <p>Difficulty</p>
        </StyledTransparentDiv>
    )
}

export default Filter