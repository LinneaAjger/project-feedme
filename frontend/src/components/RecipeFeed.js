import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Form from './feature components/Form';
import Filter from './feature components/Filter';
import RecentlyLiked from './feature components/RecentlyLiked';
import styled from 'styled-components';
import AddIcon from '../icons/icons8-add-new-100.png'
import { ButtonWithIcon } from './GlobalStyles';
import RecipesInFeed from './feature components/RecipesInFeed';

const RecipeFeed = () => {
  const navigate = useNavigate()
  const accessToken = localStorage.getItem('accessToken')
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    if(!accessToken) {
      navigate("/login") 
    }   
  }, [accessToken])

  const logOut = () => {
    localStorage.removeItem('accessToken')
    navigate("/login")
  }

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
    {accessToken && (
      <FeedSection> 
        <RecentlyLiked />
        <div>
          <div>
            <ButtonWithIcon 
              selectedIcon={`url(${AddIcon})`}
              iconSize="20%" type="button"
              onClick={toggle}>
              add new recipe
            </ButtonWithIcon>
            {collapsed && <Form />}
            </div>
        <RecipesInFeed />
        </div>
        <Filter />
        <button onClick={logOut}>Sign out</button>
      </FeedSection>
    )}
  </>

  )
}

export default RecipeFeed

const FeedSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  column-gap: 2vw;
  // ändra för mobil (ovan)

    @media (min-width: 668px) {
      grid-template-columns: 1fr 2fr 1fr;
      column-gap: 2vw;    
      }
`