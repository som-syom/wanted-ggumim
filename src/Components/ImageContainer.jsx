import React, { useEffect, useState } from "react";
import GetAPI from "Utils/API";
import MagnifierButton from "Components/MagnifierButton";
import "Components/scss/ImageContainer.scss";

function ImageContainer() {
  const [itemData, setItemData] = useState([]);
  const [mainImage, setMainImage] = useState();
  const [activeItem, setActiveItem] = useState("");

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

  const onClickItem = (e, id) => {
    e.preventDefault();

    if (id === activeItem) setActiveItem("");
    else setActiveItem(id);
  };

  const onClickImage = (e) => {
    e.preventDefault();
    setActiveItem("");
  };

  return (
    <div className="image__container">
      <img src={mainImage} alt="room image" onClick={onClickImage} />
      {itemData.length > 0 &&
        itemData.map((item) => {
          return (
            <MagnifierButton
              item={item}
              key={item.productId}
              onClickItem={onClickItem}
              isActive={activeItem === item.productId ? true : false}
            />
          );
        })}
    </div>
  );
}

export default ImageContainer;
