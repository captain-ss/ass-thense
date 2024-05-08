import React from "react";

const Button = ({ children, theme, ...rest }) => {
  return (
    <button
      className={`btn btn-${theme === "light" ? "light" : "dark"}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
