import React from "react";
import mascot from "../assets/icons/mascot.png";
import mascotRight from "../assets/icons/mascotRight.png";
import mascotBottom from "../assets/icons/mascotBottom.png";
import mascotWithItems from "../assets/icons/mascotWithItems.png";

const Mascot = ({ type }) => {
  let src = mascot;
  switch (type) {
    case "mascot":
      src = mascot;
      break;
    case "mascotRight":
      src = mascotRight;
      break;
    case "mascotBottom":
      src = mascotBottom;
      break;
    case "mascotWithItems":
      src = mascotWithItems;
      break;
    default:
      src = mascot;
  }

  return (
    <div className="m-5 d-flex justify-content-center">
      <img src={src} />
    </div>
  );
};

export default Mascot;
