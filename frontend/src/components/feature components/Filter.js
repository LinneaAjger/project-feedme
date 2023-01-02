import React from "react";
import { StyledTransparentDiv } from "../styles/DivStyles"
import SingleFilter from "./SingleFilter";
import { useSelector } from "react-redux";
import { MealArray } from "./Form"
import { PreferencesArray } from "./Form"
import { TimeArray } from "./Form"

const Filter = () => {
    const recipeList = useSelector((store) => store.recipes.items)
    // const BreakfeastFilter = recipeList.recipe.filter((meal) => meal.includes("breakfeast").map(filteredBreakfeast => (
    //     <p>{filteredBreakfeast.tags}</p>
    // )))
    // console.log(BreakfeastFilter)

    //     const BreakfeastFilter = recipeList.map(recipe => (
//         recipe.map(tags => (
//             tags.filter((tags) => tags.includes("breakfeast"))
//         ))
//     ))
// console.log(BreakfeastFilter)

{/* <div>
  {people.filter(person => person.age < 60).map(filteredPerson => (
    <li>
      {filteredPerson.name}
    </li>
  ))}
</div> */}

    // const breakfeast = recipeList.map((singleRecipe) => {
    //     singleRecipe.recipe.tags.map((tag) => {
    //         tag.filter((tag) => tag.includes("breakfeast"))
    //     })
    // })
    // console.log(breakfeast)


    return (
        <StyledTransparentDiv>
            <h1>Pick your meal</h1>
            <SingleFilter 
            svg={<svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.40909 21.5105V8.59316C4.40909 8.04088 3.96138 7.59316 3.40909 7.59316H2C1.44772 7.59316 1 7.14545 1 6.59316V2.29959C1 2.07559 1.11002 1.86589 1.29433 1.73859C1.74659 1.4262 2.36364 1.74993 2.36364 2.29959V5.23846C2.36364 5.75865 2.78533 6.18034 3.30552 6.18034H3.40909C3.96138 6.18034 4.40909 5.73263 4.40909 5.18034V1.68182C4.40909 1.30526 4.71435 1 5.09091 1C5.46747 1 5.77273 1.30526 5.77273 1.68182V5.18034C5.77273 5.73263 6.22044 6.18034 6.77273 6.18034H7.13636C7.51292 6.18034 7.81818 5.87508 7.81818 5.49852V1.64979C7.81818 1.37496 8.1267 1.2131 8.35284 1.36929C8.44499 1.43294 8.5 1.5378 8.5 1.64979V6.18034V6.59316C8.5 7.14545 8.05228 7.59316 7.5 7.59316H6.77273C6.22044 7.59316 5.77273 8.04088 5.77273 8.59316V21.5105C5.77273 21.887 5.46747 22.1923 5.09091 22.1923C4.71435 22.1923 4.40909 21.887 4.40909 21.5105Z" fill="black" stroke="black"/>
                    <path d="M16.0002 21.2552V1.74382C16.0002 1.42922 15.647 1.24394 15.3881 1.42273C15.3421 1.4545 15.303 1.49662 15.2744 1.54463C13.5305 4.47062 12.7198 6.15243 12.6052 8.47789C12.5889 8.80788 12.7537 9.11829 13.0255 9.30606L13.6996 9.77167C13.8657 9.88641 14.0628 9.94786 14.2647 9.94786C14.8365 9.94786 15.2905 10.4289 15.2574 10.9997L14.6657 21.2166C14.6485 21.5152 14.8318 21.7888 15.1144 21.8864C15.5481 22.0362 16.0002 21.714 16.0002 21.2552Z" fill="black" stroke="black"/>
                </svg>}
            title="Meal"
            array={MealArray}/>
            
            <SingleFilter 
            svg={<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.53845L9 11.0192M17 20.5L9 11.0192M9 11.0192L17 1.53845L1 20.5" stroke="black" stroke-width="2"/>
                </svg>}
            title="Preferences"
            array={PreferencesArray}/>
            
            <SingleFilter 
            svg={<svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5 10.6731C18.5 16.3018 14.4206 20.7692 9.5 20.7692C4.57939 20.7692 0.5 16.3018 0.5 10.6731C0.5 5.04436 4.57939 0.576904 9.5 0.576904C14.4206 0.576904 18.5 5.04436 18.5 10.6731Z" stroke="black"/>
                    <path d="M5 5.65387C5 5.65387 10.2398 10.0614 10.4124 10.6898C10.585 11.3183 9.32682 12.1196 8.86602 11.4646C8.40522 10.8096 5 5.65387 5 5.65387Z" fill="#1F1B19"/>
                </svg>}
            title="Cooking Time"
            array={TimeArray}/>
            
        </StyledTransparentDiv>
    )
}

export default Filter