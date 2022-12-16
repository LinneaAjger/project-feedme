import React from "react";
import { StyledNonTransparentDiv } from "components/styles/DivStyles";
import styled from 'styled-components/macro'

const RecentlyLiked = () => {
    return (
        <MarginTopDiv>
            <h2>Recently liked recipes</h2>
            <p>Stirred fried noodles</p>
            <p>Cranberry glazed ham</p>
            <p>Vegan pumpkin pie</p>
            <p>Spinach dip</p>
            <p>Chana masala</p>
            <p>Seafood pasta</p>
        </MarginTopDiv>
    )
}

export default RecentlyLiked

const MarginTopDiv = styled(StyledNonTransparentDiv)`
    margin-top: 50%;
    height: 50vh;
`