import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import { TbCircle } from "react-icons/tb";

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

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate:(-${activeIndex * 100})` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} />;
        })}
      </div>
      <div className="carousel-buttons">
        <button className="button-arrow">
          <BsFillArrowLeftSquareFill />
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button className="indicator-buttons">
                <TbCircle />
              </button>
            );
          })}
        </div>
        <button className="button-arrow">
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
