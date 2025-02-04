import React from "react";

const ClickButton = ({ handleClick }) => {
  return (
    <button className="click-button" onClick={handleClick}>
      Click Me!
    </button>
  );
};

export default ClickButton;
