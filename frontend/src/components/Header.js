import React from 'react'
import styled from 'styled-components/macro'
import Nav from './Nav'
import Logo from './media/Logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'

export const Header = () => {

  // the plan is to show the username of the logged in user
  const accessToken = localStorage.getItem('accessToken');
  const username = localStorage.getItem('username');

  return (
    <Wrapper>
      <StyledHeader>
        <Nav />
        {/* {accessToken &&(
        <StyledP>Logged in as: {username}</StyledP>
        )} */}
        <NavLink to="/" className="logo-group">
          <h1>FEED ME</h1>
          <StyledLogo viewBox="0 0 221 218" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="110.5" cy="105" rx="110.5" ry="105" fill="#F2C19F"/>
            <path d="M167.599 160.483C164.839 178.755 147.797 191.541 129.55 189.06C111.303 186.579 98.7323 169.767 101.492 151.495C104.252 133.222 121.294 120.437 139.541 122.918C157.788 125.398 170.359 142.21 167.599 160.483Z" fill="#F2C19F" stroke="black" strokeWidth="7"/>
            <path d="M153.032 125.275C151.325 118.828 150.704 115.969 150.485 114.838C150.409 114.445 150.614 114.05 150.962 113.842C167.354 104.042 159.017 96.7718 157.878 94.6069C156.725 92.4165 143.52 79.9222 137.409 87.1199C144.567 93.7696 141.93 96.9687 137.031 105.452L135.504 107.949C135.073 108.655 134 108.137 134.301 107.369V107.369C134.353 107.236 134.447 107.122 134.567 107.044L137.031 105.452C141.93 96.9687 144.567 93.7696 137.409 87.1199C128.592 77.1554 113.885 84.8557 113.326 85.1541C113.308 85.1636 113.301 85.1667 113.283 85.1755C112.782 85.4162 105.296 89.1087 106.78 93.9993C106.826 94.1506 107.061 94.4188 107.173 94.5299V94.5299C108.003 95.3512 107.453 95.1156 106.631 94.2865C105.98 93.63 105.166 93.0277 104.15 92.5238C104.099 92.4984 104.042 92.4766 103.986 92.4609C93.3305 89.4317 90.3403 93.6033 86.1521 98.9569C79.5066 108.785 78.5945 113.573 86.4935 119.129C94.2768 123.262 95.1423 122.744 102.703 121.856L101.36 122.017C101.36 122.017 100.12 128.306 104.683 136.942C109.247 145.577 155.464 134.455 153.032 125.275Z" fill="white"/>
            <path d="M137.409 87.1199C143.52 79.9222 156.725 92.4165 157.878 94.6069C159.017 96.7718 167.354 104.042 150.962 113.842C150.614 114.05 150.409 114.445 150.485 114.838C150.704 115.969 151.325 118.828 153.032 125.275C155.464 134.455 109.247 145.577 104.683 136.942C100.12 128.306 101.36 122.017 101.36 122.017M137.409 87.1199C144.567 93.7696 141.93 96.9687 137.031 105.452M137.409 87.1199C128.592 77.1554 113.885 84.8557 113.326 85.1541C113.308 85.1636 113.301 85.1667 113.283 85.1755C112.782 85.4162 105.296 89.1087 106.78 93.9993C106.826 94.1506 107.061 94.4188 107.173 94.5299V94.5299C108.003 95.3512 107.453 95.1156 106.631 94.2865C105.98 93.63 105.166 93.0277 104.15 92.5238C104.099 92.4984 104.042 92.4766 103.986 92.4609C93.3305 89.4317 90.3403 93.6033 86.1521 98.9569C79.5066 108.785 78.5945 113.573 86.4935 119.129C94.2768 123.262 95.1423 122.744 102.703 121.856M137.031 105.452L134.567 107.044C134.447 107.122 134.353 107.236 134.301 107.369V107.369C134 108.137 135.073 108.655 135.504 107.949L137.031 105.452ZM101.36 122.017C103.229 121.462 111.277 118.598 115.671 116.398C116.57 115.948 116.374 115.682 115.495 116.171L110.931 118.709C110.609 118.888 110.408 119.227 110.408 119.593L110.408 120.071M101.36 122.017L102.703 121.856M101.36 122.017C98.8563 122.761 102.789 121.846 102.703 121.856" stroke="black" strokeWidth="7"/>
            <ellipse rx="3.35066" ry="3.26958" transform="matrix(0.990883 0.134722 -0.149356 0.988783 141.475 151.776)" fill="black"/>
            <ellipse rx="3.35066" ry="3.26958" transform="matrix(0.990883 0.134722 -0.149356 0.988783 121.993 156.862)" fill="black"/>
            <path d="M132.6 189.527C124.785 192.874 115.7 206.794 115.7 209.672M155.133 182.127C163.255 180.825 177.667 180.072 182 184.593" stroke="black" strokeWidth="7"/>
            <path d="M146.312 167.208C142.049 171.26 137.587 172.826 131.011 172.442C129.805 172.372 129.899 171.735 131.105 171.793C133.298 171.898 135.522 171.756 138 171C141.599 170.017 143.632 168.359 145.655 166.53C146.498 165.768 147.136 166.426 146.312 167.208Z" stroke="black" strokeWidth="5"/>
          </StyledLogo>
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
  height: 100px;


  h1 {
    font-size: 2rem;
  }

  @media (min-width: 668px) {
    height: 140px;
    width: 90%;

    h1 {
    font-size: 3rem;
    }

  }
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    align-items: flex-end;
    width: 95%;
    height: 180px;


    
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

const StyledLogo = styled.svg`
    width: 70px;
    height: 70px;
    margin-left: 10px;

  @media (min-width: 668px) {
    width: 100px;
    height: 100px;

  }

  @media (min-width: 1024px) {
    width: 220px;
    height: 220px;
    position: absolute;
    margin-left: 0px;
    left: 20px;
    top: -6px;
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

const StyledP = styled.p`
  
  margin-left: 10px;

  @media (min-width: 668px) {
    left: 30px;
    top: 285px;
  }
  @media (min-width: 1024px) {
    position:absolute;
    font-size: 1.2rem;
    left: 60px;
    top: 30px;
  }
  
  
`