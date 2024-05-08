import React from "react";
import ErrorBlock from "./ErrorBlock";
const TextInput = ({ label, value, onChange, style, error, ...rest }) => {
  return (
    <div className="text_input_div">
      {label && <label style={style?.label}>{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={style?.input}
        {...rest} // Spreads all other props to the input element
      />
   {error && <ErrorBlock message={error} />}
    </div>
  );
};

export default TextInput;
