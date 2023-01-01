import React from "react";
import { SrOnly } from "components/styles/GlobalStyles";
import styled from "styled-components/macro";

const SearchForUser = () => {
    return (
        <SearchForUserForm>
            <label> <SrOnly>Search for user</SrOnly>
                <input
                    type="text"
                    placeholder="Search for user..."/>
            </label>
        </SearchForUserForm>
    )
}


export default SearchForUser

const SearchForUserForm = styled.form`
margin-bottom: 30px;
padding: 10px;

    input {
        border: none;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;
        padding: 5px 10px;

        @media (max-width: 668px) {
            width: 50vw;
    }
    }
`