import { SrOnly } from "components/styles/GlobalStyles";
import React from "react";

const Input = ({ srOnly, placeholder, value, onChange, type }) => {
    return (
        <label> <SrOnly>{srOnly}</SrOnly>
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />  
        </label>
    )
}

export default Input