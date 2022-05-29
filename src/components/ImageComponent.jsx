import React from "react";
import "../styles.css";

const ImageComponent = ({ image }) => {
  return <img className="product-image" src={image} alt="Product" />;
};

export default ImageComponent;
