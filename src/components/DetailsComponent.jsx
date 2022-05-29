import React, { useEffect, useState } from "react";
import "../styles.css";
import CountInput from "./CountInput";
const DetailsComponent = ({ info }) => {
    
  //   setPrecio(cant * precio);
  return (
    <div>
      <h1>{info.title}</h1>
      <div style={{ display: "flex" }}>
        <h3 style={{ margin: 0 }}>$ {info.price}</h3>
        <h6 style={{ marginLeft: "30px", marginTop: 0 }}>
          <span>$ {info.price_max}</span>
        </h6>
      </div>
      <div style={{ display: "flex" }}>
        <p>Size: </p>
        {info.size?.map((size, indx) => (
          <button className="button-list" key={indx}>
            {size}
          </button>
        ))}
      </div>
      <div style={{display:'flex'}}>
          <p>Color: </p>
         <button className="color-button" id='red'>red</button>
         <button className="color-button" id='black'>black</button>
      </div>
      <CountInput price={info.price} />
      <div className="container">
        <a style={{ margin: "0 auto" }}>Add to Favorites</a>
        <button className="cart-button" >Add to Cart</button>
      </div>
      <p
        //   style={{ textAlign: "justify" }}
        dangerouslySetInnerHTML={{ __html: `${info?.description}` }}
      />
    </div>
  );
};

export default DetailsComponent;
