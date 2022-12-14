import styled, { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&family=MuseoModerno:wght@400;700&display=swap');

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
  
  // font-family: var(--font-secondary)
}

//regular CSS

body {
  margin: 0;
  font-family: var(--font-main);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-sand);
}

  h1, h2 {
    font-family: var(--font-secondary);

  }
`

export const OuterWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
`

export const Innerwrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledDiv = styled.div`
  border-radius: 30px;
  width: 80%;
  min-height: 160px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-beige);
  box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;

    h1, h2 {
    margin-bottom: 15px;
    color: var(--color-darkGrey);

  }

  form  {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 60%;
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
    padding: 5px 0px;

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
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
}
&:active {
  transform: translateY(2px);
}
`