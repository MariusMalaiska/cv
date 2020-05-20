import React from "react";
import "./index.css";

// import Title from "../Title";

function Pill({ title, className }) {
  const classes = `Pill ${className}`;

  return (
    <div className={classes}>
      <p>{title}</p>
      {/* level="3" */}
    </div>
  );
}

export default Pill;
