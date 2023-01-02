import React from "react";
import styled from "styled-components";


const SingleFilter = ({ svg, title }) => {
    return (
        <SingleFilterDiv>
                {svg}
                <p> {title}</p>
                <DropdownSvg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4.65904 5.1957C5.05147 5.64569 5.74824 5.65374 6.15097 5.21294L10 1" stroke="black"/>
                </DropdownSvg>
            </SingleFilterDiv>
    )
}

export default SingleFilter

const SingleFilterDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    border-bottom: 2px solid var(--color-darkSand);
    filter: drop-shadow(none);
    width: 100%;
    padding: 10px;
    `

const DropdownSvg = styled.svg`
    align-self: center;
    `