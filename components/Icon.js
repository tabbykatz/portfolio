import * as React from "react";

import simpleIcons from "simple-icons";

const Icon = ({ type }) => {
  const icon = simpleIcons.get(type);

  return (
    <div
      className="data-icon"
      data-icon={type}
      style={{
        display: "inline-block",
        width: "50px",
        margin: "0 auto",
      }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
};

export default Icon;
