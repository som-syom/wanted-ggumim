import React from "react";
import "Components/scss/ToolTip.scss";
import MOVE_BTN from "Assets/move.png";

function ToolTip({ tooltipClassName, previewRef, item }) {
  return (
    <div className={tooltipClassName}>
      <div className="image__item__tooltip__preview" ref={previewRef}></div>
      <div className="image__item__tooltip__desc">
        <h3 className="image__item__tooltip__desc__title">
          {item.productName}
        </h3>
        <div className="image__item__tooltip__desc__price">
          {item.outside ? (
            <span className="expected-price">예상가</span>
          ) : (
            <span className="discount-rate">{item.discountRate}%</span>
          )}
          <span className="discount-price">
            {(+item.priceDiscount).toLocaleString("en")}
          </span>
        </div>
      </div>
      <div className="image__item__tooltip__move">
        <img src={MOVE_BTN} alt="이동하기" />
      </div>
    </div>
  );
}

export default React.memo(ToolTip);
