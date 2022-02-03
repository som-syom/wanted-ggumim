import React, { useEffect, useRef, useState } from "react";
import SwiperItem from "Components/SwiperItem";
import "Components/scss/Swiper.scss";

function Swiper({ item, activeItem, onClickItem, currentX = 0 }) {
  const swiperRef = useRef();
  const sliderRef = useRef();
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    swiperRef.current.style.transitionDuration = "300ms";
    swiperRef.current.style.transform = `translateX(${currentX}px)`;
  }, [currentX, activeItem]);

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + sliderRef.current.scrollLeft);
    // setStartX(currentX);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollLeft } = sliderRef.current;
      sliderRef.current.scrollLeft = startX - e.pageX;
      if (scrollLeft === 0) {
        setStartX(e.pageX);
      }
    }
  };

  const delay = 10;
  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const onThrottleDragMove = throttle(onDragMove, delay);

  return (
    <div
      className="swiper__container"
      onMouseDown={onDragStart}
      onMouseMove={isDrag ? onThrottleDragMove : null}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={sliderRef}
    >
      <div className="swiper__wrapper" ref={swiperRef}>
        {item &&
          item.map((el, idx) => {
            return (
              <SwiperItem
                item={el}
                idx={idx}
                activeItem={activeItem}
                onClickItem={onClickItem}
                key={el.productId}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Swiper;
