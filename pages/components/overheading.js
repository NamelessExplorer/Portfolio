// components/HoverHeading.js

import React, { useState } from "react";

const HoverHeading = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const headingContainerStyles = {
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
  };

  const initialsStyles = {
    fontSize: "36px",
    cursor: "pointer",
    transition: "font-size 0.3s ease",
    whiteSpace: "nowrap",
    marginRight: "5px",
  };

  const fullNameStyles = {
    fontSize: "24px",
    whiteSpace: "nowrap",
    transform: "translateY(-50%)",
    transition: "transform 0.3s ease",
    marginLeft: "5px",
    transform: isHovered ? "translateX(0)" : "translateX(-100%)",
    opacity: isHovered ? 1 : 0,
    display: "inline-block",
  };

  return (
    <div
      style={headingContainerStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span style={initialsStyles}>AR</span>
      <span style={fullNameStyles}> Anshumann </span>
    </div>
  );
};

export default HoverHeading;
