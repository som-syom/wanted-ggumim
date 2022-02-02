import React, { useCallback, useEffect, useState } from "react";
import GetAPI from "Utils/API";
import MagnifierButton from "Components/MagnifierButton";
import "Components/scss/ImageContainer.scss";
import Swiper from "Components/Swiper";

function ImageContainer() {
  const [itemData, setItemData] = useState([]);
  const [mainImage, setMainImage] = useState();
  const [activeItem, setActiveItem] = useState("");
  const [currentX, setCurrentX] = useState(0);
  let swiperWidth = (106 + 12) * 7;
  const endWidth = -(swiperWidth - 780); // width 800 - padding 10 10

  useEffect(() => {
    const getItemData = async () => {
      const { data } = await GetAPI();
      setItemData(data.productList);
      setMainImage(data.imageUrl);
      console.log(data);
    };
    getItemData();
  }, []);

  const onClickItem = useCallback((e, id, idx) => {
    e.preventDefault();

    if (id === activeItem) setActiveItem("");
    else {
      setActiveItem(id);
      if (idx >= 6) setCurrentX(endWidth);
      else if (idx === 0) setCurrentX(0);
    }
  });

  const onClickImage = useCallback((e) => {
    e.preventDefault();
    setActiveItem("");
  });

  return (
    <div className="all__container">
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
      <Swiper
        item={itemData}
        activeItem={activeItem}
        onClickItem={onClickItem}
        currentX={currentX}
      />
    </div>
  );
}

export default React.memo(ImageContainer);
