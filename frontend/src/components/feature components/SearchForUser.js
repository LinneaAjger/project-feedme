import React, { useState, useEffect} from "react";
import { SrOnly } from "components/styles/GlobalStyles";
import styled from "styled-components/macro";
import { BsSearch } from 'react-icons/bs';
import { API_URL } from "utils/utils";
import { Link } from "react-router-dom";

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
                }
                })
                .catch((error => {
                console.error('Error:', error)
                }))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleSearchChange = (event) => {
        const filteredUsers = users.filter(user => user.username.toLowerCase().includes(event.target.value.toLowerCase()))
        if(event.target.value === '') {
            setSearchedUsers('')
        }
        else {
            setSearchedUsers(filteredUsers)
        }
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
            {searchedUsers.length !== 0 && (
            <SearchResultsDiv>
            {searchedUsers.map(singleUser =>
                <Link to={`/users/${singleUser._id}`}>{singleUser.username}</Link>)}
            </SearchResultsDiv>)}
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

const SearchResultsDiv = styled.div`
    margin-top: 5px;
    padding: 10px 20px 13px 20px;
    width: 300px;
    height: 100px;
    background-color: white;
    overflow: hidden;
    overflow-y: auto;

`