import React, { useEffect, useRef } from "react";
import ToolTip from "Components/ToolTip";
import MAGNIFIER_BTN from "Assets/magnifier.png";
import CLOSE_BTN from "Assets/close.png";
import "Components/scss/MagnifierButton.scss";

function MagnifierButton({ item, onClickItem, isActive }) {
  const btnRef = useRef();
  const previewRef = useRef();
  let tooltipClassName = "image__item__tooltip";

  if (item.pointY * 1.6 + 11 > 400) {
    tooltipClassName += " right-item";
  }
  if (item.pointX * 1.6 > 500) {
    tooltipClassName += " bottom-item";
  }

  useEffect(() => {
    if (item) {
      btnRef.current.style.top = `${item.pointX * 1.6}px`;
      btnRef.current.style.left = `${item.pointY * 1.6 + 11}px`;

      if (isActive && previewRef)
        previewRef.current.style.backgroundImage = `url(${item.imageUrl})`;
    }
  });

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
        <ToolTip
          tooltipClassName={tooltipClassName}
          previewRef={previewRef}
          item={item}
        />
      )}
    </div>
  );
}

export default React.memo(MagnifierButton);
