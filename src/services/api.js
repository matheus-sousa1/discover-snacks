import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const baseURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=14bc0ec7cf3541e8850eff3d7244935f&includeNutrition=true`;

const Api = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  console.log(post);

  console.log(post.results[0].title);
  console.log(post.results[8]);

  //array image

  const revenueImage = [
    post.results[0].image,
    post.results[1].image,
    post.results[2].image,
    post.results[3].image,
    post.results[4].image,
    post.results[5].image,
    post.results[6].image,
    post.results[7].image,
    post.results[8].image,
  ];

  //array titles
  const revenueTitle = [
    post.results[0].title,
    post.results[1].title,
    post.results[2].title,
    post.results[3].title,
    post.results[4].title,
    post.results[5].title,
    post.results[6].title,
    post.results[7].title,
    post.results[8].title,
  ];

  // 14bc0ec7cf3541e8850eff3d7244935f
  //

  return (
    <div>
      <h1>make Snack</h1>
      <div className="container">
        <div className="foods">
          <img src={revenueImage[0]} alt="food" />
          <h3>{revenueTitle[0]}</h3>
        </div>
        <div className="foods">
          <img src={revenueImage[1]} alt="food" />
          <h3>{revenueTitle[1]}</h3>
        </div>
        <div className="foods">
          <img src={revenueImage[2]} alt="food" />
          <h3>{revenueTitle[2]}</h3>
        </div>
        <div className="foods">
          <img src={revenueImage[3]} alt="food" />
          <h3>{revenueTitle[3]}</h3>
        </div>
        <div className="foods">
          <img src={revenueImage[4]} alt="food" />
          <h3>{revenueTitle[4]}</h3>
        </div>
        <div className="foods">
          <img src={revenueImage[5]} alt="food" />
          <h3>{revenueTitle[5]}</h3>
        </div>
        <div className="foods">
          <img src={revenueImage[6]} alt="food" />
          <h3>{revenueTitle[6]}</h3>
        </div>
        <div className="foods">
          <img src={revenueImage[7]} alt="food" />
          <h3>{revenueTitle[7]}</h3>
        </div>
        <div className="foods">
          <img src={revenueImage[8]} alt="food" />
          <h3>{revenueTitle[8]}</h3>
        </div>
      </div>
    </div>
  );
};

export default Api;
