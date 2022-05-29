import React from "react";

const CarouselComponent = ({ images }) => {
  return (
    <>
      {images?.map((img, indx) => (
        <img
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid lightGray",
            borderRadius: "15px",
          }}
          key={indx}
          src={img}
          alt={`image ${indx + 1}`}
        />
      ))}
    </>
  );
};

export default CarouselComponent;
