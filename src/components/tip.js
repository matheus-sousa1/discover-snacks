import React from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import microwave from "../img/microondas.png";
import meat from "../img/carne.png";
import leftovers from "../img/sobras.png";

const Tip = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carrossel">
      <Slider {...settings}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="content-slide"
        >
          <h3>
            {" "}
            Ao usar o micro-ondas dê preferência para as vasilhas de vidro,
            segundo especialistas da área médica (oncologistas), certos tipos de
            plásticos, quando aquecidos podem liberar substâncias muito nociva à
            saúde.
          </h3>
          <img style={{ width: 100 }} src={microwave} alt="microondas" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="content-slide"
        >
          <h3>
            {" "}
            As sobras da refeição devem ser guardadas imediatamente na
            geladeira, não deixe panelas com alimento sobre o fogão, esta
            prática faz com que as bactérias se multipliquem facilmente, também
            não é recomendável acondicionar as panelas na geladeira, o ideal é
            transferir o alimento para uma vasilha de vidro ou plástico com
            tampa.
          </h3>
          <img style={{ width: 100 }} src={leftovers} alt="sobras" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="content-slide"
        >
          <h3>
            {" "}
            Evite manipular carne antes das hortaliças e legumes que serão
            ingeridos crus, caso isto aconteça, lave bem a pia e bancada, e faça
            desinfecção com água sanitária, pois a carne passará por um período
            de cocção que matará todas as bactérias e, os outros alimentos não.
          </h3>

          <img style={{ width: 100 }} src={meat} alt="carne" />
        </div>
      </Slider>
    </div>
  );
};

export default Tip;
