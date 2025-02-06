// import React from "react";
import "../styles/banners.css";

const Banner = ({ message, type = "info" }) => {
  return <div className={`banner ${type}`}>{message}</div>;
};

export default Banner;