import React from "react";
import { SrOnly } from "components/styles/GlobalStyles";
import styled from "styled-components/macro";
import { BsSearch } from 'react-icons/bs';

const SearchForUser = () => {
    const handleSubmit = (event) => event.preventDefault()
    const handleSearchChange = (event) => {
        if(!event.target.value)
        return (null)
    }

    return (
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