// import React from "react";
import "../styles/badges.css";

const Badge = ({ text, color = "gray", shape ="square" }) => {
  return <span className={`badge ${color} ${shape}`}>{text}</span>;
};

export default Badge;