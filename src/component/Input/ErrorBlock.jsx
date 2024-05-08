import React from "react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const ErrorBlock = ({ message }) => {
  return (
    <div
      style={{
        color: "#FF0808",
        padding: ".5vww",
        textAlign: "start",
        margin: ".5vw 0vw",
        display: "flex",
        gap:".5vw",
        alignItems: "center",
      }}
    >
      {" "}
      <div
        style={{
          display: "flex",
          padding: ".2vw",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FF0808",
          borderRadius: "1vw",
        }}
      >
        <PriorityHighIcon
          style={{
            color: "white",
          }}
          sx={{ fontSize: 10 }}
        />
      </div>
      {message ? message : "Please fill this input"}
    </div>
  );
};

export default ErrorBlock;
