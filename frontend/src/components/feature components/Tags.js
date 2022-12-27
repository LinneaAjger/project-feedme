import React, { useState } from "react";
import styled from "styled-components/macro";

const Tags = ({ h2, Option1, Option2, Option3, Option4, setTags, tags, meal }) => {
    const [checked, setChecked] = useState(false)
    
    const toggleChecked = () => {
        setChecked(!checked)
      }

    const handleOnChange = (event) => {
        setTags(event.target.value)
        toggleChecked()
        console.log("hello")
    }

    return (
        <>
          <Tag>
            <h2>{h2}</h2>
            <div>
                <label> {Option1}
                    <input 
                        type="checkbox"
                        name={Option1}
                        value={Option1}
                        onChange={event => handleOnChange(event)}
                        />
                    </label>
                <label> {Option2}
                    <input
                        type="checkbox"
                        name={Option2}
                        value={Option2}
                        onChange={event => handleOnChange(event)}
                        />
                    </label>
                <label> {Option3}
                    <input
                        type="checkbox"
                        name={Option3}
                        value={Option3}
                        onChange={event => handleOnChange(event)}
                        />
                    </label>
                <label> {Option4}
                    <input
                        type="checkbox"
                        name={Option4}
                        value={Option4}
                        onChange={event => handleOnChange(event)}
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