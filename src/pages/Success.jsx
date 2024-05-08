import React, { useEffect, useState } from "react";
import FontGrace from "../component/Font/FontGrace";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const history = useNavigate();
  const [redirectingTime, setRedirectingTime] = useState(5);
 
  useEffect(() => {
    const id = setInterval(() => {
      setRedirectingTime(prevTime => {
        if (prevTime > 1) { 
          return prevTime - 1;
        } else {
          clearInterval(id); 
          history("/"); 
          return 0; 
        }
      });
    }, 1000);
    return () => clearInterval(id); 
  }, [history]);
  return (
    <div className="success_page_container">
      <FontGrace tag="h1">Success Submitted</FontGrace>
      <div
        style={{
          fontSize: "2.3vw",
        }}
      >
        Congratulations
      </div>
      <p
        style={{
          width: "40%",
          color: "#727272",
        }}
      >
        Your request has been successfully submitted to us. We will validate
        your information and reach out to your shortly with updates
      </p>
      <div>
        Redirecting you to Homepage in
        <span
          style={{
            fontWeight: "700",
            marginLeft: ".4vw",
          }}
        >
          {redirectingTime} Seconds
        </span>
      </div>
    </div>
  );
};

export default Success;
