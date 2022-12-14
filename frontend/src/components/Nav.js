import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import HamburgerMenu from './media/HamburgerMenu.svg'
import Close from './media/Close.svg'
import { UnstyledBtn } from './GlobalStyles'

const Nav = () => {

  const [click, setClick] = useState(false)

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
            <UnstyledBtn type="button" onClick={logOut}>Sign Out</UnstyledBtn>
        </ul>
    </StyledNav>
    </>
  )
}

export default Nav

const StyledIcon = styled.img`
  width: 25px;
`

const StyledNav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  
`
