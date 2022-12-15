import React from 'react'
import styled from 'styled-components/macro'
import Nav from './Nav'
import Logo from './media/Logo.svg'
import HamburgerMenu from './media/HamburgerMenu.svg'

export const Header = () => {


  return (
    <StyledHeader>
      <Nav />
      <div>
        <h1>FEED ME</h1>
        <StyledLogo src={Logo} />
      </div>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 30%;


  h1 {
    font-size: 2rem;
    margin-left: 25px;
  }

  div {
    display: flex;
  }

  @media (min-width: 668px) {
    height: 30%;

    h1 {
    font-size: 3rem;
    }

  }
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    width: 100%;
    height: 200px;
    align-items: flex-start;

    h1 {
      font-size: 3rem;
      position: absolute;
      left: 20px;
      top: 40px;
      font-size: 3rem;
      z-index: 1;
    }

    }
`

const StyledLogo = styled.img`
  margin-left: 25px;
  width: 50px;

  @media (min-width: 668px) {
    width: 100px;

  }

  @media (min-width: 1024px) {
    width: 220px;
    position: absolute;
    left: 40px;
    top: 50px;
    }
`