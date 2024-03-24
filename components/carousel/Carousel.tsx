import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselImageContainer } from "./CarouselImageContainer";

import "./Style.scss";

const CarouselComponent = () => (
  <div className="carousel-container">
    <Carousel
      additionalTransfrom={0}
      arrows
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <CarouselImageContainer
        alt="Tractor Model Image"
        headline="A 1000"
        image="https://picsum.photos/400"
      />
      <CarouselImageContainer
        alt="Tractor Model Image"
        headline="Model B 2000"
        image="https://picsum.photos/400"
      />
      <CarouselImageContainer
        alt="Tractor Model Image"
        headline="Model C 3000"
        image="https://picsum.photos/400"
      />
      <CarouselImageContainer
        alt="Tractor Model Image"
        headline="Model D 4000"
        image="https://picsum.photos/400"
      />
      <CarouselImageContainer
        alt="Tractor Model Image"
        headline="Model E 5000"
        image="https://picsum.photos/400"
      />
    </Carousel>
  </div>
);

export default CarouselComponent;
