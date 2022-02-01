import React, { useEffect, useState } from "react";
import GetAPI from "Utils/API";
import "Components/scss/ImageContainer.scss";

function ImageContainer() {
  const [itemData, setItemData] = useState();
  const [mainImage, setMainImage] = useState();

  useEffect(() => {
    const getItemData = async () => {
      const { data } = await GetAPI();
      setItemData(data.productList);
      setMainImage(data.imageUrl);
    };
    getItemData();
    console.log(itemData);
  }, []);
  return (
    <div className="image__container">
      <img src={mainImage} alt="room image" />
    </div>
  );
}

export default ImageContainer;
