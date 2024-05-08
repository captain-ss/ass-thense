import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        padding: "2vw",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
