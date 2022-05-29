import React, { useEffect, useState } from "react";
import "../styles.css";

const CountInput = ({ price }) => {
  const [precio, setPrecio] = useState(price);

  const [cant, setCant] = useState(0);

  const handleChange = (event) => {
    setCant(event.target.value);
  };
  const buttonPlus = () => {
    setCant(cant + 1);
    setPrecio(price * (cant + 1));
  };
  const buttonMinus = () => {
    if (cant > 0) {
      setCant(cant - 1);
      setPrecio(price * (cant - 1));
    }
  };
  return (
    <div className="container">
      <div>
        <button onClick={buttonMinus}>-</button>
        <input
          type="number"
          value={cant}
          onChange={handleChange}
          style={{ width: "25px" }}
          readOnly="readOnly"
        />
        <button onClick={buttonPlus}>+</button>
      </div>
      <h3 style={{ margin: 0 }}>$ {precio}</h3>
    </div>
  );
};

export default CountInput;
