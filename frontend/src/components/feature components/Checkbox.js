import React from "react";

const Checkbox = ({ tags, title, value, handleOnChange }) => {

    return (
        <label>
        <input
          type="checkbox"
          name={value}
          checked={!!tags[value]}
          onChange={event => handleOnChange(event)}
        />
        {title}
      </label>
    )
}

export default Checkbox