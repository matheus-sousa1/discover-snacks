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
        "Ao usar o micro-ondas dê preferência para as vasilhas de vidro, segundo especialistas da área médica, certos tipos de plásticos, quando aquecidos podem liberar substâncias muito nociva à saúde",
      image: require("../img/microondas.png"),
    },
    {
      description:
        "Evite manipular carne antes das hortaliças e legumes que serão ingeridos crus, caso isto aconteça, lave bem a pia e bancada, e faça desinfecção com água sanitária, pois a carne passará por um período de cocção que matará todas as bactérias e, os outros alimentos não.",
      image: require("../img/carne.png"),
    },
    {
      description:
        "As sobras da refeição devem ser guardadas imediatamente na geladeira, não deixe panelas com alimento sobre o fogão, esta prática faz com que as bactérias se multipliquem facilmente, também não é recomendável acondicionar as panelas na geladeira, o ideal é transferir o alimento para uma vasilha de vidro ou plástico com tampa.",
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
      <p className="title-carousel">Tips</p>
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
