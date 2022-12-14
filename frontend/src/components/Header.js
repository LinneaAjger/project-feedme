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


  h1 {
    font-size: 2rem;
    margin-left: 25px;
  }

  div {
    display: flex;
  }
`

const StyledLogo = styled.img`
  margin-left: 25px;
  width: 50px;

`