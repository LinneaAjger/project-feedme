import React from 'react'
import { StyledDiv } from './styles/DivStyles'
import ContactDetails from './feature components/ContactDetails'
import styled from 'styled-components/macro'

const Contact = () => {
  return ( 
  <StyledDiv>
    <h3>Get in <span>touch!</span></h3>
    <p>Do you have any questions or suggestions? Or perhaps just want to say hi?</p>
    <ContactDetailsDiv>
      <ContactDetails name="Jessika Lind" email="jessika.lind@me.com" linkedin="https://www.linkedin.com/in/jessika-lind-1227221a4/"/>
      <ContactDetails name="Linnea Ajger" email="linnea.ajger@gmail.com" linkedin="https://www.linkedin.com/in/linneaajger/"/>
    </ContactDetailsDiv>
  </StyledDiv>
  )
}

export default Contact

const ContactDetailsDiv = styled.div`
display: flex;
flex-direction: row;
`