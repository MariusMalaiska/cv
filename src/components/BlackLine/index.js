import React from "react";
import "./index.css";

import Title from "../Title";

function BlackLine({ title, className }) {
  const classes = `BlackLine ${className}`;

  return (
    <div className={classes}>
      <Title level="2">{title}</Title>
    </div>
  );
}

export default BlackLine;
