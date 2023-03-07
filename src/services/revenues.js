import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const baseURL = `https://api.spoonacular.com/recipes/informationBulk?ids=782585,716426,715497,715415,716406,644387,715446,782601,795751&apiKey=14bc0ec7cf3541e8850eff3d7244935f`;
//const FindInstructions = `https://api.spoonacular.com/recipes/informationBulk?ids=&apiKey=14bc0ec7cf3541e8850eff3d7244935f`;
//782585,716426, 715497,715415, 716406,644387,715446,782601,795751,
const Revenues = () => {
  const [post, setPost] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
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
  console.log(post);

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

  // 14bc0ec7cf3541e8850eff3d7244935f
  //https://api.spoonacular.com/recipes/informationBulk?ids=782585,716426,715497,715415,716406,644387,715446,782601,795751

  return (
    <div>
      <h1>make Snack</h1>
      <div className="container">
        <div className="foods">
          <img src={revenueimageType[0]} alt="food" />
          <h3>{revenueTitle[0]}</h3>

          <button onClick={toggleModal}>Como preparar</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              <p>{revenueInstructions[0]}</p>
            </span>
        </div>
        </div>
        
        <div className="foods">
          <img src={revenueimageType[1]} alt="food" />
          <h3>{revenueTitle[1]}</h3>
          <dialog>{revenueInstructions[1]}</dialog>
        </div>
        <div className="foods">
          <img src={revenueimageType[2]} alt="food" />
          <h3>{revenueTitle[2]}</h3>
          <dialog>{revenueInstructions[2]}</dialog>
        </div>
        <div className="foods">
          <img src={revenueimageType[3]} alt="food" />
          <h3>{revenueTitle[3]}</h3>
          <dialog>{revenueInstructions[3]}</dialog>
        </div>
        <div className="foods">
          <img src={revenueimageType[4]} alt="food" />
          <h3>{revenueTitle[4]}</h3>
          <dialog>{revenueInstructions[4]}</dialog>
        </div>
        <div className="foods">
          <img src={revenueimageType[5]} alt="food" />
          <h3>{revenueTitle[5]}</h3>
          <dialog>{revenueInstructions[5]}</dialog>
        </div>
        <div className="foods">
          <img src={revenueimageType[6]} alt="food" />
          <h3>{revenueTitle[6]}</h3>
          <dialog>{revenueInstructions[6]}</dialog>
        </div>
        <div className="foods">
          <img src={revenueimageType[7]} alt="food" />
          <h3>{revenueTitle[7]}</h3>
          <dialog>{revenueInstructions[7]}</dialog>
        </div>
        <div className="foods">
          <img src={revenueimageType[8]} alt="food" />
          <h3>{revenueTitle[8]}</h3>
          <dialog>{revenueInstructions[8]}</dialog>
        </div>
      </div>
      </div>
   
  )
}

export default Revenues;
