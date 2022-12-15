import React from 'react'
import styled from 'styled-components/macro'
import Nav from './Nav'
import Logo from './media/Logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Nav />
      <NavLink to="/" className="logo-group">
        <h1>FEED ME</h1>
        <StyledLogo src={Logo} />
      </NavLink>
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

  @media (min-width: 668px) {
    height: 30%;

    h1 {
    font-size: 3rem;
    }

  }
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    width: 100%;
    height: 100px;
    align-items: flex-end;

      h1 {
        font-size: 3rem;
        z-index: 1;
      }
      div {
        display: flex;
        align-items: flex-end;
      }

    }
`

const StyledLogo = styled.img`
    margin-left: 10px;
    width: 70px;

  @media (min-width: 668px) {
    width: 100px;

  }

  @media (min-width: 1024px) {
    width: 220px;
    position: absolute;
    left: 30px;
    top: 15px;
    }
`