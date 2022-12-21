import styled from 'styled-components/macro'

export const StyledTransparentDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: inherit;
  border: solid 2px var(--color-darkSand);
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`

export const StyledNonTransparentDiv = styled.div`
  padding: 20px;
  border-radius: 30px;
  background-color: var(--color-darkSand);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const StyledFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const StyledDiv = styled.div`
  border-radius: 30px;
  width: 80%;
  min-height: 160px;
  padding: 30px 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-beige);
  box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;
  margin-top: 5%;


  h1, h2 {
    margin-bottom: 15px;
    color: var(--color-darkGrey);
  }

  h3 {
    font-weight: 400;
    color: var(--color-darkGrey);
  }


  form  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
  }

  input + button {
    margin-top: 10px;
  }

  input, textarea {
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;
    padding: 5px 10px;
    max-width: 200px;

    ::placeholder {
      text-align: center;
    }
  }

  span {
    font-weight: 700;
    color: var(--color-vividBlue);
    
  }

  a {
    text-decoration: none;
    color: var(--color-vividBlue);
    padding: 5px 10px;
    transition: 0.3s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 667px) {
    width: 80%;
    padding: 30px 30px;


    input  {
      max-width: 200px;
    }
  } 
  @media (min-width: 1024px) {
    max-width: 600px;
    padding: 30px 30px;

  }
`
  export const ClonedStyledDiv = styled.div`
  border-radius: 30px;
  width: 80%;
  min-height: 160px;
  padding: 30px 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-beige);
  box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;
  margin-top: 30px;

  h3 {
    font-weight: 400;
    color: var(--color-darkGrey);
  }

  span {
    font-weight: 700;
    color: var(--color-vividBlue);
  }

  a {
    text-decoration: none;
    color: var(--color-vividBlue);
    padding: 5px 10px;
    transition: 0.3s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 667px) {
    width: 80%;
    padding: 30px 30px;


    input  {
      max-width: 200px;
    }
  } 
  @media (min-width: 1024px) {
    max-width: 600px;
    padding: 30px 30px;

  }
  `

export const RecipeContainer = styled.div`
display: flex;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
border-radius: 15px;
background-color: var(--color-beige);
width: 100%;
height: 100%;
padding: 30px;
justify-content: space-between;
min-height: 150px;

svg {
  width: 15px;
  height: 15px;
  stroke: black;
}

h3 {
  text-transform: uppercase;
}

@media (min-width: 668px) and (max-width: 1024px) {
  min-height: 175px;
  }

  @media (min-width: 1025px) {
    min-height: 200px
  }
`

export const RecipeList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;


  a {
    width: 90%;
  }
  a + a {
    margin-top: 10px;
  }
  @media (min-width: 668px) and (max-width: 1024px) {
    a {
    width: 90%;
  }
}

@media (min-width: 1025px) {
  a {
    max-width: 600px;
  }
}
`