import React from "react";

import "./ActivityBlock.styles.scss";

function ActivityBlock({ text, icon }) {
  return (
    <div className="activityBlock d-flex align-items-center justify-content-center">
      <img src={icon} />
      <div>{text}</div>
    </div>
  );
}

export default ActivityBlock;
