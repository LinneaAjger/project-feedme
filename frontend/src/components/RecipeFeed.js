import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from "react-router-dom";
import Form from './feature components/Form';
import Filter from './feature components/Filter';
import RecentlyLiked from './feature components/RecentlyLiked';
import styled from 'styled-components/macro';
import AddIcon from './media/AddIcon.png'
import RecipesInFeed from './feature components/RecipesInFeed';
import UploadWidget from './feature components/UploadWidget';

const RecipeFeed = () => {
  const navigate = useNavigate()
  const accessToken = localStorage.getItem('accessToken')
  const [collapsed, setCollapsed] = useState(true)

  useEffect(() => {
    if(!accessToken) {
      navigate("/login") 
    }   
  }, [accessToken])

  // Toggeling the Form component
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  // Function to make sure that not all components mount depending on screen size
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
    <SectionAroundFeed>
    {mobileView ? ( 
      <FeedSection>
        <ButtonContainer>
            <button  
              type="button"
              onClick={toggle}>
              <img src={AddIcon} />
              <p>add new recipe</p>
            </button>
            {!collapsed && <Form collapsed={collapsed} setCollapsed={setCollapsed} />}
        </ButtonContainer>
        <Filter />
        <RecipesInFeed />
    </FeedSection>
    ) : tabletView ? (
      <FeedSection> 
        <div>
          <ButtonContainer>
            <button  
              type="button"
              onClick={toggle}>
              <img src={AddIcon} />
              <p>add new recipe</p>
            </button>
            {!collapsed && <Form collapsed={collapsed} setCollapsed={setCollapsed} />}
            </ButtonContainer>
        <RecipesInFeed />
        </div>
        <div>
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
              onClick={toggle}>
              <img src={AddIcon} />
              <p>add new recipe</p>
            </button>
            {!collapsed && <Form collapsed={collapsed} setCollapsed={setCollapsed} />}
            <UploadWidget />
            </ButtonContainer>
        <RecipesInFeed />
        </div>
        <div>
          <Filter />
        </div>
      </FeedSection>
      )
    }
    </SectionAroundFeed>
    )
  }

export default RecipeFeed

const SectionAroundFeed = styled.section`
width: 100%;
display: flex; 
flex-direction: column;
align-items: center;
`

const FeedSection = styled.section`
  height: 100%;
  margin-top: 20px;
  display: grid;
  width: 95%;
  position: relative;
  justify-items: center;

    @media (min-width: 668px) and (max-width: 1024px) {
      grid-template-columns: 2fr 1fr;
      justify-items: stretch;
      width: 90%;
    }

    @media (min-width: 1025px) {
      grid-template-columns: 1fr 2fr 1fr;
      column-gap: 20px;    
      max-width: 1000px;
    }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 95%;

  button {
    background-color:inherit;
    border: none;
    display: flex;
    transition: 0.3s ease-in-out;
    z-index: 98;

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