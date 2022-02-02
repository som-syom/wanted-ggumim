import React from "react";

function SwiperItem({ item, idx, activeItem, onClickItem }) {
  let swiperClassName = "swiper__item";
  if (item.productId === activeItem) {
    swiperClassName += " active-item";
  }
  return (
    <div
      className={swiperClassName}
      key={item.productId}
      onClick={(e) => onClickItem(e, item.productId, idx)}
    >
      <div
        className="swiper__item__img"
        style={{ backgroundImage: `url("${item.imageUrl}")` }}
      >
        {item.discountRate > "0" && (
          <div className="discount-badge">
            {item.discountRate}
            <span>%</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default SwiperItem;
