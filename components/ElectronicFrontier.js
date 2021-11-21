import * as React from "react";

const ACTION_LINK = `https://act.eff.org/`;

const ElectronicFrontier = () => (
  <div className="eff">
    <span>
      I Fight Surveillance.{" "}
      <a href={ACTION_LINK} target="_blank" rel="noopener noreferrer nofollow">
        Join EFF
      </a>
      .
    </span>
  </div>
);

export default ElectronicFrontier;
