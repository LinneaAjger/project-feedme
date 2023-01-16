import React, { useState } from "react";
import { StyledTransparentDiv } from "../styles/DivStyles"
import SingleFilter from "./SingleFilter";
import { MealArray } from "./Form"
import { PreferencesArray } from "./Form"
import { TimeArray } from "./Form"
import styled from "styled-components";
import { UnstyledBtn } from "components/styles/ButtonStyles";


const Filter = () => {
    const [click, setClick] = useState()

    const handleClick = () => {
        setClick(!click)
    }

    const removeFilter = () => {
        location.reload()
    }

    return (
        <FilterDiv>
            <H1andBtnDiv>
                <FilterBtn onClick={handleClick}>
                    <h1 className={click ? "hidden" : ""}>Pick your meal</h1>
                    <svg className={click ? "hidden" : ""} width="32px" fill="gray" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>filter</title>
                        <path d="M30.646 1.62c-0.133-0.223-0.372-0.37-0.646-0.37h-28c-0.414 0-0.75 0.336-0.75 0.75 0 0.134 0.035 0.259 0.096 0.368l-0.002-0.004 9.905 17.831v5.805c0 0.292 0.167 0.545 0.411 0.668l0.004 0.002 7.999 4c0.096 0.050 0.211 0.080 0.332 0.080 0.002 0 0.003 0 0.005 0h-0c0.001 0 0.001 0 0.002 0 0.413 0 0.748-0.335 0.748-0.748 0-0.001 0-0.001 0-0.002v0-9.805l9.906-17.831c0.059-0.105 0.094-0.23 0.094-0.364 0-0.14-0.039-0.272-0.106-0.384l0.002 0.003zM19.344 19.637c-0.059 0.105-0.093 0.23-0.094 0.363v8.787l-6.5-3.25v-5.537c0-0 0-0 0-0.001 0-0.133-0.035-0.258-0.097-0.366l0.002 0.004-9.381-16.887h25.45z"></path>
                    </svg>
                </FilterBtn>
                <UnstyledBtn type="button" onClick={removeFilter}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L24 24M24 2L2 24" stroke="#F2C19F" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </UnstyledBtn>
            </H1andBtnDiv>
            <div className={click ? "" : "filter-hidden"}>
                <SingleFilter 
                svg={<svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.40909 21.5105V8.59316C4.40909 8.04088 3.96138 7.59316 3.40909 7.59316H2C1.44772 7.59316 1 7.14545 1 6.59316V2.29959C1 2.07559 1.11002 1.86589 1.29433 1.73859C1.74659 1.4262 2.36364 1.74993 2.36364 2.29959V5.23846C2.36364 5.75865 2.78533 6.18034 3.30552 6.18034H3.40909C3.96138 6.18034 4.40909 5.73263 4.40909 5.18034V1.68182C4.40909 1.30526 4.71435 1 5.09091 1C5.46747 1 5.77273 1.30526 5.77273 1.68182V5.18034C5.77273 5.73263 6.22044 6.18034 6.77273 6.18034H7.13636C7.51292 6.18034 7.81818 5.87508 7.81818 5.49852V1.64979C7.81818 1.37496 8.1267 1.2131 8.35284 1.36929C8.44499 1.43294 8.5 1.5378 8.5 1.64979V6.18034V6.59316C8.5 7.14545 8.05228 7.59316 7.5 7.59316H6.77273C6.22044 7.59316 5.77273 8.04088 5.77273 8.59316V21.5105C5.77273 21.887 5.46747 22.1923 5.09091 22.1923C4.71435 22.1923 4.40909 21.887 4.40909 21.5105Z" fill="black" stroke="black"/>
                        <path d="M16.0002 21.2552V1.74382C16.0002 1.42922 15.647 1.24394 15.3881 1.42273C15.3421 1.4545 15.303 1.49662 15.2744 1.54463C13.5305 4.47062 12.7198 6.15243 12.6052 8.47789C12.5889 8.80788 12.7537 9.11829 13.0255 9.30606L13.6996 9.77167C13.8657 9.88641 14.0628 9.94786 14.2647 9.94786C14.8365 9.94786 15.2905 10.4289 15.2574 10.9997L14.6657 21.2166C14.6485 21.5152 14.8318 21.7888 15.1144 21.8864C15.5481 22.0362 16.0002 21.714 16.0002 21.2552Z" fill="black" stroke="black"/>
                    </svg>}
                title="Meal"
                array={MealArray}
                /> 
                <SingleFilter 
                svg={<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.53845L9 11.0192M17 20.5L9 11.0192M9 11.0192L17 1.53845L1 20.5" stroke="black" stroke-width="2"/>
                    </svg>}
                title="Preferences"
                array={PreferencesArray}
                />
                <SingleFilter 
                svg={<svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5 10.6731C18.5 16.3018 14.4206 20.7692 9.5 20.7692C4.57939 20.7692 0.5 16.3018 0.5 10.6731C0.5 5.04436 4.57939 0.576904 9.5 0.576904C14.4206 0.576904 18.5 5.04436 18.5 10.6731Z" stroke="black"/>
                        <path d="M5 5.65387C5 5.65387 10.2398 10.0614 10.4124 10.6898C10.585 11.3183 9.32682 12.1196 8.86602 11.4646C8.40522 10.8096 5 5.65387 5 5.65387Z" fill="#1F1B19"/>
                    </svg>}
                title="Cooking Time"
                array={TimeArray}
                />
            </div>
        </FilterDiv>
    )
}

export default Filter

const FilterDiv = styled(StyledTransparentDiv)`
    @media (max-width: 668px) {
        display: flex;
        flex-direction: column;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
        background-color: var(--color-beige);
        width: 90%;
        justify-self: center;
        border: none;
        padding: 5px 15px 5px 15px;
    }
    div {
        @media (max-width: 668px) {
            &.filter-hidden {
                position: absolute;
                width: 100%;
                height: 100vh;
                top: 0%;
                left: -1000px;
                opacity: 0;
            }
        }
    }
    h1 {
        font-size: 14px;
    }
`
const FilterBtn = styled(UnstyledBtn)`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: 669px) {
        svg {
            display: none;
        }
    }
`

const H1andBtnDiv = styled.div`
display: flex;
flex-direction: row;
`