import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components/macro'
import HamburgerMenu from './media/HamburgerMenu.svg'
import Close from './media/Close.svg'
import { UnstyledBtn } from './GlobalStyles'

const Nav = () => {

  const [click, setClick] = useState(false)
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const logOut = () => {
    localStorage.removeItem('accessToken')
    navigate("/login")
  }


  return (
    <>
    <StyledNav>
              <UnstyledBtn type="button" className='menu-icon' onClick={handleClick}>
          {click ? <StyledIcon src={Close} /> : <StyledIcon src={HamburgerMenu} />}
        </UnstyledBtn>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <NavLink to="/" className="navbar-item" onClick={closeMobileMenu}>Feed</NavLink>
          </li>
          <li>
            <NavLink to="/:user-id" className="navbar-item" onClick={closeMobileMenu} >My Page</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-item" onClick={closeMobileMenu}>About us</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-item" onClick={closeMobileMenu}>Contact</NavLink>
          </li>
          {accessToken && (<UnstyledBtn type="button" onClick={() => logOut()}>Sign Out</UnstyledBtn>)}
        </ul>
    </StyledNav>
    </>
  )
}

export default Nav

const StyledIcon = styled.img`
  width: 25px;

  @media (min-width: 668px) {
    width: 40px;
  }
  
  @media (min-width: 1024px) {
    display: none;
  }
`

const StyledNav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  
  @media (min-width: 1024px) {
    width: 60%;
  }
`
