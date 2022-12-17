import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from "react-router-dom";
import Form from './feature components/Form';
import Filter from './feature components/Filter';
import RecentlyLiked from './feature components/RecentlyLiked';
import styled from 'styled-components/macro';
import AddIcon from './media/AddIcon.png'
import RecipesInFeed from './feature components/RecipesInFeed';
import SearchForUser from './feature components/SearchForUser';
import { useDispatch, useSelector } from 'react-redux'
import toggle from 'reducers/toggle';


const RecipeFeed = () => {
  const navigate = useNavigate()
  const accessToken = localStorage.getItem('accessToken')
  const collapsed = useSelector((store) => store.toggle.collapsed)

  const dispatch = useDispatch()

  useEffect(() => {
    if(!accessToken) {
      navigate("/login") 
    }   
  }, [accessToken])

  const toggleForm = () => {
    dispatch(toggle.actions.setCollapsed(true))
  }

  const useMediaQuery = (width) => {
    const [pixelWidthReached, setPixelWidthReached] = useState(false);
  
    const updateWidth = useCallback((event) => {
      if (event.matches) {
        setPixelWidthReached(true);
      } else {
        setPixelWidthReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addEventListener("change", updateWidth);
      if (media.matches) {
        setPixelWidthReached(true);
      }
      return () => media.removeEventListener("change", updateWidth);
    }, []);
  
    return pixelWidthReached;
  };
  
  const mobileView = useMediaQuery(668)
  const tabletView = useMediaQuery(1024)

  return (
    <>
    {mobileView ? ( 
      <FeedSection>
      <ButtonContainer>
          <button  
            type="button"
            onClick={toggleForm}>
            <img src={AddIcon} />
            <p>add new recipe</p>
          </button>
          {collapsed && 
          <Form />}
      </ButtonContainer>
      <RecipesInFeed />
    </FeedSection>
    ) : tabletView ? (
      <FeedSection> 
        <div>
          <ButtonContainer>
            <button  
              type="button"
              onClick={toggleForm}>
              <img src={AddIcon} />
              <p>add new recipe</p>
            </button>
            {collapsed && 
            <Form />}
            </ButtonContainer>
        <RecipesInFeed />
        </div>
        <div>
          <SearchForUser />
          <Filter />
        </div>
      </FeedSection>
      ) : (
          <FeedSection> 
          <RecentlyLiked />
          <div>
            <ButtonContainer>
              <button  
                type="button"
                onClick={toggleForm}>
                <img src={AddIcon} />
                <p>add new recipe</p>
              </button>
              {collapsed && 
              <Form />}
              </ButtonContainer>
          <RecipesInFeed />
          </div>
          <div>
            <SearchForUser />
            <Filter />
          </div>
        </FeedSection>
      )
      }
    </>
    )
  }

export default RecipeFeed

const FeedSection = styled.section`
  height: 100%;
  margin-top: 4%;
  display: grid;
  width: 80%;
  position: relative;

    @media (min-width: 668px) and (max-width: 1024px) {
      grid-template-columns: 2fr 1fr;
      gap: 2%;
    }

    @media (min-width: 1025px) {
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