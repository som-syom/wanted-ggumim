import React, { useEffect, useRef, useState } from "react";
import MAGNIFIER_BTN from "Assets/magnifier.png";
import CLOSE_BTN from "Assets/close.png";
import "Components/scss/MagnifierButton.scss";

function MagnifierButton({ item, index }) {
  const [toggleItem, setToggleItem] = useState(false);
  const btnRef = useRef();
  const previewRef = useRef();

  useEffect(() => {
    if (item) {
      btnRef.current.style.top = `${item.pointX * 1.6}px`;
      btnRef.current.style.left = `${item.pointY * 1.6}px`;

      previewRef.current.style.backgroundImage = `url(${item.imageUrl})`;
    }
  });

  const onClickItem = () => {
    setToggleItem(!toggleItem);
  };

  return (
    <div className="image__item" key={index} ref={btnRef}>
      <div className="image__item__btn" onClick={onClickItem}>
        {toggleItem ? (
          <img src={CLOSE_BTN} alt="close" />
        ) : (
          <img src={MAGNIFIER_BTN} alt={item.productName} />
        )}
      </div>
      <div className="image__item__more">
        <div className="image__item__more__preview" ref={previewRef}></div>
        <div className="image__item__more__desc">
          <h3 className="image__item__more__desc__title">{item.productName}</h3>
          <div className="image__item__more__desc__price">
            <span className="expected-price">예상가</span>
            <span className="price-discount">{item.priceDiscount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MagnifierButton;
