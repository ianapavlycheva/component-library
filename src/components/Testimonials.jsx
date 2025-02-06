// import React from "react";
import "../styles/testimonials.css";

const Testimonial = ({ name, feedback, type = "quote" }) => {
  return (
    <div className={`testimonial ${type}`}>
      <p>"{feedback}"</p>
      <h4>- {name}</h4>
    </div>
  );
};

export default Testimonial;