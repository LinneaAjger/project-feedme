import React, { useState } from 'react'
import { API_URL } from 'utils/utils'
import { useDispatch, batch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import user from 'reducers/user'
import styled from 'styled-components'
import { StyledDiv, StyledFlexDiv } from './styles/DivStyles'
import { StyledButton } from './styles/ButtonStyles'

const Login = ({loginType, loginHeadline, buttonText}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  
  const accessToken = localStorage.getItem('accessToken');

  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  const onSubmit = (event) => {
      event.preventDefault()
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username: username, password: password})
      }
      fetch(API_URL(loginType), options)
        .then(res => res.json())
        .then(data => {
          if(data.success) {
            batch(() => {
              dispatch(user.actions.setUsername(data.response.username))
              // dispatch(user.actions.setId(data.response.id))
              dispatch(user.actions.setError(null))
              localStorage.setItem("accessToken", data.response.accessToken);
              localStorage.setItem("userId", data.response.id);
              localStorage.setItem("username", data.response.username);
              navigate("/");
            })
          } else {
            batch(() => {
              dispatch(user.actions.setUsername(null))
              dispatch(user.actions.setId(null))
              dispatch(user.actions.setError(data.response))
              setErrorMsg(data.response)
            })
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

  const handleUsernameInput = (event) =>{
    setUsername(event.target.value)
  }
    const handlePasswordInput = (event) =>{
    setPassword(event.target.value)
  }

  return (
    <StyledDiv>
    <h2>{loginHeadline}</h2>
      <form onSubmit={onSubmit}>
          <input type="text" value={username} onChange={handleUsernameInput} placeholder="username" />
          <input type="password" value={password} onChange={handlePasswordInput} placeholder="password"/>
          {errorMsg !== '' && (<ErrorMsg>Try again. {errorMsg}</ErrorMsg>)}
        <StyledButton type="submit">{buttonText}</StyledButton>
      </form>
      {loginType === "login" && (
        <StyledFlexDiv>
          <p>Not a member?</p>
          <Link to="/register">Create new account</Link>
        </StyledFlexDiv>)}
      {loginType === "register" && (
        <StyledFlexDiv>
          <p>Already a member?</p>
          <Link to="/login">Log in here</Link>
        </StyledFlexDiv>)}
    </StyledDiv>
  )
}

export default Login

const ErrorMsg = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-bottom: 10px;
  text-align: center;
`