import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";

const FontGrace = ({ tag: Tag = "div",color=null, children, ...rest }) => {
  return (
    <Tag
      {...rest}
      style={{
        fontFamily: "Covered By Your Grace",
        color: !color ? "#2DA950" : color,
        fontWeight: "500",
        margin:"0vw"
      }}
    >
      {children}
    </Tag>
  );
};

export default FontGrace;
