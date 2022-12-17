import styled from "styled-components/macro"

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ` 

export const UnstyledBtn = styled.button`
  background-color: inherit;
  border: none;
  padding: 0px;
  cursor: pointer;
  text-align: unset;
  z-index: 1;

  &:hover {
    color: var(--color-vividBlue);
  }
`

export const StyledButton = styled.button`
  border: none;
  color: white;
  background-color: linear-gradient(0deg, rgb(59, 65, 197) 0%, rgb(114, 96, 192) 100%);
  background: linear-gradient(0deg, rgb(8 19 255) 0%, rgb(90 99 240) 100%);
  border-radius: 10px;
  padding: 5px 20px;
  box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;
  cursor: pointer;
  width: auto;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: translateY(2px);
  }
`
export const ButtonWithIcon = styled.button`
  background-color:inherit;
  height: 100%;
  border: none;
  background-image: ${props => props.selectedIcon};
  background-size: ${props => props.iconSize};
  background-repeat: no-repeat;

  &:hover {
    transform: scale(1.2);
  }
`