import React, { useEffect, useState } from "react";
import CarouselComponent from "./CarouselComponent";
import DetailsComponent from "./DetailsComponent";
import ImageComponent from "./ImageComponent";
import "../styles.css";
const ProductContainer = () => {
  const [info, setInfo] = useState({});
  const getInfoFromApi = async () => {
    let response = await fetch(
      "https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js"
    );
    let dataFull = await response.json();
    let data = {
      id: dataFull.id,
      title: dataFull.title,
      price: dataFull.price,
      price_max: dataFull.price_max,
      description: dataFull.description,
      images: dataFull.images,
      featured_image: dataFull.featured_image,
      variants: dataFull.variants.map((variant) => {
        return {
          id: variant.id,
          option2: variant.option2,
          price: variant.price,
        };
      }),
      media: dataFull.media.map((med) => med.src),
      size: dataFull.options[1].values.map((size) => size),
    };
    setInfo(data);
  };
  useEffect(() => {
    getInfoFromApi();
  }, []);
  console.log("info from api...", info);

  return (
    <div style={{margin:"1.5rem"}}>
      <div className="container">
        <ImageComponent image={info.featured_image} />
        <DetailsComponent info={info} />
      </div>
      <CarouselComponent images={info.media}/>
    </div>
  );
};

export default ProductContainer;
