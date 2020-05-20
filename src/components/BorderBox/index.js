import React from "react";
import "./index.css";

function BorderBox({ children, title, className }) {
  const classes = `BorderBox ${className}`;

  return <div className={classes}>{children}</div>;
}

export default BorderBox;
