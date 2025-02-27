// import React from "react";
import "../styles/badge.css";

const Badge = ({ children, color, shape, ...props}) => {
  return <span className={`badge ${color} ${shape}`}>{children}</span>;
};

export default Badge;