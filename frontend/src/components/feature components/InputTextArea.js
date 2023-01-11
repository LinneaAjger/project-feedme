import { SrOnly } from "components/styles/GlobalStyles";
import React from "react";

const InputTextArea = ({ srOnly, placeholder, value, onChange }) => {
    return (
        <label> <SrOnly>{srOnly}</SrOnly>
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />  
        </label>
    )
}

export default InputTextArea