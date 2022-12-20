import React from 'react'
import styled from 'styled-components/macro'
import Nav from './Nav'
import Logo from './media/Logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <StyledHeader>
        <Nav />
        <NavLink to="/" className="logo-group">
          <h1>FEED ME</h1>
          <StyledLogo src={Logo} />
        </NavLink>
      </StyledHeader>
    </Wrapper>
  )
}

export default Header

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 10%;


  h1 {
    font-size: 2rem;
  }

  @media (min-width: 668px) {
    height: 15%;

    h1 {
    font-size: 3rem;
    }

  }
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    width: 95%;
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
    width: 70px;
    margin-left: 10px;

  @media (min-width: 668px) {
    width: 100px;

  }

  @media (min-width: 1024px) {
    width: 220px;
    position: absolute;
    margin-left: 0px;
    left: 30px;
    top: 15px;
    }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--color-beige);
  box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;
  position: fixed;
  z-index: 99;
`