import React from "react";

import "./Footer.styles.scss";

function Footer({ children, height }) {
  return <div className="footer" style={{ height }}>{children}</div>;
}

export default Footer;
