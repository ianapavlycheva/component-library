// import React from "react";
import "../styles/banner.css";

const Banner = ({ icon, header, message, type = "info" }) => {

  const bannerClass = `banner ${type}`; 

  return (
    <div className={bannerClass}>
      <h1>
        <i className={icon}></i>
        {header}
        </h1>
        {message && <p>{message}</p>}
    </div>
  );
};

export default Banner;