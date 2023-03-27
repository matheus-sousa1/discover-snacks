import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import {
  MdArrowCircleLeft,
  MdArrowCircleRight,
  MdFiberManualRecord,
} from "react-icons/md";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      description:
        "When using the microwave, give preference to glass containers, according to specialists in the medical field, certain types of plastic, when heated, can release substances that are very harmful to health",
      image: require("../img/microondas.png"),
    },
    {
      description:
        "Avoid handling meat before handling vegetables that will be eaten raw, if this happens, wash the sink and countertop well, and disinfect with bleach, as the meat will go through a cooking period that will kill all the bacteria and the other foods will not.",
      image: require("../img/carne.png"),
    },
    {
      description:
        "Meal leftovers should be immediately stored in the fridge, do not leave pans with food on the stove, this practice causes bacteria to multiply easily, it is also not recommended to put the pans in the fridge, the ideal is to transfer the food to a bowl glass or plastic with lid",
      image: require("../img/sobras.png"),
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <p className="title-carousel">Clue</p>
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>
      <div className="carousel-buttons">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="button-arrow"
        >
          <span class="material-symbols-outlined">
            <MdArrowCircleLeft className="icon-arrow" />
          </span>
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
                className="indicator-buttons"
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  <MdFiberManualRecord className="icon-circle" />
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">
            <MdArrowCircleRight className="icon-arrow" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
