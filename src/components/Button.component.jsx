import React from "react";

import "./Button.styles.scss";

export default function Button({ text }) {
  return (
    <div>
      <div className="bigButton m-2 d-flex justify-content-center align-items-center">{text}</div>
    </div>
  );
}
