import React, { useEffect, useRef } from "react";
import SwiperItem from "Components/SwiperItem";
import "Components/scss/Swiper.scss";

function Swiper({ item, activeItem, onClickItem, currentX = 0 }) {
  const swiperRef = useRef();

  useEffect(() => {
    swiperRef.current.style.transitionDuration = "300ms";
    swiperRef.current.style.transform = `translateX(${currentX}px)`;
  }, [currentX, activeItem]);

  return (
    <div className="swiper__container">
      <div className="swiper__wrapper" ref={swiperRef}>
        {item &&
          item.map((el, idx) => {
            return (
              <SwiperItem
                item={el}
                idx={idx}
                activeItem={activeItem}
                onClickItem={onClickItem}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Swiper;
