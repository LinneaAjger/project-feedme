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
  background-repeat: no-repeat;
  background-attachment: fixed;
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
  width: 80%;
}

img + img {
    margin-top: 20px;
    margin-left: 10px;
  }

.nav-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0%;
    left: -1000px;
    padding-top: 15%;
    background: linear-gradient(147deg,rgba(249,218,198,1) 0%,rgba(242,193,159,1) 100%);
    opacity: 0;
    transition: all 0.6s ease-in-out;

    input {
      @media (min-width: 668px) {
        display: none;
    }
    }

    a {
      &:hover {
          color: var(--color-vividBlue);
        }
    }
    li {
      margin-left: -40px;
    }

    a, button {
      font-size: 1.2rem;
      color: var(--color-darkGrey);
      padding: 10px 20px 13px 20px;
      border-radius: 20px;
      transition: all 0.25s ease-in-out;

      &.active {
        background-color: var(--color-darkSand);
        border-radius: 20px;
      }
    } 

    @media (min-width: 668px) {
      padding-top: 20%;

      input {
        display: none;
      }
    }

    @media (min-width: 1024px) {
      height: inherit;
      background: inherit;
      position: initial;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 0px 20px 13px 20px;
      width: 100%;
      opacity: 1;

      a, button {
        padding: 10px 20px 13px 20px;
        margin-left: 2rem;

          &:hover {
          color: var(--color-vividBlue);
          background-color: var(--color-darkSand);
          border-radius: 20px;
        }
      }

      li {
        margin-left: -40px;
    }

    }
  }

  .nav-menu.active {
    position: absolute;
    left: 0px;
    border-radius: 10px;
    padding-inline-start: 0px;
    display: flex;
    align-items: center;
    opacity: 1;

    @media (min-width: 668px) {
      
    }
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

  li {
    width: auto;
  }

  li + li {
      margin-left: 2rem;
  }
  li + button {
      margin-left: 2rem;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;


  @media (min-width: 667px) {
    margin-top: 120px
  }

  @media (min-width: 1024px) {
    margin-top: 150px
  }
`


export const SrOnly = styled.div`
  position: absolute;
   width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`