import React, { useState } from 'react'
import { API_URL } from 'utils/utils'
import { useDispatch, batch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import user from 'reducers/user'

const Login = ({loginType, loginHeadline, buttonText}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
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
          console.log(data)
          if(data.success) {
            batch(() => {
              dispatch(user.actions.setUsername(data.response.username))
              dispatch(user.actions.setId(data.response.id))
              dispatch(user.actions.setError(null))
              localStorage.setItem("accessToken", data.response.accessToken);
              navigate("/");
            })
          } else {
            batch(() => {
              dispatch(user.actions.setUsername(null))
              dispatch(user.actions.setId(null))
              dispatch(user.actions.setError(data.response))
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
    <>
    <h2>{loginHeadline}</h2>
      <form onSubmit={onSubmit}>
        <label> Username:
          <input type="text" value={username} onChange={handleUsernameInput} />
        </label>
        <label> Password:
          <input type="password" value={password} onChange={handlePasswordInput} />
        </label>
        <button type="submit">{buttonText}</button>
      </form>
      {loginType === "login" && (<Link to="/register">Create new account</Link>)}
    </>
  )
}

export default Login