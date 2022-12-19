import React, { useState, useEffect } from 'react'
import { StyledDiv } from './styles/DivStyles'
import { API_URL } from 'utils/utils'

const UserPage = () => {
const [list, setList] = useState([])
const accessToken = localStorage.getItem('accessToken');
const userId = localStorage.getItem('userId');


const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": accessToken
  }
}

useEffect(() => {
  fetch(API_URL({userId}), options)
  .then((response) => response.json())
  .then((data) => {
    setList(data);
    console.log(data, list)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, []);


  return (
    <StyledDiv>
      <p>
        this is the user id: {userId}
      </p>
    </StyledDiv>
  )
}

export default UserPage