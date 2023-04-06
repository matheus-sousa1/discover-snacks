import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";

const baseURL = `https://api.spoonacular.com/recipes/informationBulk?ids=782585,716426,715497,715415,716406,644387,715446,782601,795751&apiKey=14bc0ec7cf3541e8850eff3d7244935f`;
//const FindInstructions = `https://api.spoonacular.com/recipes/informationBulk?ids=&apiKey=14bc0ec7cf3541e8850eff3d7244935f`;
//782585,716426, 715497,715415, 716406,644387,715446,782601,795751,
const Revenues = () => {
  const [post, setPost] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [brown, setBrown] = useState(false);
  const [berry, setBerry] = useState(false);
  const [lentil, setLentil] = useState(false);
  const [pea, setPea] = useState(false);
  const [kale, setKale] = useState(false);
  const [beef, setBeef] = useState(false);

  const [bean, setBean] = useState(false);
  const [fagita, setFagita] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const modalBrown = () => {
    setBrown(!brown);
  };

  const modalBerry = () => {
    setBerry(!berry);
  };

  const modalLentil = () => {
    setLentil(!lentil);
  };

  const modalPea = () => {
    setPea(!pea);
  };

  const kaleModal = () => {
    setKale(!kale);
  };

  const beefModal = () => {
    setBeef(!beef);
  };

  const beanModal = () => {
    setBean(!bean);
  };

  const fagitaModal = () => {
    setFagita(!fagita);
  };

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  //console.log(post);

  //console.log(post.results[0].title);
  //console.log(post.results[8]);

  //array imageType

  const revenueimageType = [
    post[0].image,
    post[1].image,
    post[2].image,
    post[3].image,
    post[4].image,
    post[5].image,
    post[6].image,
    post[7].image,
    post[8].image,
  ];

  //array titles
  const revenueTitle = [
    post[0].title,
    post[1].title,
    post[2].title,
    post[3].title,
    post[4].title,
    post[5].title,
    post[6].title,
    post[7].title,
    post[8].title,
  ];

  //instructions
  const revenueInstructions = [
    post[0].instructions,
    post[1].instructions,
    post[2].instructions,
    post[3].instructions,
    post[4].instructions,
    post[5].instructions,
    post[6].instructions,
    post[7].instructions,
    post[8].instructions,
  ];

  //console.log(post[0].extendedIngredients[0]);

  // 14bc0ec7cf3541e8850eff3d7244935f
  //https://api.spoonacular.com/recipes/informationBulk?ids=782585,716426,715497,715415,716406,644387,715446,782601,795751

  return (
    <div>
      <div className="container" id="revenue">
        <div className="foods">
          <img src={revenueimageType[0]} alt="asparagus" />
          <h3>{revenueTitle[0]}</h3>
          <button onClick={toggleModal}>Como preparar</button>
          {isOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={toggleModal}>
                  <MdCancel className="icon" />
                </span>
                <div className="content-main">
                  <img src={revenueimageType[0]} alt="asparagus" />
                  <h4>Modo de preparo</h4>
                  <p>{revenueInstructions[0]}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="foods">
          <img src={revenueimageType[2]} alt="brown" />
          <h3>{revenueTitle[2]}</h3>
          <button onClick={modalBrown}>Como preparar</button>
          {brown && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={modalBrown}>
                  <MdCancel className="icon" />
                </span>
                <div className="content-main">
                  <img src={revenueimageType[2]} alt="brown" />
                  <h4>Modo de preparo</h4>
                  <p>{revenueInstructions[2]}</p>
                </div>
              </div>
            </div>
          )}
        </div>
       
        <div className="foods">
          <img src={revenueimageType[1]} alt="food" />
          <h3>{revenueTitle[1]}</h3>
          <button onClick={modalBerry}>Como preparar</button>
          {berry && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={modalBerry}>
                  <MdCancel className="icon" />
                </span>
                <div className="content-main">
                  <img src={revenueimageType[1]} alt="brown" />
                  <h4>Modo de preparo</h4>
                  {revenueInstructions[1]}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="foods">
          <img src={revenueimageType[3]} alt="food" />
          <h3>{revenueTitle[3]}</h3>
          <button onClick={modalLentil}>Como preparar</button>
          {lentil && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={modalLentil}>
                  <MdCancel className="icon" />
                </span>
                <div className="content-main">
                  <img src={revenueimageType[3]} alt="brown" />
                  <h4>Modo de preparo</h4>
                  <p>{revenueInstructions[3]}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="foods delete">
          <img src={revenueimageType[4]} alt="food" />
          <h3>{revenueTitle[4]}</h3>
          <button onClick={modalPea}>Como preparar</button>
          {pea && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={modalPea}>
                  <MdCancel className="icon" />
                </span>
                <div className="content-main">
                  <img src={revenueimageType[4]} alt="brown" />
                  <h4>Modo de preparo</h4>
                  <p>{revenueInstructions[4]}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="foods delete">
          <img src={revenueimageType[5]} alt="food" />
          <h3>{revenueTitle[5]}</h3>
          <button onClick={kaleModal}>Como preparar</button>
          {kale && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={kaleModal}>
                  <MdCancel className="icon" />
                </span>
                <div className="content-main">
                  <img src={revenueimageType[5]} alt="food" />
                  <h4>Modo de preparo</h4>
                  <p>{revenueInstructions[5]}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="foods delete">
          <img src={revenueimageType[6]} alt="food" />
          <h3>{revenueTitle[6]}</h3>
          <button onClick={beefModal}>Como preparar</button>
          {beef && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={beefModal}>
                  <MdCancel className="icon" />
                </span>
                <div className="content-main">
                  <img src={revenueimageType[6]} alt="food" />
                  <h4>Modo de preparo</h4>
                  <p>{revenueInstructions[6]}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="foods delete">
          <img src={revenueimageType[7]} alt="food" />
          <h3>{revenueTitle[7]}</h3>
          <button onClick={beanModal}>Como preparar</button>
          {bean && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={beanModal}>
                  <MdCancel className="icon" />
                </span>
                <div className="content-main">
                  <img src={revenueimageType[7]} alt="food" />
                  <h4>Modo de preparo</h4>
                  <p>{revenueInstructions[7]}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="foods delete">
          <img src={revenueimageType[8]} alt="food" />
          <h3>{revenueTitle[8]}</h3>
          <button onClick={fagitaModal}>Como preparar</button>
          {fagita && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={fagitaModal}>
                  <MdCancel className="icon" />
                </span>
                <div className="content-main">
                  <img src={revenueimageType[8]} alt="food" />
                  <h4>Modo de preparo</h4>
                  <p>{revenueInstructions[8]}</p>
                </div>
              </div>
            </div>
          )}
        </div>
   
      </div>

 
      
    </div>
  );
};

export default Revenues;
