import React, { useState } from "react";

const FAQ = ({ item }) => {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked((prev) => !prev);
  }
  return (
    <div className="faq_container">
      <div className="question_container">
        {item.question}
        {isClicked ? (
          <h1 onClick={handleClick}>-</h1>
        ) : (
          <h1 onClick={handleClick}>+</h1>
        )}
      </div>
      {isClicked && <div className="asnwer_container">{item.answer}</div>}
    </div>
  );
};

export default FAQ;
