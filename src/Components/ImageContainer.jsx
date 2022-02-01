import React, { useEffect, useState } from "react";
import GetAPI from "Utils/API";
import MagnifierButton from "Components/MagnifierButton";
import "Components/scss/ImageContainer.scss";

function ImageContainer() {
  const [itemData, setItemData] = useState([]);
  const [mainImage, setMainImage] = useState();

  useEffect(() => {
    const getItemData = async () => {
      const { data } = await GetAPI();
      setItemData(data.productList);
      setMainImage(data.imageUrl);
      console.log(data);
      console.log(itemData);
    };
    getItemData();
  }, []);

  return (
    <div className="image__container">
      <img src={mainImage} alt="room image" />
      {itemData.length > 0 &&
        itemData.map((item, index) => {
          return (
            <MagnifierButton item={item} index={index} key={item.productId} />
          );
        })}
    </div>
  );
}

export default ImageContainer;
