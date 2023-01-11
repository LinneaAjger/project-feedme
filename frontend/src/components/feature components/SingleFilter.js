import { UnstyledBtn } from "components/styles/ButtonStyles";
import React, { useState, useEffect } from "react";
import { useDispatch, batch } from "react-redux";
import styled from "styled-components/macro";
import { API_URL } from "utils/utils";
import recipeReducer from "reducers/recipeReducer";

const SingleFilter = ({ svg, title, array }) => {
    const [click, setClick] = useState(false)
    const [selected, setSelected] = useState(false)
    const [filtering, setFiltering] = useState(false)
    const accessToken = localStorage.getItem('accessToken')
    const [value, setValue] = useState()
    const dispatch = useDispatch()

    const handleClick = () => {
        setClick(!click)
    }

    const filterTags = (value) => {
        setFiltering(true)
        setValue(value)
        setSelected(true)
    }

        useEffect(() => {
            const options = {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": accessToken
              }
            }
            fetch(API_URL(`recipes?tags=${value}`), options)
              .then(res => res.json())
              .then(data => {
              if(filtering) {
                batch (() => {
                  dispatch(recipeReducer.actions.setItems(data.response))
                  dispatch(recipeReducer.actions.setError(null))
                })
              } else {
                batch(() => {
                  dispatch(recipeReducer.actions.setError(data.response))
                })
              }
              })
              .catch((error => {
                console.error('Error:', error)
              }))
              }, [filterTags])

              console.log(value)
    return (
      <>
        <SingleFilterDiv>
                {svg}
                <p> {title}</p>
                <UnstyledBtn onClick={handleClick}>
                    <DropdownSvg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L4.65904 5.1957C5.05147 5.64569 5.74824 5.65374 6.15097 5.21294L10 1" stroke="black"/>
                    </DropdownSvg>
                </UnstyledBtn>
                <TagBtnContainer className={click ? "" : "tags-hidden"}>
                    {array.map((recipe) => 
                        <TagBtn
                            onClick={() => filterTags(recipe.value)}
                            value={recipe.value}
                            className={selected ? "selected": ""}>
                                {recipe.title}
                        </TagBtn>
                    )}
                </TagBtnContainer>
            </SingleFilterDiv>
        </>
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

const TagBtnContainer = styled.div`
    grid-column: 1/4;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &.tags-hidden {
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0%;
        left: -1000px;
        opacity: 0;
    }
    `

const TagBtn = styled.button`
  background-color: var(--color-beige);
  color: black;
  font-size: 12px;
  padding: 5px; 
  border-radius: 10px;
  border: none;
  margin: 2px;

  &:hover {
    background-color: white;
  }

  &.selected {
    background-color: var(--color-beige);
  }
  `