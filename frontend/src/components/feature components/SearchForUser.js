import React, { useState, useEffect} from "react";
import { SrOnly } from "components/styles/GlobalStyles";
import styled from "styled-components/macro";
import { BsSearch } from 'react-icons/bs';
import { API_URL } from "utils/utils";

const SearchForUser = () => {
    const [users, setUsers] = useState([])
    const [searchedUsers, setSearchedUsers] = useState([])
    const accessToken = localStorage.getItem('accessToken')

    useEffect (() => {
            const options = {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                "Authorization": accessToken
                }
            }
             fetch(API_URL("users"), options)
                .then(res => res.json())
                .then(data => {
                console.log(data.response)
                if(data.success) {
                setUsers(data.response)
                setSearchedUsers(data.response)
                }
                })
                .catch((error => {
                console.error('Error:', error)
                }))
                console.log(users)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleSearchChange = (event) => {
        if(!event.target.value)
        return (null)

        const usersArray = users.filter(user => user.username.includes(event.target.value))


    }

    return (
        <>
            <SearchForUserForm onSubmit={handleSubmit}>
                <label> <SrOnly>Search for user</SrOnly>
                    <input
                        type="text"
                        placeholder="Search for user..."
                        onChange={handleSearchChange}/>
                    <button>
                        <BsSearch />
                    </button>
                </label>
            </SearchForUserForm>
            {/* <div>
            {users.map(singleUser =>
                <p>{singleUser.username}</p>)}
            </div> */}
        </>
    )
}


export default SearchForUser

const SearchForUserForm = styled.form`
margin-bottom: 30px;
padding: 10px 20px 13px 20px;
min-width: 300px;

    label {
        display: flex;
        background: white;
        border-radius: 10px;
        padding: 5px 10px;
        justify-content: space-between;
    }

    input {
        border: none;
        /* border-radius: 10px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;
        padding: 5px 10px;

        @media (max-width: 668px) {
            width: 50vw;
    } */

    }

    button {
        border: none;
        background-color: inherit;
    }

`