import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Form from './feature components/Form';
import Filter from './feature components/Filter';
import RecentlyLiked from './feature components/RecentlyLiked';
import styled from 'styled-components/macro';
import AddIcon from '../icons/icons8-add-new-100.png'
import RecipesInFeed from './feature components/RecipesInFeed';
import SearchForUser from './feature components/SearchForUser';

const RecipeFeed = () => {
  const navigate = useNavigate()
  const accessToken = localStorage.getItem('accessToken')
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    if(!accessToken) {
      navigate("/login") 
    }   
  }, [accessToken])

  const toggle = (form) => {
    setCollapsed(!collapsed)
  }

  return (
    <>
    {accessToken && (
      <FeedSection> 
        <RecentlyLiked />
        <div>
          <ButtonContainer>
            <button  
              type="button"
              onClick={toggle}>
              <img src={AddIcon} />
              <p>add new recipe</p>
            </button>
            {collapsed && 
            <Form 
              style={{
              transition: "all 10s ease"
              }}/>}
            </ButtonContainer>
        <RecipesInFeed />
        </div>
        <div>
          <SearchForUser />
          <Filter />
        </div>
      </FeedSection>
    )}
  </>

  )
}

export default RecipeFeed

const FeedSection = styled.section`
  height: 100%;
  margin-top: 4%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  column-gap: 2vw;
  // ändra för mobil (ovan)

    @media (min-width: 668px) {
      grid-template-columns: 1fr 2fr 1fr;
      column-gap: 2vw;    
      }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  button {
    background-color:inherit;
    border: none;
    display: flex;
    transition: 0.3s ease-in-out;

    &:hover {
    transform: scale(1.2);
  }
  }
  p {
    align-self: center;
  }
  img {
    height: 30px;
  }
`