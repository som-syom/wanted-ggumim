import React from "react";
import "Components/scss/Swiper.scss";

function Swiper({ item, activeItem, onClickItem }) {
  return (
    <div className="swiper__container">
      <div className="swiper__wrapper">
        {item &&
          item.map((el) => {
            let swiperClassName = "swiper__item";
            if (el.productId === activeItem) {
              swiperClassName += " active-item";
            }
            return (
              <div
                className={swiperClassName}
                key={el.productId}
                onClick={(e) => onClickItem(e, el.productId)}
              >
                <div
                  className="swiper__item__img"
                  style={{ backgroundImage: `url("${el.imageUrl}")` }}
                >
                  {el.discountRate > "0" && (
                    <div className="discount-badge">
                      {el.discountRate}
                      <span>%</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Swiper;
