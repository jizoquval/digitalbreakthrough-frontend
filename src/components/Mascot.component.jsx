import React from "react";
import mascot from "../assets/icons/mascot.gif";
import mascotRight from "../assets/icons/mascotRight.png";
import mascotBottom from "../assets/icons/mascotBottom.png";
import mascotWithItems from "../assets/icons/mascotWithItems.png";
import mascotEye from "../assets/icons/mascotEye.png";
import mascotWithHat from "../assets/icons/mascotWithHat.png";

import "./Mascot.styles.scss";

const Mascot = ({ type, style }) => {
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
    case "mascotEye":
      src = mascotEye;
      break;
    case "mascotWithHat":
      src = mascotWithHat;
      break;
    default:
      src = mascot;
  }

  return (
    <div className="mascot d-flex justify-content-center">
      <img style={style || {}} src={src} alt="mascote img" />
    </div>
  );
};

export default Mascot;
