import React from "react";
import styled from "styled-components/macro";

const Tags = ({ h2, Option1, Option2, Option3, Option4, value, state, setState }) => {

    const handleStateChange = (event) => {
        {setState}(event.target.value)
    }

    return (
        <>
          <Tag>
            <h2>{h2}</h2>
            <div>
                <label> {Option1}
                    <input 
                        type="radio"
                        name={Option1}
                        value={value}
                        onChange={() => {handleStateChange}}
                        checked={value === Option1}
                        />
                    </label>
                <label> {Option2}
                    <input
                        type="radio"
                        name={Option2}
                        value={value}
                        onChange={() => {handleStateChange}}
                        checked={value === Option2}
                        />
                    </label>
                <label> {Option3}
                    <input
                        type="radio"
                        name={Option3}
                        value={value}
                        onChange={() => {handleStateChange}}
                        checked={value === Option3}
                        />
                    </label>
                <label> {Option4}
                    <input
                        type="radio"
                        name={Option4}
                        value={value}
                        onChange={() => {handleStateChange}}
                        checked={value === Option4}
                        />
                    </label>  
            </div>     
          </Tag>
        </>
    )
}

export default Tags

const Tag = styled.div`
    margin: 5px;

    h2 {
        font-size: 16px;
    }
    div {
        display: grid; 
        grid-template-columns: 1fr 1fr;

        label {
            font-size: 14px;
            display: grid;
            flex-direction: row;
        }
    }
`