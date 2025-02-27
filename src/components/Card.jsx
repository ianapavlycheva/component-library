// import React from "react";
import "../styles/card.css";

const Card = ({ title, description, variant = "default" }) => {
  return (
    <div className={`card ${variant}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;