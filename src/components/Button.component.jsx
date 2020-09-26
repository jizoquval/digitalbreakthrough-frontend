import React from "react";

import "./Button.styles.scss";

export default function Button({ text, style, onClick }) {
  return (
    <div>
      <div className="bigButton m-2 d-flex justify-content-center align-items-center" 
        style={ style || {} } onClick={onClick}>{text}</div>
    </div>
  );
}
