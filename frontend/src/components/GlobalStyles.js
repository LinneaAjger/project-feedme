import styled, { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyles = createGlobalStyle`

// RESET CSS
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
  height: 100%;
}

:root {
  --color-black: #000;
  --color-darkGrey: #383838;
  --color-lightGrey: #8A8989;
  --color-darkSand: #F2C19F;
  --color-sand: #F9DAC6;
  --color-beige: #FFEEE3;
  --color-vividBlue: #0000FF;
  --color-softPink: #F5C8C8;
  
  --font-main: 'Barlow', sans-serif;
  --font-secondary: 'MuseoModerno', cursive;
  
  // example: font-family: var(--font-secondary)
}

//regular CSS
html {
 font-size: 16px;
}

body {
  margin: 0;
  font-family: var(--font-main);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color: var(--color-sand); */
  background: linear-gradient(147deg, rgba(249,218,198,1) 0%, rgba(242,193,159,1) 100%);
}

h1, h2 {
  font-family: var(--font-secondary);
}

h2 {
  font-size: 1.2rem;
}

a {
  color: var(--color-black);
  text-decoration: none;
}

ul {
  list-style-type: none;
}

li {
  line-height: 2;
}

.nav-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 130px;
    left: -150px;
    padding-top: 20px;
    background: linear-gradient(147deg,rgba(249,218,198,1) 0%,rgba(242,193,159,1) 100%);
    opacity: 0;
    transition: all 0.6s ease-in-out;

    a {
      &:hover {
          color: var(--color-vividBlue);
        }
    }

    a, button {
      font-size: 1.2rem;
      color: var(--color-darkGrey);
      padding: 10px 20px 13px 20px;
      border-radius: 20px;
      transition: all 0.25s ease-in-out;


      &:hover {
        color: var(--color-vividBlue);
        background-color: var(--color-darkSand);
        border-radius: 20px;
      }

      &.active {
        background-color: var(--color-darkSand);
        border-radius: 20px;
      }
    } 

    @media (min-width: 1024px) {
      background: inherit;
      position: initial;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      padding-top: 0px;
      width: 100%;
      opacity: 1;
    }
  }

  .nav-menu.active {
    position: absolute;
    left: 0px;
    border-radius: 10px;
    opacity: 1;

    @media (min-width: 1024px) {
      background-color: inherit;
      position: initial

    }
  }

  .logo-group {
    display: flex;
    align-items: center;
    transform: rotate(0.0turn);
    transition: all 0.5s ease-in-out;

    a {
      &:hover {
        color: var(--color-black);
      }
    }
    &:hover {
      transform: rotate(0.05turn);
    }
  }

@media (min-width: 667px) {
  html {
    font-size: 18px;
  } 
}

@media (min-width: 1024px) {
  html {
    font-size: 20px;
  } 
}

`

export const OuterWrapper = styled.main`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`

export const Innerwrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledDiv = styled.div`
  border-radius: 30px;
  width: 80%;
  min-height: 160px;
  padding: 10%;
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

  form  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
  }

  input + button {
    margin-top: 10px;
  }

  input {
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;
    padding: 5px 10px;

    ::placeholder {
      text-align: center;
    }
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
    

    form  {
      width: 80%;
      max-width: 200px;
    }
  } 
  @media (min-width: 1024px) {
    max-width: 600px;
    margin-top: 10%;
    padding: 5% 10%;


  }
`

export const StyledFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const StyledButton = styled.button`
  border: none;
  color: white;
  background-color: linear-gradient(0deg, rgb(59, 65, 197) 0%, rgb(114, 96, 192) 100%);
  background: linear-gradient(0deg, rgb(8 19 255) 0%, rgb(90 99 240) 100%);
  border-radius: 10px;
  padding: 5px 0px;
  box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;
  cursor: pointer;
  width: 45%;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: translateY(2px);
  }
`

export const UnstyledBtn = styled.button`
  background-color: inherit;
  border: none;
  padding: 0px;
  cursor: pointer;
  text-align: unset;

  &:hover {
    color: var(--color-vividBlue);
  }
`
