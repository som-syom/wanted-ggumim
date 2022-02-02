import React, { useEffect, useRef } from "react";
import MAGNIFIER_BTN from "Assets/magnifier.png";
import CLOSE_BTN from "Assets/close.png";
import MOVE_BTN from "Assets/move.png";
import "Components/scss/MagnifierButton.scss";

function MagnifierButton({ item, onClickItem, isActive }) {
  // const [toggleItem, setToggleItem] = useState(false);
  const btnRef = useRef();
  const previewRef = useRef();
  let moreClassName = "image__item__more";

  if (item.pointY * 1.6 + 11 > 400) {
    moreClassName += " right-item";
  }
  if (item.pointX * 1.6 > 500) {
    moreClassName += " bottom-item";
  }

  useEffect(() => {
    if (item) {
      btnRef.current.style.top = `${item.pointX * 1.6}px`;
      btnRef.current.style.left = `${item.pointY * 1.6 + 11}px`;

      if (isActive && previewRef)
        previewRef.current.style.backgroundImage = `url(${item.imageUrl})`;
    }
  });

  // const onClickItem = () => {
  //   setToggleItem(!toggleItem);
  // };

  return (
    <div
      className="image__item"
      ref={btnRef}
      onClick={(e) => onClickItem(e, item.productId)}
    >
      <div className="image__item__btn">
        {isActive ? (
          <img src={CLOSE_BTN} alt="close" />
        ) : (
          <img src={MAGNIFIER_BTN} alt={item.productName} />
        )}
      </div>
      {isActive && (
        <div className={moreClassName}>
          <div className="image__item__more__preview" ref={previewRef}></div>
          <div className="image__item__more__desc">
            <h3 className="image__item__more__desc__title">
              {item.productName}
            </h3>
            <div className="image__item__more__desc__price">
              <span className="expected-price">예상가</span>
              <span className="discount-price">
                {(+item.priceDiscount).toLocaleString("en")}
              </span>
            </div>
          </div>
          <div className="image__item__more__move">
            <img src={MOVE_BTN} alt="이동하기" />
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(MagnifierButton);
