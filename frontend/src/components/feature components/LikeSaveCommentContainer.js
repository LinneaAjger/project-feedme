import React, { useState} from "react";
import styled from "styled-components/macro";

const LikeSaveCommentContainer = () => {
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    
    const onLikeClick = () => {
        setLiked
        console.log("like")
    }

    const onSaveClick = () => {
        console.log("save")
        setSaved
    }

    return (
        <LikeContainer>
            {/* Jag har tillfälligt tagit bort "onClick='delete' från button:en nedan */}
            {/* Add function to only show this button when post-user-id === user-id */}
            <button type="button">
                <StyledSvg 
                    width="10" 
                    height="15" 
                    viewBox="0 0 26 26"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L24 24M24 2L2 24" strokeLinecap="round"/>
                 </StyledSvg>
            </button>
            <button type="button" onClick={onSaveClick} className={saved ? "saved" : "notSaved"}>
                <StyledSvg 
                    width="10" 
                    height="15" 
                    viewBox="0 0 10 15" 
                    fill={saved ? "blue" : "none"} 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13.7433V2C1 1.44772 1.44849 1 2.00077 1H8.49923C9.05151 1 9.5 1.44771 9.5 2V13.7433C9.66646 15.6549 8.14323 13.9101 5.83878 11.2704L5.82321 11.2526C5.40202 10.7701 4.64272 10.8052 4.26142 11.3198C2.05598 14.296 1.11371 15.2128 1 13.7433Z" stroke="black" stroke-width="0.7"/>
                </StyledSvg>
            </button>
            <button type="button" onClick={onLikeClick} className={liked ? "liked" : "notLiked"}>
                <StyledSvg 
                    width="17" 
                    height="17" 
                    viewBox="0 0 17 17" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.70578 7C7.14502 6.31101 6.42099 6.58643 7.00497 3.67711C7.06033 3.40131 7.00032 3.11252 6.88451 2.85616C6.70516 2.45912 6.52778 1.82495 6.8731 1.28872C7.4224 0.435745 10.2508 1.45384 10.0089 4.59507V5.24826C10.0089 5.80054 10.4566 6.24826 11.0089 6.24826H14.4347C14.665 6.24826 14.89 6.32691 15.0648 6.47692C16.1354 7.39542 16.3903 7.97571 15.2821 8.95345C15.924 9.95769 16.0948 10.4074 15.2821 11.4001C15.9239 12.5448 16.1746 12.7107 15.2821 13.913C15.8238 14.6375 15.5494 15.0549 15.0844 15.5581C14.832 15.8312 14.4473 15.9414 14.0842 15.861C11.3869 15.2638 6.53999 14.6426 5.37015 13.6L5.23293 14.4289C5.15302 14.9115 4.7356 15.2655 4.24636 15.2655H2.3424C1.80667 15.2655 1.3661 14.8433 1.3433 14.3081L1.03835 7.14871C1.01656 6.63699 1.38493 6.19152 1.89164 6.11684L3.35621 5.90099C3.76841 5.84024 4.17508 6.04143 4.37689 6.40594L4.70578 7Z" fill="#FFEEE3"/>
                    <path d="M5.37015 13.6L4.70578 7M5.37015 13.6C6.53999 14.6426 11.3869 15.2638 14.0842 15.861C14.4473 15.9414 14.832 15.8312 15.0844 15.5581C15.5494 15.0549 15.8238 14.6375 15.2821 13.913M5.37015 13.6L5.23293 14.4289C5.15302 14.9115 4.7356 15.2655 4.24636 15.2655H2.3424C1.80667 15.2655 1.3661 14.8433 1.3433 14.3081L1.03835 7.14871C1.01656 6.63699 1.38493 6.19153 1.89164 6.11684L3.35621 5.90099C3.76841 5.84024 4.17508 6.04143 4.37689 6.40594L4.70578 7M4.70578 7C7.14502 6.31101 6.42099 6.58643 7.00497 3.67711C7.06033 3.40131 7.00032 3.11252 6.88451 2.85616C6.70516 2.45912 6.52778 1.82495 6.8731 1.28872C7.4224 0.435745 10.2508 1.45384 10.0089 4.59507V5.24826C10.0089 5.80054 10.4566 6.24826 11.0089 6.24826H14.4347C14.665 6.24826 14.89 6.32691 15.0648 6.47692C16.1354 7.39542 16.3903 7.97571 15.2821 8.95345M15.2821 8.95345H13.3425M15.2821 8.95345C15.924 9.95769 16.0948 10.4074 15.2821 11.4001M15.2821 11.4001H12.9894M15.2821 11.4001C15.9239 12.5448 16.1746 12.7107 15.2821 13.913M15.2821 13.913H12.9894" stroke="black" stroke-width="0.7"/>
                </StyledSvg>
            </button>

        </LikeContainer>
    )
}

export default LikeSaveCommentContainer


const LikeContainer = styled.div`                  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-left: 2px solid var(--color-darkSand);
  padding: 0px 0px 0px 30px;

  button {
        border: none;
        background-color: inherit;
    &:hover {
        transform: scale(1.2);
        transition: 0.3s ease-in-out;

    }
  }
`

const StyledSvg = styled.svg`
    &.liked {
        fill:"red";
    }
`