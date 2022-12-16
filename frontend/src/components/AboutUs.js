import React from 'react'
import styled from 'styled-components/macro'
import { StyledDiv, ClonedStyledDiv } from './styles/DivStyles'
import Jessika from './media/Jessika.png'
import Linnea from './media/Linnea.png'


const AboutUs = () => {
  return (
    <>
      <StyledDiv>
        <h3>This is <span>Feed Me</span></h3>
        <p>Do you remember that excellent chicken stew you had at your friend’s place the other week? Or the out-of-this-world delicious strawberry cake you had at your sister-in-law’s place for midsummer? Since they were so delicious, you probably do. But do you have the recipe? Feed Me is a platform for friends to share recipes with each other - and cheer each other on!
        </p>
      </StyledDiv>
      <ClonedStyledDiv>
        <p>
        <span>Feed Me</span> is built by<a href='https://linneaajger.netlify.app/'>Linnéa Ajger</a>and<a href='https://jessikalind.netlify.app/'>Jessika Lind</a>as the final project of Technigo’s Web Development Bootcamp 2022. 
        </p>
        <StyledImgDiv>
          <StyledProfileImg src={Jessika}></StyledProfileImg>
          <StyledProfileImg src={Linnea}></StyledProfileImg>
        </StyledImgDiv>
      </ClonedStyledDiv>
    </>
  )
}

export default AboutUs

const StyledImgDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

@media (min: 668px) {
  
}
@media (min: 1024px) {

}
`

const StyledProfileImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;

@media (min: 668px) {
  
}
@media (min: 1024px) {

}
`